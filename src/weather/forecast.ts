import { Forecast, Result, Locator } from "../types";
import { today, daysAheadFromNow, closestWeek } from "./util";
import { request } from "./requests";
import { Query, ApiQuery } from "./derived-request-types";
import { querify } from "./querify";

const location = (): Locator => {
    const loc: Locator = {
        set: item => {
            delete loc.geo;
            delete loc.ids;
            delete loc.places;
            delete loc.zip;
            switch (item.kind) {
                case 'geo':
                    loc.geo = item.geo;
                    break;
                case 'id':
                    loc.ids = [item.id];
                    break;
                case 'ids':
                    loc.ids = item.ids;
                    break;
                case 'place':
                    loc.places = [item.place];
                    break;
                case 'places':
                    loc.places = item.places;
                    break;
                case 'zip':
                    loc.zip = item.zip;
                    break;
            }
            return loc;
        },
        get: () => {
            if (loc.geo) {
                return { kind: 'geo', geo: loc.geo };
            }
            if (loc.ids && loc.ids.length === 1) {
                return { kind: 'id', id: loc.ids[0] };
            }
            if (loc.ids && loc.ids.length > 1) {
                return { kind: 'ids', ids: loc.ids };
            }
            if (loc.places && loc.places.length === 1) {
                return { kind: 'place', place: loc.places[0] };
            }
            if (loc.places && loc.places.length > 1) {
                return { kind: 'places', places: loc.places };
            }
            if (loc.zip) {
                return { kind: 'zip', zip: loc.zip };
            }
            return { kind: 'nothing' };
        }
    };

    return loc;
};

const storageUnit: Storage & { stored: { [key: string]: Result[] } } = {
    stored: {},
    clear: () => {
        storageUnit.stored = {};
    },
    getItem: (key: string) => storageUnit.stored[key] ? JSON.stringify(storageUnit.stored[key]) : null,
    key: (index: number) => Object.keys(storageUnit.stored)[index],
    length: 0,
    removeItem: (key: string) => {
        if (storageUnit.stored[key] !== undefined) {
            (storageUnit as any).length -= 1;
            delete storageUnit.stored[key];
        }
    },
    setItem: (key: string, value: string) => {
        if (storageUnit.stored[key] === undefined) {
            (storageUnit as any).length += 1;
            storageUnit.stored[key] = JSON.parse(value);
        }
    },
};

