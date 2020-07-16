import { Rain, Clear, Clouds, Thunderstorm, Drizzle, Day, WeatherId, WeatherMain, TypeOfWeather, Smokey, Tornado, Misty, Hazey, Dusty, Foggy, Sandy, Ashy, Squally, WeatherIcon } from "./weather/request-types";

export interface Forecast extends Promise<Forecast> {
    in: (...value: (string[] | Array<{ lat: number, lon: number }>)) => Forecast;
    at: (...value: (Date | number | string)[]) => Forecast;

    rainy: () => Promise<Rain | null>;
    drizzle: () => Promise<Drizzle | null>;
    sunny: () => Promise<Clear | null>;
    cloudy: () => Promise<Clouds | null>;
    stormy: () => Promise<Thunderstorm | null>;
    misty: () => Promise<Misty | null>;
    smoky: () => Promise<Smokey | null>
    hazy: () => Promise<Hazey | null>;
    dusty: () => Promise<Dusty | null>;
    foggy: () => Promise<Foggy | null>;
    sandy: () => Promise<Sandy | null>;
    ashy: () => Promise<Ashy | null>;
    squally: () => Promise<Squally | null>;
    tornado: () => Promise<Tornado | null>;

    day: () => Promise<Day>;
    is: <T extends WeatherId | WeatherMain | undefined = undefined>(what?: T) => Promise<T extends undefined ? TypeOfWeather : TypeOfWeather | null>;
    temp: (type?: 'exact' | 'feel' | 'max' | 'min', from?: number, to?: number) => Promise<number | null>;
    pressure: (type?: 'default' | 'ground' | 'sea', from?: number, to?: number) => Promise<number | null>;
    humidity: (from?: number, to?: number) => Promise<number | null>;
    /**
     * Returns cloud percentage on the sky. Will return null if nothing is found
     */
    clouds: () => Promise<number | null>;
    /**
     * Returns visibility percentage. Will return null if nothing is found
     */
    visibility: () => Promise<number | null>;
    /**
     * Returns percipitation by percent. Returns null if nothing is found
     */
    precipitation: (mode?: 'rain' | 'snow') => Promise<number | null>;
    wind: (type?: 'speed' | 'degree' | 'gust') => Promise<number | null>;
    rain: (when?: '1h' | '3h') => Promise<number | null>;
    snow: (when?: '1h' | '3h') => Promise<number | null>;
    /**
     * Dates of sunrise or sundown
     */
    sun: (what?: 'rise' | 'down') => Promise<Date | null>;

    today: (from?: 'now' | 'midnight') => Forecast;
    tomorrow: () => Forecast;
    yesterday: () => Forecast;
    dayAfterTomorrow: () => Forecast;
    dayBeforeYesterday: () => Forecast;
    week: (kind?: 'all' | 'work') => Forecast;
    between: (from: Date | string | number, to: Date | string | number, by: 'day' | 'hour' | 'minute') => Forecast;
    hour: (which?: number) => Forecast;

    /**
     * Get url to icon from openweathermap api
     */
    icon: (ico: WeatherIcon) => string;

    /**
     * Can pass localStorage for caching. Can expire in an amount of mintues
     */
    store: (storage: Storage, expire?: 'never' | number) => Forecast;
    fetch: (fn: (input: RequestInfo) => Promise<Response>) => Forecast;
    error: (reporter: (e: any) => void) => Forecast;
}