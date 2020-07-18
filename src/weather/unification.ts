import { WeatherResponse } from "./request-types";
import { Result } from "../types";

export const UnifyApiResponse = (response: WeatherResponse): Result[] => {
    switch (response.kind) {
        case 'daily':
            return [{
                address: {
                    coord: response.coord,
                    country: response.sys.country,
                    id: response.id,
                    name: response.name,
                    main: {
                        feels_like: response.main.feels_like,
                        grnd_level: response.main.grnd_level,
                        humidity: response.main.humidity,
                        pressure: response.main.pressure,
                        sea_level: response.main.sea_level,
                        temp: response.main.temp,
                        temp_max: response.main.temp_max,
                        temp_min: response.main.temp_min,
                    },
                    population: 0,
                    sun: {
                        sunrise: response.sys.sunrise,
                        sunset: response.sys.sunset,
                    },
                    timezone: response.timezone,
                },
                weather: response.weather,
                wind: {
                    degree: response.wind.speed,
                    gust: response.wind.gust || response.wind.speed,
                    speed: response.wind.speed,
                },
            }];
        case 'hourly':
            return response.list.map(item => ({
                address: {
                    coord: response.city.coord,
                    country: response.country,
                    id: response.city.id,
                    name: response.city.name,
                    population: response.population,
                    sun: {
                        sunrise: response.sunrise,
                        sunset: response.sunset,
                    },
                    timezone: response.timezone,
                    main: {
                        feels_like: item.main.feels_like,
                        grnd_level: item.main.grnd_level,
                        
                    }
                },
                weather: [],
                wind: {
                    degree: item.main.wind.deg,
                    speed: item.main.wind.speed,
                    gust: item.main.wind.speed,
                },
            }));
        case '5day':
        case '16day':
        case '30day':
        case 'onecall':
    }
};
