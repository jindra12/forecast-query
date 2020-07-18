import { Query, CityNameQuery, CityIdQuery, GeoApiQuery, ZipCodeQuery, CitiesIdQuery, WeatherResponseType } from "./derived-request-types";
import { today, fiveDaysFromNow, isBetween, fourDaysFromNow, sixteenDaysAhead, thirtyDaysAhead, isDaily, arrayToUrl } from "./util";
import { UnifyApiResponse } from "./unification";
import { Result } from "../types";

export const request = async (
    query: Query,
    fetchImpl: (init: RequestInfo) => Promise<Response>,
    cache: (url: string, contents: Result[]) => void,
    cached: (url: string) => Result[] | null,
    reportError: (e: any) => void,
    tries: number = 4,
): Promise<Result[] | null> => {
    let tried = requestImpl(query);
    while (tried === null && query.easedLevel < tries) {
        ease(query);
        tried = requestImpl(query);
    }
    if (!tried) {
        return null;
    }
    if (cached(tried[0])) {
        return cached(tried[0]);
    }
    try {
        const response = await fetchImpl(tried[0]);
        if (response.status === 200) {
            const json = await response.json();
            console.log(json);
            json.kind = tried[1];
            const unified = UnifyApiResponse(json);
            cache(tried[0], unified);
            return unified;
        } else {
            reportError(response);
        }
    } catch (e) {
        reportError(e);
    }

    return null;
};

const ease = async (query: Query) => {
    switch(query.easedLevel) {
        case 1:
            query.by = 'day';
            break;
        case 2: 
            query.from = today();
            query.to = fiveDaysFromNow();
            break;
        case 3:
            query.from = today();
            query.to = today();
            break;
    }
}

const requestImpl = (query: Query): [string, WeatherResponseType] | null => {
    const base = byDate(query);
    query.easedLevel += 1;
    return base ? [`https://${
        base[0]
    }${
        byQuery(query)
    }${
        query.units ? `&units=${query.units}` : ''
    }&appid=${
        query.appid
    }&lang=${
        query.lang || 'en'
    }`, base[1]] : null;
};

const byDate = (query: Query): [string, WeatherResponseType] | null => {
    if (isDaily(query) && query.kind === 'geo') {
        return [`api.openweathermap.org/data/2.5/onecall?exclude=minutely${query.by === 'day' ? ',hourly' : ''}`, 'onecall'];
    }
    if (query.kind === 'geo') {
        return [`api.openweathermap.org/data/2.5/onecall/timemachine?dt=${query.from.getTime()}&exclude=minutely${query.by === 'day' ? ',hourly' : ''}&`, 'onecall'];
    }
    if (isDaily(query) && query.by === 'day') {
        return ['api.openweathermap.org/data/2.5/weather?', 'daily'];
    }
    if (isBetween(today(), fourDaysFromNow(), query) && query.by === 'hour' && query.isPro) {
        return ['pro.openweathermap.org/data/2.5/forecast/hourly?', 'hourly'];
    }
    if (isBetween(today(), fiveDaysFromNow(), query)) {
        return ['api.openweathermap.org/data/2.5/forecast?', '5day'];
    }
    if (isBetween(today(), sixteenDaysAhead(), query) && query.isPro) {
        return ['pro.openweathermap.org/data/2.5/forecast/daily?', '16day'];
    }
    if (isBetween(today(), thirtyDaysAhead(), query) && query.isPro) {
        return ['pro.openweathermap.org/data/2.5/forecast/climate?', '30day'];
    }
    return null;
};

const byQuery = (query: Query) => {
    switch (query.kind) {
        case 'city':
            return byCityName(query);
        case 'geo':
            return byGeo(query);
        case 'id':
            return byCityId(query);
        case 'ids':
            return byCitiesId(query);
        case 'zip':
            return byZip(query);
    }
};

const byCityName = (query: CityNameQuery) => `q=${arrayToUrl(query.cityName, query.stateCode, query.countryCode)}`;
const byCityId = (query: CityIdQuery) => `id=${query.cityId}`;
const byCitiesId = (query: CitiesIdQuery) => `id=${query.citiesId.join(',')}`;
const byGeo = (query: GeoApiQuery) => `lat=${query.lat}&lon=${query.lon}`;
const byZip = (query: ZipCodeQuery) => `zip=${query.zipCode}${query.countryCode ? `,${query.countryCode}` : ''}`;
