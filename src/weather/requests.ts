import { Query, CityNameQuery, CityIdQuery, GeoApiQuery, ZipCodeQuery, CitiesIdQuery, WeatherResponseType } from "./derived-request-types";
import { today, fiveDaysFromNow, isBetween, fourDaysFromNow, sixteenDaysAhead, thirtyDaysAhead, isDaily, arrayToUrl, isPast, getUtcFromLocal, fromSameHour } from "./util";
import { UnifyApiResponse } from "./unification";
import { Result } from "../types";

export const request = async (
    query: Query,
    fetchImpl: (init: RequestInfo) => Promise<Response>,
    storage: Storage,
    reportError: (e: any) => void,
): Promise<Result[] | null> => {
    let tried = requestImpl(query);
    if (tried === null) {
        return null;
    }
    const stored = storage.getItem(tried[0]);
    if (stored) {
        return JSON.parse(stored);
    }
    try {
        const response = await fetchImpl(tried[0]);
        if (response.status === 200) {
            const json = await response.json();
            json.kind = tried[1];
            const unified = UnifyApiResponse(json);
            storage.setItem(tried[0], JSON.stringify(unified));
            return unified;
        } else {
            reportError(response);
        }
    } catch (e) {
        reportError(e);
    }
    return null;
};

const requestImpl = (query: Query): [string, WeatherResponseType] | null => {
    const base = byDate(query);

    return base ? [`https://${
        base[0]
        }${
        byQuery(query)
        }${
        query.units ? `&units=${query.units}` : ''
        }&appid=${
        query.appid
        }${
            query.lang && query.lang !== 'en' && query.lang !== 'us' ? `&lang=${query.lang}` : ''
        }`, base[1]] : null;
};

const byDate = (query: Query): [string, WeatherResponseType] | null => {
    if (isBetween(today(), fourDaysFromNow(), query) && query.by === 'hour' && query.isPro) {
        return ['pro.openweathermap.org/data/2.5/forecast/hourly?', 'hourly'];
    }
    if (isBetween(today(), sixteenDaysAhead(), query) && query.isPro) {
        return ['api.openweathermap.org/data/2.5/forecast/daily?cnt=16&', '16day'];
    }
    if (isBetween(today(), thirtyDaysAhead(), query) && query.isPro) {
        return ['pro.openweathermap.org/data/2.5/forecast/climate?', '30day'];
    }
    if (isDaily(query) && fromSameHour(query) && query.kind === 'geo') {
        return [`api.openweathermap.org/data/2.5/onecall?exclude=minutely${query.by === 'day' ? ',hourly' : ''}&`, 'onecall'];
    }
    if (query.kind === 'geo' && isPast(query)) {
        return [`api.openweathermap.org/data/2.5/onecall/timemachine?exclude=minutely${
            query.by === 'day' ? ',hourly' : ''
        }&dt=${
            Math.floor(getUtcFromLocal(query.from.getTime()) / 1000)
        }&`, 'onecall'];
    }
    if (isDaily(query) && fromSameHour(query) && query.by === 'day' && query.kind !== 'ids') {
        return ['api.openweathermap.org/data/2.5/weather?', 'daily'];
    }
    if (isDaily(query) && fromSameHour(query) && query.by === 'day' && query.kind === 'ids') {
        return ['api.openweathermap.org/data/2.5/group?', 'group'];
    }
    if (isBetween(today(), fiveDaysFromNow(), query)) {
        return ['api.openweathermap.org/data/2.5/forecast?', '5day'];
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