export const forecast = (apiKey: string, isPro: boolean = false): Forecast => {
    if (!apiKey) {
        throw Error('Cannot initialize forecast without api key from openweathermap.org!')
    }
    const todayValue = today();
    const end = new Date(todayValue);
    end.setHours(23);
    end.setMinutes(59);
    end.setSeconds(59);
    const forec: Forecast = querify({
        dates: [todayValue, end],
        storage: storageUnit,
        location: location().set({ kind: 'place', place: 'New York' }),
        lang: 'en',
        language: lang => {
            forec.lang = lang;
            forec.response = [];
            return forec;
        },
        units: unit => {
            forec.unit = unit === 'kelvin' ? undefined : unit;
            forec.response = [];
            return forec;
        },
        reporter: console.warn,
        fetchingFn: typeof window !== 'undefined' ? window.fetch : undefined,
        around: (lat, lon) => {
            forec.location.set({ kind: 'geo', geo: { lat, lon } });
            forec.response = [];
            return forec;
        },
        at: (from, to) => {
            if (!to) {
                const end = new Date(from);
                end.setHours(23);
                end.setMinutes(59);
                end.setSeconds(59);
                forec.dates = [new Date(from), end];
            } else {
                forec.dates = [new Date(from), new Date(to)];
            }
            forec.subscribers.forEach(agent => agent(forec.dates[0], forec.dates[1]));
            return forec;
        },
        copy: () => {
            const copy = { ...forec };
            delete copy.storeClearTimeout;
            return copy;
        },
        fetch: fn => {
            forec.fetchingFn = fn;
            return forec;
        },
        in: (...places) => {
            if (places.length > 0) {
                if (typeof places[0] === 'string') {
                    if (places.length > 1) {
                        forec.location.set({ kind: 'places', places: places as string[] });
                    } else {
                        forec.location.set({ kind: 'place', place: places[0] as string });
                    }
                }
                if (typeof places[0] === 'number') {
                    if (places.length > 1) {
                        forec.location.set({ kind: 'ids', ids: places as number[] });
                    } else {
                        forec.location.set({ kind: 'id', id: places[0] as number });
                    }                    
                }
                forec.response = [];
            }
            return forec;
        },
        zip: (code, country) => {
            forec.location.set({ kind: 'zip', zip: { code, country } });
            forec.response = [];
            return forec;
        },
        error: reporter => {
            forec.reporter = reporter;
            return forec;
        },
        subscribe: agent => {
            forec.subscribers.push(agent);
            return forec;
        },
        clearSubscribers: () => {
            forec.subscribers = [];
            return forec;
        },
        subscribers: [],
        dayAfterTomorrow: () => {
            forec.at(daysAheadFromNow(2));
            return forec;
        },
        dayBeforeYesterday: () => {
            forec.at(daysAheadFromNow(-2));
            return forec;
        },
        tomorrow: () => {
            forec.at(daysAheadFromNow(1));
            return forec;
        },
        yesterday: () => {
            forec.at(daysAheadFromNow(-1));
            return forec;
        },
        today: () => {
            const todayValue = today();
            const end = new Date(todayValue);
            end.setHours(23);
            end.setMinutes(59);
            end.setSeconds(59);
            forec.at(todayValue, end);
            return forec;
        },
        next: which => {
            if (!which || which === 'day') {
                const nextFrom = new Date(forec.dates[0]);
                nextFrom.setDate(nextFrom.getDate() + 1);
                const nextEnd = new Date(nextFrom);
                nextEnd.setDate(nextEnd.getDate() + 1);
                forec.at(nextFrom, nextEnd);
            } else {
                const nextFrom = new Date(forec.dates[0]);
                nextFrom.setHours(nextFrom.getHours() + 1);
                const nextEnd = new Date(nextFrom);
                nextEnd.setDate(nextEnd.getDate() + 1);
                forec.at(nextFrom, nextEnd);
            }
            return forec;
        },
        previous: which => {
            if (!which || which === 'day') {
                const nextFrom = new Date(forec.dates[0]);
                nextFrom.setDate(nextFrom.getDate() - 1);
                const nextEnd = new Date(nextFrom);
                nextEnd.setDate(nextEnd.getDate() + 1);
                forec.at(nextFrom, nextEnd);
            } else {
                const nextFrom = new Date(forec.dates[0]);
                nextFrom.setHours(nextFrom.getHours() - 1);
                const nextEnd = new Date(nextFrom);
                nextEnd.setDate(nextEnd.getDate() + 1);
                forec.at(nextFrom, nextEnd);
            }
            return forec;
        },
        week: kind => {
            forec.at(...closestWeek(kind || 'all'));
            return forec;
        },
        hour: which => {
            const movedDate = new Date(forec.dates[0]);
            movedDate.setHours(which);
            const end = new Date(movedDate.toString());
            end.setHours(23);
            end.setMinutes(59);
            end.setSeconds(59);
            forec.at(movedDate, end);
            return forec;
        },
        icon: ico => `http://openweathermap.org/img/wn/${ico}@2x.png`,
        store: (storage, timeout) => {
            forec.storage = storage;
            if (timeout !== undefined && timeout !== 'never') {
                if (forec.storeClearTimeout !== undefined) {
                    clearInterval(forec.storeClearTimeout);
                }
                forec.storeClearTimeout = setInterval(() => {
                    forec.response = [];
                    forec.storage.clear();
                }, timeout * 60 * 1000) as any;
            }
            return forec;
        },
        response: [],
        result: async () => {
            const filterResultsByDate = (results: Result[]) => results.filter(
                res => res.weather.dt >= forec.dates[0].getTime() 
                    && res.weather.dt <= forec.dates[1].getTime()
            );

            const fetcher = forec.fetchingFn;

            if (fetcher === undefined) {
                return forec.response;
            }

            const getByDate = filterResultsByDate(forec.response);

            if (getByDate.length > 0) {
                return getByDate;
            } else {
                forec.response = [];
            }
            const locationResolved = forec.location.get();
            let apiQuery: ApiQuery = {
                appid: apiKey,
                isPro,
                units: forec.unit,
                lang: forec.lang,
                from: forec.dates[0],
                to: forec.dates[1],
                by: !isPro && locationResolved.kind !== 'geo' ? 'day' : 'hour',
            };
            const buildResponse = (query: Query) => request(
                query,
                fetcher,
                (url, contents) => forec.storage.setItem(url, JSON.stringify(contents)),
                url => {
                    const item = forec.storage.getItem(url);
                    if (!item) {
                        return null;
                    }
                    return JSON.parse(item);
                },
                forec.reporter,
            );
            switch (locationResolved.kind) {
                case 'geo':
                    forec.response.push(...(await buildResponse({
                        ...apiQuery,
                        kind: 'geo',
                        lat: locationResolved.geo.lat,
                        lon: locationResolved.geo.lon,
                    }) || []));
                    break;
                case 'id':
                    forec.response.push(...(await buildResponse({
                        ...apiQuery,
                        kind: 'id',
                        cityId: locationResolved.id.toString(),
                    }) || []));
                    break;
                case 'ids':
                    forec.response.push(...(await buildResponse({
                        ...apiQuery,
                        kind: 'ids',
                        citiesId: locationResolved.ids.map(id => id.toString()),
                    }) || []));                    
                    break;
                case 'place':
                    forec.response.push(...(await buildResponse({
                        ...apiQuery,
                        kind: 'city',
                        cityName: locationResolved.place,
                    }) || []));
                    break;
                case 'places':
                    forec.response.push(...(await buildResponse({
                        ...apiQuery,
                        kind: 'city',
                        cityName: locationResolved.places.join(','),
                    }) || []));
                    break;
                case 'zip':
                    forec.response.push(...(await buildResponse({
                        ...apiQuery,
                        kind: 'zip',
                        zipCode: locationResolved.zip.code,
                        countryCode: locationResolved.zip.country,
                    }) || []));
                    break;
            }
            forec.response = forec.response.sort((a, b) => a.weather.dt - b.weather.dt);
            return filterResultsByDate(forec.response);
        },
    });
    return forec;
};