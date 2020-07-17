import { WeatherResponse } from "./request-types";
import { Result } from "../types";

export const UnifyApiResponse = (response: WeatherResponse): Result[] => {
    switch (response.kind) {
        case 'daily':
        case 'hourly':
        case '5day':
            return response.list.map(res => ({
                address: response.city,
                clouds: res.clouds.all,
                dew_point: undefined,
                dt: res.dt,
                humidity: undefined,
                weather: [res],
                rain: res.precipitation.mode === 'rain' ? { '1h': res.precipitation.value, '3h': 0 } : undefined,
                pressure: undefined,
                snow: res.precipitation.mode === 'snow' ? { '1h': res.precipitation.value, '3h': 0 } : undefined,
                sunrise: response.city.sun.sunrise,
                sunset: response.city.sun.sunset,
                uvi: undefined,
                visibility: res.visibility.value,
                wind: {
                    degree: res.wind.deg,
                    speed: res.wind.speed,
                    gust: res.wind.gust,
                },
            }));
        case '16day':
        case '30day':
            return response.list.map(res => ({
                address: response.city,
                weather: res.weather,
                clouds: res.clouds,
                dew_point: res.dew_point,
                dt: res.dt,
                humidity: res.humidity,
                pressure: res.pressure,
                rain: res.rain,
                snow: res.snow,
                sunrise: res.sunrise,
                sunset: res.sunrise,
                uvi: res.uvi,
                visibility: res.visibility,
                wind: {
                    speed: res.speed,
                    degree: res.deg,
                    gust: res.speed,
                },
            }));
        case 'onecall':
            return [response.current, ...response.daily, ...response.hourly].map(res => ({
                address: {
                    name: '',
                    population: 0,
                    country: '',
                    id: -1,
                    sun: {
                        sunrise: response.current.sunrise,
                        sunset: response.current.sunset,
                    },
                    main: {
                        feels_like: response.current.feels_like.day,
                        grnd_level: response.current.pressure,
                        humidity: response.current.humidity,
                        pressure: response.current.pressure,
                        sea_level: response.current.pressure,
                        temp: response.current.temp.day,
                        temp_kf: response.current.temp.day,
                        temp_max: response.current.temp.max,
                        temp_min: response.current.temp.min,
                    },
                    coord: {
                        lat: response.lat,
                        lon: response.lon,
                    },
                    timezone: response.timezone_offset,
                },
                weather: res.weather,
                clouds: res.clouds,
                dew_point: res.dew_point,
                dt: res.dt,
                humidity: res.humidity,
                pressure: res.pressure,
                rain: res.rain,
                snow: res.snow,
                sunrise: res.sunrise,
                sunset: res.sunset,
                uvi: res.uvi,
                visibility: res.visibility,
                wind: {
                    degree: res.wind_deg,
                    speed: res.wind_speed,
                    gust: res.wind_speed,
                }
            }));
    }
};
