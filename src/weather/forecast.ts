import { Forecast, Result } from "../types";
import { today, daysAheadFromNow, closestWeek } from "./util";

const storageUnit: Storage & { stored: { [key: string]: Result } } = {
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

    const forec: Forecast = {
        dates: [todayValue, end],
        storage: storageUnit,
        location: ['Prague'],
        reporter: console.warn,
        fetchingFn: window.fetch,
        around: (lat, lon) => {
            forec.location = { lat, lon };
            return forec;
        },
        at: (...dates) => {
            forec.dates = dates.map(d => new Date(d)).sort((a, b) => a.getTime() - b.getTime());
            return forec;
        },
        between: (from, to) => forec.at(from, to),
        copy: () => ({...forec}),
        fetch: fn => {
            forec.fetchingFn = fn;
            return forec;
        },
        in: (...places) => {
            forec.location = places;
            return forec;
        },
        error: reporter => {
            forec.reporter = reporter;
            return forec;
        },
        dayAfterTomorrow: () => {
            forec.dates = [today(), daysAheadFromNow(2)];
            return forec;
        },
        dayBeforeYesterday: () => {
            forec.dates = [daysAheadFromNow(-2), today()];
            return forec;
        },
        tomorrow: () => {
            forec.dates = [today(), daysAheadFromNow(1)];
            return forec;
        },
        yesterday: () => {
            forec.dates = [daysAheadFromNow(-1), today()];
            return forec;
        },
        today: from => {
            const todayValue = !from || from === 'midnight' ? today() : new Date();
            const end = new Date(todayValue);
            end.setHours(23);
            end.setMinutes(59);
            end.setSeconds(59);
            forec.dates = [todayValue, end];
            return forec;
        },
        icon: ico => `http://openweathermap.org/img/wn/${ico}@2x.png`,
        week: kind => {
            forec.dates = closestWeek(kind || 'all');
            return forec;
        },
        hour: which => {
            const realWhich = which || new Date().getHours();
            const movedDate = today();
            movedDate.setHours(realWhich);
            const end = new Date(movedDate);
            end.setHours(23);
            end.setMinutes(59);
            end.setSeconds(59);
            forec.dates = [movedDate, end];
            return forec;
        },
        store: (storage, timeout) => {
            forec.storage = storage;
            if (timeout !== undefined && timeout !== 'never') {
                if (forec.storeClearTimeout !== undefined) {
                    clearInterval(forec.storeClearTimeout);
                }
                forec.storeClearTimeout = setInterval(forec.storage.clear, timeout * 60 * 1000) as any;
            } 
            return forec;
        },
        
    };
    return forec;
};