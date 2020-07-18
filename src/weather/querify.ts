import { ForecastInfo, ForecastQueries, Forecast, Result } from "../types";
import { TypeOfWeather, WeatherMain, WeatherId } from "./derived-request-types";

export const querify = (forecast: ForecastInfo): Forecast => {
    const getTypeOfWeatherBy = async <T extends TypeOfWeather>(compare: (item: TypeOfWeather) => boolean): Promise<T | null> => (
        await forecast.result()
    ).reduce(
        (p: TypeOfWeather | null, c) => Boolean(p)
            ? p
            : c.weather.reduce(
                (p: TypeOfWeather | null, c) => Boolean(p)
                    ? p
                    : c.weather.reduce(
                        (p: TypeOfWeather | null, c) => Boolean(p)
                            ? compare(c) ? c : p
                            : null,
                        null,
                    ),
                null,
            ),
        null,
    ) as T | null;

    const getTypeOfWeather = async <T extends TypeOfWeather>(main: T["main"]): Promise<T | null> => getTypeOfWeatherBy(c => c.main === main);
    const getIdOfWeather = async <T extends TypeOfWeather>(id: T["id"]): Promise<T | null> => getTypeOfWeatherBy(c => c.id === id);

    const getMeasurement = async <T>(measure: (res: Result) => T): Promise<NonNullable<T> | null> => (
        await forecast.result()
    ).map(measure).reduce(
        (p: T | null, c) => {
            if (c !== undefined && p === null) {
                return c;
            }
            return p;
        },
        null,
    ) as any;

    const queries: ForecastQueries = {
        ashy: async () => getTypeOfWeather('Ash') as any,
        cloudy: async () => getTypeOfWeather('Clouds') as any,
        drizzle: async () => getTypeOfWeather('Drizzle') as any,
        rainy: async () => getTypeOfWeather('Rain') as any,
        sunny: async () => getTypeOfWeather('Clear') as any,
        stormy: async () => getTypeOfWeather('Thunderstorm') as any,
        misty: async () => getTypeOfWeather('Mist') as any,
        smoky: async () => getTypeOfWeather('Smoke') as any,
        hazy: async () => getTypeOfWeather('Haze') as any,
        dusty: async () => getTypeOfWeather('Dust') as any,
        foggy: async () => getTypeOfWeather('Fog') as any,
        sandy: async () => getTypeOfWeather('Sand') as any,
        squally: async () => getTypeOfWeather('Squall') as any,
        tornado: async () => getTypeOfWeather('Tornado') as any,
        day: async () => getTypeOfWeather(undefined) as any,
        clouds: async () => getMeasurement(res => res.clouds),
        humidity: async () => getMeasurement(res => res.humidity),
        precipitation: async (mode, time) => getMeasurement(res => mode !== 'snow'
            ? res.rain && res.rain[time || '1h']
            : res.snow && res.snow[time || '1h']
        ),
        pressure: type => getMeasurement(res => !type || type === 'default' ? res.pressure : (
            type === 'ground'
                ? res.address.main.grnd_level
                : res.address.main.sea_level
        )),
        rain: mode => getMeasurement(res => res.rain && res.rain[mode || '1h']),
        snow: mode => getMeasurement(res => res.snow && res.snow[mode || '1h']),
        sun: type => getMeasurement(res => (!type || type === 'rise')
            ? new Date(res.sunrise || res.address.sun.sunrise)
            : new Date(res.sunset || res.address.sun.sunset)
        ),
        temp: type => getMeasurement(res => {
            switch(type || 'exact') {
                case 'exact':
                    return res.address.main.temp;
                case 'feel':
                    return res.address.main.feels_like;
                case 'max':
                    return res.address.main.temp_max;
                case 'min':
                    return res.address.main.temp_min;
            }
        }),
        visibility: () => getMeasurement(res => res.visibility),
        wind: type => getMeasurement(res => {
            switch (type || 'speed') {
                case 'speed':
                    return res.wind.speed;
                case 'degree':
                    return res.wind.degree;
                case 'gust':
                    return res.wind.gust;
            }
        }),
        is: async (what) => {
            if (!what) {
                return (await forecast.result()).find(res => res.weather.find(weather => weather.weather));
            }
            if (typeof what === 'string') {
                return getTypeOfWeather(what as WeatherMain) as any;
            }
            if (typeof what === 'number') {
                return getIdOfWeather(what as WeatherId) as any;
            }
            return null;
        },
    };

    return { ...forecast, ...queries };
};