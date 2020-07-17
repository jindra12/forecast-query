import { ForecastInfo, ForecastQueries, Forecast } from "../types";
import { Ashy, TypeOfWeather, WeatherMain } from "./request-types";

export const querify = (forecast: ForecastInfo): Forecast => {
    const getTypeOfWeather = async <T extends TypeOfWeather>(main: T["main"]): Promise<TypeOfWeather | null> => (
        await forecast.result()
    ).reduce(
        (p: TypeOfWeather | null, c) => Boolean(p)
            ? p
            : c.weather.reduce(
                (p: TypeOfWeather | null, c) => Boolean(p)
                    ? p
                    : c.weather.reduce(
                        (p: TypeOfWeather | null, c) => Boolean(p)
                            ? c.main === main ? c : p
                            : null,
                        null,
                    ),
                null,
            ),
        null,
    );

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
    };

    return { ...forecast, ...queries };
};