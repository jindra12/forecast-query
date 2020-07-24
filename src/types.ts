import { Language, WeatherIcon, Weather, Address } from "./weather/derived-request-types";
import { ForecastQueries } from "./weather/query-types";
import { ListForecastQueries } from "./weather/list-query-types";

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

    /**
     * Create a list of predictions through certain dates
     */
    list: (by?: 'hour' | 'day') => ListForecastQueries;

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
export type ForecastList = ListForecastQueries;

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