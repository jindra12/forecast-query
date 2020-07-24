import { Rain, Drizzle, Clear, Clouds, Thunderstorm, Misty, Smokey, Hazey, Dusty, Foggy, Sandy, Ashy, Squally, Tornado, Snow, Day, WeatherId, WeatherMain, TypeOfWeather } from "./derived-request-types";

export interface ListForecastQueries {
    /**
     * Returns a list of values describing rain outside
     */
    rainy: () => Promise<(Rain & { date: Date })[]>;
    /**
     * Returns a list of values describing drizzle outside
     */
    drizzle: () => Promise<(Drizzle & { date: Date })[]>;
    /**
     * Returns a list of values describing daylight outside
     */
    sunny: () => Promise<(Clear & { date: Date })[]>;
    /**
     * Returns a list of values describing cloudiness outside
     */
    cloudy: () => Promise<(Clouds & { date: Date })[]>;
    /**
     * Returns a list of values describing the storm outside
     */
    stormy: () => Promise<(Thunderstorm & { date: Date })[]>;
    /**
     * Returns a list of values describing the mist outside
     */
    misty: () => Promise<(Misty & { date: Date })[]>;
    /**
     * Returns a list of values describing smog outside
     */
    smoky: () => Promise<(Smokey & { date: Date })[]>
    /**
     * Returns a list of values describing haze outside
     */
    hazy: () => Promise<(Hazey & { date: Date })[]>;
    /**
     * Returns a list of values describing dust outside
     */
    dusty: () => Promise<(Dusty & { date: Date })[]>;
    /**
     * Returns a list of values describing fog outside
     */
    foggy: () => Promise<(Foggy & { date: Date })[]>;
    /**
     * Returns a list of values describing sand storm outside
     */
    sandy: () => Promise<(Sandy & { date: Date })[]>;
    /**
     * Returns a list of values describing volcanic ash outside
     */
    ashy: () => Promise<(Ashy & { date: Date })[]>;
    /**
     * Returns a list of values describing squall outside
     */
    squally: () => Promise<(Squally & { date: Date })[]>;
    /**
     * Describes the tornado outside. If this is not null at your location, run :).
     */
    tornado: () => Promise<(Tornado & { date: Date })[]>;
    /**
     * Returns a list of values describing snow outside
     */
    snowy: () => Promise<(Snow & { date: Date })[]>;
    /**
     * What kind of overall weather is outside
     */
    day: () => Promise<(Day & { date: Date })[]>;
    /**
     * Returns weather of selected date
     */
    is: <T extends WeatherId | WeatherMain>(what?: T) => Promise<(TypeOfWeather & { date: Date })[]>;
    temp: (type?: 'exact' | 'feel' | 'max' | 'min') => Promise<({ value: number, date: Date })[]>;
    pressure: (type?: 'default' | 'ground' | 'sea') => Promise<({ value: number, date: Date })[]>;
    humidity: () => Promise<({ value: number, date: Date })[]>;
    /**
     * Returns cloud percentage on the sky. Will return null if nothing is found
     */
    clouds: () => Promise<({ value: number, date: Date })[]>;
    /**
     * Returns visibility percentage. Will return null if nothing is found
     */
    visibility: () => Promise<({ value: number, date: Date })[]>;
    /**
     * Returns percipitation by percent. Returns null if nothing is found
     */
    percipitation: (mode?: 'rain' | 'snow', time?: '1h' | '3h') => Promise<({ value: number, date: Date })[]>;
    wind: (type?: 'speed' | 'degree' | 'gust') => Promise<({ value: number, date: Date })[]>;
    rain: (when?: '1h' | '3h') => Promise<({ value: number, date: Date })[]>;
    snow: (when?: '1h' | '3h') => Promise<({ value: number, date: Date })[]>;
    /**
     * Dates of sunrise or sundown
     */
    sun: (what?: 'rise' | 'set') => Promise<({ value: Date, date: Date })[]>;
}