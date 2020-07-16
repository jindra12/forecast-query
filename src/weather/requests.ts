import { Query, CityNameQuery, CityIdQuery, GeoApiQuery, ZipCodeQuery, CitiesIdQuery } from "./request-types";

export const request = async (
    query: Query,
    fetchImpl: (init: RequestInfo) => Promise<Response>,
    tries: number = 6
) => {
    let tried = requestImpl(query);
    while (tried === null && query.easedLevel < tries) {
        ease(query);
        tried = requestImpl(query);
    }
    return tried ? fetchImpl(tried) : null;
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

const requestImpl = (query: Query) => {
    const base = byDate(query);
    query.easedLevel += 1;
    return base ? `${
        base
    }${
        byQuery(query)
    }${
        query.units ? `&units=${query.units}` : ''
    }&appid=${
        query.appid
    }&lang=${
        query.lang || 'en'
    }` : null;
};

const arrayToUrl = (...array: Array<string | undefined>) => array.filter(s => s).join(',');

const today = () => new Date();

const daysAheadFromNow = (days: number) => {
    const now = getDateWoTime(new Date());
    now.setDate(now.getDate() + days);
    return now;
}

const fourDaysFromNow = () => daysAheadFromNow(4);
const fiveDaysFromNow = () => daysAheadFromNow(5);
const sixteenDaysAhead = () => daysAheadFromNow(16);
const thirtyDaysAhead = () =>  daysAheadFromNow(30);

const isBetween = (from: Date, to: Date, query: Query) => from.getTime() <= query.from.getTime()
    && to.getTime() >= query.from.getTime()
    && from.getTime() <= query.to.getTime()
    && to.getTime() >= query.to.getTime();

const getDateWoTime = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());

const compareDates = (...date: Date[]) => {
    const first = date[0];
    return date.reduce((p: boolean, c) => !p ? false : first.getTime() === c.getTime(), true);
}

const isDaily = (query: Query): boolean => compareDates(
    getDateWoTime(today()),
    getDateWoTime(query.from),
    getDateWoTime(query.to)
);

const byDate = (query: Query): string | null => {
    if (isBetween(today(), fourDaysFromNow(), query) && query.by === 'hour' && query.isPro) {
        return 'pro.openweathermap.org/data/2.5/forecast/hourly?';
    }
    if (isBetween(today(), fiveDaysFromNow(), query)) {
        return 'api.openweathermap.org/data/2.5/forecast?';
    }
    if (isBetween(today(), sixteenDaysAhead(), query) && query.isPro) {
        return 'pro.openweathermap.org/data/2.5/forecast/daily?';
    }
    if (isBetween(today(), thirtyDaysAhead(), query) && query.isPro) {
        return 'pro.openweathermap.org/data/2.5/forecast/climate?';
    }
    if (isDaily(query) && query.kind === 'geo') {
        return `api.openweathermap.org/data/2.5/onecall?exclude=minutely${query.by === 'day' ? ',hourly' : ''}`;
    }
    if (query.kind === 'geo') {
        return `api.openweathermap.org/data/2.5/onecall/timemachine?dt=${query.from.getTime()}&exclude=minutely${query.by === 'day' ? ',hourly' : ''}&`;
    }
    if (isDaily(query) && query.by === 'day') {
        return 'api.openweathermap.org/data/2.5/weather?';
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
