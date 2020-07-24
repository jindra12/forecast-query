import { Rain, Drizzle, Clear, Clouds, Thunderstorm, Misty, Smokey, Hazey, Dusty, Foggy, Sandy, Ashy, Squally, Tornado, Snow, Day, WeatherId, WeatherMain, TypeOfWeather } from "./derived-request-types";

export interface ListForecastQueries {
    /**
     * Returns a list of values describing rain outside
     */
    rainy: () => Promise<Rain[]>;
    /**
     * Returns a list of values describing drizzle outside
     */
    drizzle: () => Promise<Drizzle[]>;
    /**
     * Returns a list of values describing daylight outside
     */
    sunny: () => Promise<Clear[]>;
    /**
     * Returns a list of values describing cloudiness outside
     */
    cloudy: () => Promise<Clouds[]>;
    /**
     * Returns a list of values describing the storm outside
     */
    stormy: () => Promise<Thunderstorm[]>;
    /**
     * Returns a list of values describing the mist outside
     */
    misty: () => Promise<Misty[]>;
    /**
     * Returns a list of values describing smog outside
     */
    smoky: () => Promise<Smokey[]>
    /**
     * Returns a list of values describing haze outside
     */
    hazy: () => Promise<Hazey[]>;
    /**
     * Returns a list of values describing dust outside
     */
    dusty: () => Promise<Dusty[]>;
    /**
     * Returns a list of values describing fog outside
     */
    foggy: () => Promise<Foggy[]>;
    /**
     * Returns a list of values describing sand storm outside
     */
    sandy: () => Promise<Sandy[]>;
    /**
     * Returns a list of values describing volcanic ash outside
     */
    ashy: () => Promise<Ashy[]>;
    /**
     * Returns a list of values describing squall outside
     */
    squally: () => Promise<Squally[]>;
    /**
     * Describes the tornado outside. If this is not null at your location, run :).
     */
    tornado: () => Promise<Tornado[]>;
    /**
     * Returns a list of values describing snow outside
     */
    snowy: () => Promise<Snow[]>;
    /**
     * What kind of overall weather is outside
     */
    day: () => Promise<Day[]>;
    /**
     * Returns weather of selected date
     */
    is: <T extends WeatherId | WeatherMain>(what?: T) => Promise<TypeOfWeather[]>;
    temp: (type?: 'exact' | 'feel' | 'max' | 'min') => Promise<number[]>;
    pressure: (type?: 'default' | 'ground' | 'sea') => Promise<number[]>;
    humidity: () => Promise<number[]>;
    /**
     * Returns cloud percentage on the sky. Will return null if nothing is found
     */
    clouds: () => Promise<number[]>;
    /**
     * Returns visibility percentage. Will return null if nothing is found
     */
    visibility: () => Promise<number[]>;
    /**
     * Returns percipitation by percent. Returns null if nothing is found
     */
    percipitation: (mode?: 'rain' | 'snow', time?: '1h' | '3h') => Promise<number[]>;
    wind: (type?: 'speed' | 'degree' | 'gust') => Promise<number[]>;
    rain: (when?: '1h' | '3h') => Promise<number[]>;
    snow: (when?: '1h' | '3h') => Promise<number[]>;
    /**
     * Dates of sunrise or sundown
     */
    sun: (what?: 'rise' | 'set') => Promise<Date[]>;
}