import { Rain, Drizzle, Clear, Clouds, Thunderstorm, Misty, Smokey, Hazey, Dusty, Foggy, Sandy, Ashy, Squally, Tornado, Snow, Day, WeatherId, WeatherMain, TypeOfWeather } from "./derived-request-types";

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