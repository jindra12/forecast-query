import { Rain, Clear, Clouds, Thunderstorm, Drizzle, Day, WeatherId, WeatherMain, TypeOfWeather, Smokey, Tornado, Misty, Hazey, Dusty, Foggy, Sandy, Ashy, Squally, WeatherIcon, Weather, AdvancedApiPart, Address, Language } from "./weather/derived-request-types";

export interface ForecastQueries {
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
    is: <T extends WeatherId | WeatherMain>(what?: T) => Promise<TypeOfWeather | null>;
    temp: (type?: 'exact' | 'feel' | 'max' | 'min') => Promise<number | null>;
    pressure: (type?: 'default' | 'ground' | 'sea') => Promise<number | null>;
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
    precipitation: (mode?: 'rain' | 'snow', time?: '1h' | '3h') => Promise<number | null>;
    wind: (type?: 'speed' | 'degree' | 'gust') => Promise<number | null>;
    rain: (when?: '1h' | '3h') => Promise<number | null>;
    snow: (when?: '1h' | '3h') => Promise<number | null>;
    /**
     * Dates of sunrise or sundown
     */
    sun: (what?: 'rise' | 'down') => Promise<Date | null>;
}

export interface ForecastInfo {
    in: (...value: (string[] | number[])) => Forecast;
    at: (from: Date | string | number, to?: Date | string | number) => Forecast;
    around: (lat: number, lon: number) => Forecast;
    zip: (zip: string, country: Language) => Forecast;
    units: (units: 'metric' | 'imperial' | 'kelvin') => Forecast;
    language: (lang: Language) => Forecast;

    today: (from?: 'now' | 'midnight') => Forecast;
    tomorrow: () => Forecast;
    yesterday: () => Forecast;
    dayAfterTomorrow: () => Forecast;
    dayBeforeYesterday: () => Forecast;
    week: (kind?: 'all' | 'work') => Forecast;
    between: (from: Date | string | number, to: Date | string | number, by: 'day' | 'hour' | 'minute') => Forecast;
    hour: (which?: number) => Forecast;

    response: Result[];
    result: () => Promise<Result[]>;

    /**
     * Get url to icon from openweathermap api
     */
    icon: (ico: WeatherIcon) => string;

    fetchingFn?: (request: RequestInfo) => Promise<Response>;
    storage: Storage;
    location: Locator;
    dates: [Date, Date];
    reporter: (e: any) => void;
    unit?: 'metric' | 'imperial';
    lang: Language;

    /**
     * Can pass localStorage for caching. Can expire in an amount of mintues
     */
    store: (storage: Storage, expire?: 'never' | number) => Forecast;
    storeClearTimeout?: number;
    fetch: (fn: (input: RequestInfo) => Promise<Response>) => Forecast;
    error: (reporter: (e: any) => void) => Forecast;

    /**
     * Creates a new instance of Forecast from this one
     */
    copy: () => Forecast;
}

export type Forecast = ForecastQueries & ForecastInfo;

type KindOfLocator = { kind: 'places', places: string[] }
    | { kind: 'place', place: string }
    | { kind: 'ids', ids: number[] }
    | { kind: 'id', id: number }
    | { kind: 'geo', geo: { lat: number, lon: number } }
    | { kind: 'zip', zip: { code: string, country: Language } };

export interface Locator {
    places?: string[];
    ids?: number[];
    geo?: { lat: number, lon: number };
    zip?: { code: string, country: Language };
    get: () => (
        KindOfLocator
        | { kind: 'nothing' }
    );
    set: (item: KindOfLocator) => Locator;
}

export interface Result {
    weather: Weather;
    address: Address;
}