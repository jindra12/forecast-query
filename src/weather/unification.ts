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
                    main: response.main,
                    population: 0,
                    sun: {
                        sunrise: response.sys.sunrise,
                        sunset: response.sys.sunset,
                    },
                    timezone: response.timezone,
                },
                weather: {
                    clouds: response.clouds,
                    dt: response.dt,
                    dt_txt: '',
                    precipitation: {
                        mode: response.rain && response.rain['1h'] ? 'rain' : (response.snow && response.snow['1h'] ? 'snow' : 'no'),
                        value: response.rain && response.rain['1h'] ? response.rain['1h'] : (response.snow && response.snow['1h'] ? response.snow['1h'] : 0),
                    },
                    rain: response.rain,
                    snow: response.snow,
                    sys: response.sys,
                    visibility: {
                        value: 0,
                    },
                    weather: response.weather,
                    wind: response.wind,
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
                    main: item.main,
                },
                weather: {
                    clouds: {
                        all: item.main.clouds,
                    },
                    dt: item.dt,
                    dt_txt: '',
                    precipitation: {
                        mode: item.main.rain && item.main.rain['1h'] ? 'rain' : (item.main.snow && item.main.snow['1h'] ? 'snow' : 'no'),
                        value: item.main.rain && item.main.rain['1h'] ? item.main.rain['1h'] : (item.main.snow && item.main.snow['1h'] ? item.main.snow['1h'] : 0),
                    },
                    rain: {
                        '1h': item.main.rain['1h'],
                        '3h': item.main.rain['1h'],
                    },
                    snow: {
                        '1h': item.main.snow['1h'],
                        '3h': item.main.snow['1h'],
                    },
                    sys: {},
                    visibility: {
                        value: 0,
                    },
                    weather: item.main.weather,
                    wind: {
                        deg: item.main.wind.deg,
                        speed: item.main.wind.speed,
                        gust: item.main.wind.speed,
                    },
                },
                wind: {
                    degree: item.main.wind.deg,
                    speed: item.main.wind.speed,
                    gust: item.main.wind.speed,
                },
            }));
        case '5day':
            return response.list.map(item => ({
                address: {
                    coord: response.city.coord,
                    country: response.city.country,
                    id: response.city.id,
                    name: response.city.name,
                    population: 0,
                    sun: {
                        sunrise: response.city.sunrise,
                        sunset: response.city.sunset,
                    },
                    timezone: response.city.timezone,
                    main: item.main,
                },
                weather: {
                    clouds: item.clouds,
                    dt: item.dt,
                    dt_txt: '',
                    precipitation: {
                        mode: item.rain && item.rain['3h'] ? 'rain' : (item.snow && item.snow['3h'] ? 'snow' : 'no'),
                        value: item.rain && item.rain['3h'] ? item.rain['3h'] : (item.snow && item.snow['3h'] ? item.snow['3h'] : 0),
                    },
                    rain: {
                        '1h': item.rain['3h'],
                        '3h': item.rain['3h'],
                    },
                    snow: {
                        '1h': item.snow['3h'],
                        '3h': item.snow['3h'],
                    },
                    sys: {},
                    visibility: {
                        value: 0,
                    },
                    weather: item.weather,
                    wind: {
                        deg: item.wind.deg,
                        speed: item.wind.speed,
                        gust: item.wind.speed,
                    },
                },
                wind: {
                    degree: item.wind.deg,
                    speed: item.wind.speed,
                    gust: item.wind.speed,
                },
            }));
        case '16day':
        case '30day':
            return response.list.map(item => ({
                address: {
                    coord: response.city.coord,
                    country: response.country,
                    id: response.city.id,
                    name: response.city.name,
                    population: 0,
                    sun: {
                        sunrise: item.sunrise,
                        sunset: item.sunset,
                    },
                    timezone: response.timezone,
                    main: {
                        feels_like: item.feels_like.day,
                        grnd_level: item.pressure,
                        sea_level: item.pressure,
                        pressure: item.pressure,
                        humidity: item.humidity,
                        temp: item.temp.day,
                        temp_max: item.temp.max,
                        temp_min: item.temp.min,
                    },
                },
                weather: {
                    clouds: {
                        all: item.clouds,
                    },
                    dt: item.dt,
                    dt_txt: '',
                    precipitation: {
                        mode: item.rain ? 'rain' : (item.snow ? 'snow' : 'no'),
                        value: item.rain ? item.rain : (item.snow ? item.snow : 0),
                    },
                    rain: {
                        '1h': item.rain,
                        '3h': item.rain,
                    },
                    snow: {
                        '1h': item.snow,
                        '3h': item.snow,
                    },
                    wind: {
                        deg: item.deg,
                        speed: item.speed,
                        gust: item.speed,
                    },
                    sys: {},
                    visibility: {
                        value: 0,
                    },
                    weather: item.weather,
                },
            }));
        case 'onecall':
            return [
                ...[response.current, ...response.hourly].map(item => ({
                    address: {
                        coord: {
                            lat: response.lat,
                            lon: response.lon,
                        },
                        country: 'en',
                        id: 0,
                        name: '',
                        population: 0,
                        sun: {
                            sunrise: response.current.sunrise,
                            sunset: response.current.sunset,
                        },
                        timezone: response.timezone_offset,
                        main: {
                            feels_like: item.feels_like,
                            grnd_level: item.pressure,
                            sea_level: item.pressure,
                            pressure: item.pressure,
                            humidity: item.humidity,
                            temp: item.temp,
                            temp_max: item.temp,
                            temp_min: item.temp,
                        }
                    },
                    weather: {
                        clouds: {
                            all: item.clouds,
                        },
                        dt: item.dt,
                        dt_txt: '',
                        precipitation: {
                            mode: item.rain && item.rain['1h'] ? 'rain' : (item.snow && item.snow['1h'] ? 'snow' : 'no') as any,
                            value: item.rain && item.rain['1h'] ? item.rain['1h'] : (item.snow && item.snow['1h'] ? item.snow['1h'] : 0),
                        },
                        rain: {
                            '1h': item.rain['1h'] ? item.rain['1h'] : 0,
                            '3h': item.rain['1h'] ? item.rain['1h'] : 0,
                        },
                        snow: {
                            '1h': item.snow['1h'] ? item.snow['1h'] : 0,
                            '3h': item.snow['1h'] ? item.snow['1h'] : 0,
                        },
                        sys: {},
                        visibility: {
                            value: item.visibility,
                        },
                        weather: item.weather,
                        wind: {
                            speed: item.wind_speed,
                            deg: item.wind_deg,
                            gust: item.wind_gust || item.wind_speed,
                        }
                    },
                })),
                ...(response.daily.map(item => ({
                    address: {
                        coord: {
                            lat: response.lat,
                            lon: response.lon,
                        },
                        country: 'en',
                        id: 0,
                        name: '',
                        population: 0,
                        sun: {
                            sunrise: response.current.sunrise,
                            sunset: response.current.sunset,
                        },
                        timezone: response.timezone_offset,
                        main: {
                            feels_like: item.feels_like.day,
                            grnd_level: item.pressure,
                            sea_level: item.pressure,
                            pressure: item.pressure,
                            humidity: item.humidity,
                            temp: item.temp.day,
                            temp_max: item.temp.max,
                            temp_min: item.temp.min,
                        }
                    },
                    weather: {
                        clouds: {
                            all: item.clouds,
                        },
                        dt: item.dt,
                        dt_txt: '',
                        precipitation: {
                            mode: item.rain ? 'rain' : (item.snow ? 'snow' : 'no') as any,
                            value: item.rain ? item.rain : (item.snow ? item.snow : 0),
                        },
                        rain: {
                            '1h': item.rain ? item.rain : 0,
                            '3h': item.rain ? item.rain : 0,
                        },
                        snow: {
                            '1h': item.snow ? item.snow : 0,
                            '3h': item.snow ? item.snow : 0,
                        },
                        sys: {},
                        visibility: {
                            value: item.visibility,
                        },
                        weather: item.weather,
                        wind: {
                            speed: item.wind_speed,
                            deg: item.wind_deg,
                            gust: item.wind_gust || item.wind_speed,
                        }
                    },
                }))),
            ]
    }
};
