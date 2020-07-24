import { ListForecastQueries } from "./list-query-types";
import { Forecast } from "..";

const interval = (begin: Date, end: Date, by: 'hour' | 'day') => {
    const acc: Date[] = [];
    let start = new Date(begin);
    while (start.getTime() < end.getTime()) {
        acc.push(new Date(start));
        if (by === 'day') {
            start.setDate(start.getDate() + 1);
        } else {
            start.setHours(start.getHours() + 1);
        }
    }
    return acc;
}

const resolveList = async <T>(
    time: Date[],
    copied: Forecast,
    iter: (forec: Forecast) => Promise<T | null>
) => {
    await copied.result();
    return (await Promise.all(
        time.map(async unit => ([await iter(copied.at(unit)), unit]))
    )).filter(res => res[0] !== null).map(res => {
        if (res[0] instanceof Date || typeof res[0] === 'number') {
            return {
                value: res[0],
                date: res[1],
            };
        } else {
            return { ...res[0], date: res[1] }
        }
    }) as any;
}

export const listModification = (forecast: Forecast, by: 'hour' | 'day'): ListForecastQueries => {
    const copied = forecast.copy();
    const time = interval(copied.dates[0], copied.dates[1], by);
    const modify: ListForecastQueries = {
        ashy: () => resolveList(time, copied, forec => forec.ashy()),
        rainy: () => resolveList(time, copied, forec => forec.rainy()),
        drizzle: () => resolveList(time, copied, forec => forec.drizzle()),
        sunny: () => resolveList(time, copied, forec => forec.sunny()),
        cloudy: () => resolveList(time, copied, forec => forec.cloudy()),
        stormy: () => resolveList(time, copied, forec => forec.stormy()),
        misty: () => resolveList(time, copied, forec => forec.misty()),
        smoky: () => resolveList(time, copied, forec => forec.smoky()),
        hazy: () => resolveList(time, copied, forec => forec.hazy()),
        dusty: () => resolveList(time, copied, forec => forec.dusty()),
        foggy: () => resolveList(time, copied, forec => forec.foggy()),
        sandy: () => resolveList(time, copied, forec => forec.sandy()),
        squally: () => resolveList(time, copied, forec => forec.squally()),
        tornado: () => resolveList(time, copied, forec => forec.tornado()),
        snowy: () => resolveList(time, copied, forec => forec.snowy()),
        day: () => resolveList(time, copied, forec => forec.day()),
        is: what => resolveList(time, copied, forec => forec.is(what)),
        temp: type => resolveList(time, copied, forec => forec.temp(type)),
        pressure: type => resolveList(time, copied, forec => forec.pressure(type)),
        humidity: () => resolveList(time, copied, forec => forec.humidity()),
        clouds: () => resolveList(time, copied, forec => forec.clouds()),
        visibility: () => resolveList(time, copied, forec => forec.visibility()),
        percipitation: (mode, hour) => resolveList(time, copied, forec => forec.percipitation(mode, hour)),
        wind: type => resolveList(time, copied, forec => forec.wind(type)),
        rain: when => resolveList(time, copied, forec => forec.rain(when)),
        snow: when => resolveList(time, copied, forec => forec.snow(when)),
        sun: what => resolveList(time, copied, forec => forec.sun(what)),
    };

    return modify;
};