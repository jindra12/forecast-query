import { Rain, Clear, Clouds, Thunderstorm, Drizzle, Day, WeatherId, WeatherMain, TypeOfWeather, Smokey, Tornado, Misty, Hazey, Dusty, Foggy, Sandy, Ashy, Squally, WeatherIcon, Weather, Address, Language, Snow } from "./weather/derived-request-types";

export interface ForecastQueries {
    /**
     * Returns either a null, or a value describing rain outside
     */
    rainy: () => Promise<Rain | null>;
    /**
     * Returns either a null, or a value describing drizzle outside
     */
    drizzle: () => Promise<Drizzle | null>;
    /**
     * Returns either a null, or a value describing daylight outside
     */
    sunny: () => Promise<Clear | null>;
    /**
     * Returns either a null, or a value describing cloudiness outside
     */
    cloudy: () => Promise<Clouds | null>;
    /**
     * Returns either a null, or a value describing the storm outside
     */
    stormy: () => Promise<Thunderstorm | null>;
    /**
     * Returns either a null, or a value describing the mist outside
     */
    misty: () => Promise<Misty | null>;
    /**
     * Returns either a null, or a value describing smog outside
     */
    smoky: () => Promise<Smokey | null>
    /**
     * Returns either a null, or a value describing haze outside
     */
    hazy: () => Promise<Hazey | null>;
    /**
     * Returns either a null, or a value describing dust outside
     */
    dusty: () => Promise<Dusty | null>;
    /**
     * Returns either a null, or a value describing fog outside
     */
    foggy: () => Promise<Foggy | null>;
    /**
     * Returns either a null, or a value describing sand storm outside
     */
    sandy: () => Promise<Sandy | null>;
    /**
     * Returns either a null, or a value describing volcanic ash outside
     */
    ashy: () => Promise<Ashy | null>;
    /**
     * Returns either a null, or a value describing squall outside
     */
    squally: () => Promise<Squally | null>;
    /**
     * Describes the tornado outside. If this is not null at your location, run :).
     */
    tornado: () => Promise<Tornado | null>;
    /**
     * Returns either a null, or a value describing snow outside
     */
    snowy: () => Promise<Snow | null>;

    /**
     * What kind of overall weather is outside
     */
    day: () => Promise<Day>;
    /**
     * Returns weather of selected date
     */
    is: <T extends WeatherId | WeatherMain>(what?: T) => Promise<TypeOfWeather | null>;
    temp: (type?: 'exact' | 'feel' | 'max' | 'min') => Promise<number | null>;
    pressure: (type?: 'default' | 'ground' | 'sea') => Promise<number | null>;
    humidity: () => Promise<number | null>;
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
    percipitation: (mode?: 'rain' | 'snow', time?: '1h' | '3h') => Promise<number | null>;
    wind: (type?: 'speed' | 'degree' | 'gust') => Promise<number | null>;
    rain: (when?: '1h' | '3h') => Promise<number | null>;
    snow: (when?: '1h' | '3h') => Promise<number | null>;
    /**
     * Dates of sunrise or sundown
     */
    sun: (what?: 'rise' | 'set') => Promise<Date | null>;
}

export interface ForecastInfo {
    /**
     * Input address as string, or a series of city ids
     */
    in: (...value: (string[] | number[])) => Forecast;
    /**
     * Input a string date, timestamp or Date object to get a weather in this interval
     */
    at: (from: Date | string | number, to?: Date | string | number) => Forecast;
    /**
     * Input coordinates
     */
    around: (lat: number, lon: number) => Forecast;
    /**
     * Get zip + country (optional). If country is left empty, USA will be selected
     */
    zip: (zip: string, country?: Language) => Forecast;
    units: (units: 'metric' | 'imperial' | 'kelvin') => Forecast;
    language: (lang: Language) => Forecast;

    today: () => Forecast;
    tomorrow: () => Forecast;
    yesterday: () => Forecast;
    dayAfterTomorrow: () => Forecast;
    dayBeforeYesterday: () => Forecast;
    week: (kind?: 'all' | 'work') => Forecast;
    hour: (which: number) => Forecast;

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
     * Can pass localStorage for caching. Can expire in an amount of minutes
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
    | { kind: 'zip', zip: { code: string, country?: Language } };

export interface Locator {
    places?: string[];
    ids?: number[];
    geo?: { lat: number, lon: number };
    zip?: { code: string, country?: Language };
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