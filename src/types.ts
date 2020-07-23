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

    /**
     * Which kind of units should the forecast use
     */
    units: (units: 'metric' | 'imperial' | 'kelvin') => Forecast;
    
    /**
     * Which language should be used to describe the weather
     */
    language: (lang: Language) => Forecast;

    /**
     * Read todays weather
     */
    today: () => Forecast;
    /**
     * Read tomorrows weather
     */
    tomorrow: () => Forecast;
    /**
     * Get forecast for the next day/hour from set date
     */
    next: (which?: 'day' | 'hour') => Forecast;

    /**
     * Get forecast for the previous day/hour from set date
     */
    previous: (which?: 'day' | 'hour') => Forecast;

    /**
     * Get yesterdays forecast
     */
    yesterday: () => Forecast;

    /**
     * Get forecast from the day after tomorrow
     */
    dayAfterTomorrow: () => Forecast;

    /**
     * Get forecast from the day before yesterday
     */
    dayBeforeYesterday: () => Forecast;

    /**
     * Load forecast for next week
     */
    week: (kind?: 'all' | 'work') => Forecast;

    /**
     * Get forecast for specific hour from set date
     */
    hour: (which: number) => Forecast;

    /**
     * Subscribed agents will listen to changes in api dates. Use this to get current weather after changing the date
     * New subscribers will rewrite the old
     * @param forecast - safe copied instance of forecast
     */
    subscribe: (...agents: Array<(from: Date, to: Date, forecast: Forecast) => (void | Promise<void>)>) => Forecast;

    /**
     * Clear all subscribers. Will wait until everybody is resolved
     */
    clearSubscribers: () => Promise<Forecast>;

    result: () => Promise<Result[]>;

    /**
     * Get url to icon from openweathermap api
     */
    icon: (ico: WeatherIcon) => string;

    /**
     * Can pass localStorage for caching. Can expire in an amount of minutes
     */
    store: (storage: Storage, expire?: 'never' | number) => Forecast;
    
    /**
     * Add your own fetching function, useful when working in node
     */
    fetch: (fn: (input: RequestInfo) => Promise<Response>) => Forecast;

    /**
     * Add your own error reporter, default: console.warn
     */
    error: (reporter: (e: any) => void) => Forecast;

    /**
     * Creates a new instance of Forecast from this one
     */
    copy: () => Forecast;

    // Properties

    fetchingFn?: (request: RequestInfo) => Promise<Response>;
    subscribers: Array<(from: Date, to: Date, forecast: Forecast) => (void | Promise<void>)>;
    running: Array<Promise<void> | void>;
    response: Result[];
    storage: Storage;
    location: Locator;
    dates: [Date, Date];
    reporter: (e: any) => void;
    unit?: 'metric' | 'imperial';
    lang: Language;
    storeClearTimeout?: number;
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