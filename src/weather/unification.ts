import { WeatherResponse, DailyForecast } from "./request-types";
import { Result } from "../types";

const getDailyResponse = (response: DailyForecast): Result => ({
    address: {
        coord: response.coord,
        country: response.sys ? response.sys.country : '',
        id: response.id,
        name: response.name,
        main: response.main,
        population: 0,
        sun: {
            sunrise: response.sys ? response.sys.sunrise * 1000 : 0,
            sunset: response.sys ? response.sys.sunset * 1000 : 0,
        },
        timezone: response.timezone,
    },
    weather: {
        clouds: response.clouds,
        dt: response.dt * 1000,
        dt_txt: '',
        precipitation: {
            mode: response.rain && response.rain['1h'] ? 'rain' : (response.snow && response.snow['1h'] ? 'snow' : 'no'),
            value: response.rain && response.rain['1h'] ? response.rain['1h'] : (response.snow && response.snow['1h'] ? response.snow['1h'] : 0),
        },
        rain: {
            '1h': response.rain && response.rain['1h'] ? response.rain['1h'] : 0,
            '3h': response.rain && response.rain['3h'] ? response.rain['3h'] : 0,
        },
        snow: {
            '1h': response.snow && response.snow['1h'] ? response.snow['1h'] : 0,
            '3h': response.snow && response.snow['3h'] ? response.snow['3h'] : 0,
        },
        sys: response.sys || {},
        visibility: {
            value: response.visibility,
        },
        weather: response.weather,
        wind: response.wind,
    },
});

export const UnifyApiResponse = (response: WeatherResponse): Result[] => {
    switch (response.kind) {
        case 'daily':
            return [getDailyResponse(response)];
        case 'group':
            return response.list.map(getDailyResponse);
        case 'hourly':
            return response.list.map(item => ({
                address: {
                    coord: response.city.coord,
                    country: response.country,
                    id: response.city.id,
                    name: response.city.name,
                    population: response.population,
                    sun: {
                        sunrise: response.sunrise * 1000,
                        sunset: response.sunset * 1000,
                    },
                    timezone: response.timezone,
                    main: item.main,
                },
                weather: {
                    clouds: {
                        all: item.clouds.all,
                    },
                    dt: item.dt * 1000,
                    dt_txt: '',
                    precipitation: {
                        mode: item.rain && item.rain['1h'] ? 'rain' : (item.snow && item.snow['1h'] ? 'snow' : 'no'),
                        value: item.rain && item.rain['1h'] ? item.rain['1h'] : (item.snow && item.snow['1h'] ? item.snow['1h'] : 0),
                    },
                    rain: {
                        '1h': item.rain && item.rain['1h'] ? item.rain['1h'] : 0,
                        '3h': 0,
                    },
                    snow: {
                        '1h': item.snow && item.snow['1h'] ? item.snow['1h'] : 0,
                        '3h': 0,
                    },
                    sys: {},
                    visibility: {
                        value: 0,
                    },
                    weather: item.weather,
                    wind: {
                        deg: item.wind.deg,
                        speed: item.wind.speed,
                        gust: 0,
                    },
                },
                wind: {
                    degree: item.wind.deg,
                    speed: item.wind.speed,
                    gust: 0,
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
                        sunrise: response.city.sunrise * 1000,
                        sunset: response.city.sunset * 1000,
                    },
                    timezone: response.city.timezone,
                    main: item.main,
                },
                weather: {
                    clouds: item.clouds,
                    dt: item.dt * 1000,
                    dt_txt: '',
                    precipitation: {
                        mode: item.rain && item.rain['3h'] ? 'rain' : (item.snow && item.snow['3h'] ? 'snow' : 'no'),
                        value: item.rain && item.rain['3h'] ? item.rain['3h'] : (item.snow && item.snow['3h'] ? item.snow['3h'] : 0),
                    },
                    rain: {
                        '1h': 0,
                        '3h': item.rain && item.rain['3h'] ? item.rain['3h'] : 0,
                    },
                    snow: {
                        '1h': 0,
                        '3h': item.snow && item.snow['3h'] ? item.snow['3h'] : 0,
                    },
                    sys: {},
                    visibility: {
                        value: 0,
                    },
                    weather: item.weather,
                    wind: {
                        deg: item.wind.deg,
                        speed: item.wind.speed,
                        gust: 0,
                    },
                },
                wind: {
                    degree: item.wind.deg,
                    speed: item.wind.speed,
                    gust: 0,
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
                        sunrise: item.sunrise * 1000,
                        sunset: item.sunset * 1000,
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
                    dt: item.dt * 1000,
                    dt_txt: '',
                    precipitation: {
                        mode: item.rain ? 'rain' : (item.snow ? 'snow' : 'no'),
                        value: item.rain ? item.rain : (item.snow ? item.snow : 0),
                    },
                    rain: {
                        '1h': item.rain,
                        '3h': 0,
                    },
                    snow: {
                        '1h': item.snow,
                        '3h': 0,
                    },
                    wind: {
                        deg: item.deg,
                        speed: item.speed,
                        gust: 0,
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
                ...[response.current, ...(response.hourly || [])].map(item => ({
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
                            sunrise: response.current.sunrise * 1000,
                            sunset: response.current.sunset * 1000,
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
                        dt: item.dt * 1000,
                        dt_txt: '',
                        precipitation: {
                            mode: item.rain && item.rain['1h'] ? 'rain' : (item.snow && item.snow['1h'] ? 'snow' : 'no') as any,
                            value: item.rain && item.rain['1h'] ? item.rain['1h'] : (item.snow && item.snow['1h'] ? item.snow['1h'] : 0),
                        },
                        rain: {
                            '1h': item.rain && item.rain['1h'] ? item.rain['1h'] : 0,
                            '3h': 0,
                        },
                        snow: {
                            '1h': item.snow && item.snow['1h'] ? item.snow['1h'] : 0,
                            '3h': 0,
                        },
                        sys: {},
                        visibility: {
                            value: item.visibility,
                        },
                        weather: item.weather,
                        wind: {
                            speed: item.wind_speed,
                            deg: item.wind_deg,
                            gust: item.wind_gust || 0,
                        }
                    },
                })),
                ...(response.daily ? response.daily.map(item => ({
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
                            sunrise: response.current.sunrise * 1000,
                            sunset: response.current.sunset * 1000,
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
                        dt: item.dt * 1000,
                        dt_txt: '',
                        precipitation: {
                            mode: item.rain ? 'rain' : (item.snow ? 'snow' : 'no') as any,
                            value: item.rain ? item.rain : (item.snow ? item.snow : 0),
                        },
                        rain: {
                            '1h': item.rain ? item.rain : 0,
                            '3h':  0,
                        },
                        snow: {
                            '1h': item.snow ? item.snow : 0,
                            '3h': 0,
                        },
                        sys: {},
                        visibility: {
                            value: item.visibility,
                        },
                        weather: item.weather,
                        wind: {
                            speed: item.wind_speed,
                            deg: item.wind_deg,
                            gust: item.wind_gust || 0,
                        }
                    },
                })) : []),
            ]
    }
};
