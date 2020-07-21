import { WeatherResponse, DailyForecast } from "./request-types";
import { Result } from "../types";
import { getLocalFromUtc } from "./util";

/**
 * Convert to local time using util
 * @param date Date in seconds
 * @param timezone Possible timezone
 */
const convertToLocal = (date?: number, timezone?: number) => !date
    ? 0
    : (
        getLocalFromUtc((date + (timezone || 0)) * 1000)
    );

const getDailyResponse = (response: DailyForecast): Result => ({
    address: {
        coord: response.coord,
        country: response.sys ? response.sys.country : '',
        id: response.id,
        name: response.name,
        main: response.main,
        population: 0,
        sun: {
            sunrise: response.sys ? convertToLocal(response.sys.sunrise, response.timezone) : 0,
            sunset: response.sys ? convertToLocal(response.sys.sunrise, response.timezone) : 0,
        },
        timezone: response.timezone || 0,
    },
    weather: {
        clouds: response.clouds,
        dt: convertToLocal(response.dt, response.timezone),
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
                        sunrise: convertToLocal(response.sunrise, response.timezone),
                        sunset: convertToLocal(response.sunset, response.timezone),
                    },
                    timezone: response.timezone || 0,
                    main: item.main,
                },
                weather: {
                    clouds: {
                        all: item.clouds.all,
                    },
                    dt: convertToLocal(item.dt, response.timezone),
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
                        sunrise: convertToLocal(response.city.sunrise, response.city.timezone),
                        sunset: convertToLocal(response.city.sunset, response.city.timezone),
                    },
                    timezone: response.city.timezone || 0,
                    main: item.main,
                },
                weather: {
                    clouds: item.clouds,
                    dt: convertToLocal(item.dt, response.city.timezone),
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
                        sunrise: convertToLocal(item.sunrise, response.timezone),
                        sunset: convertToLocal(item.sunset, response.timezone),
                    },
                    timezone: response.timezone || 0,
                    main: {
                        feels_like: item.feels_like ? item.feels_like.day : item.temp.day,
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
                    dt: convertToLocal(item.dt, response.timezone),
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
                            sunrise: convertToLocal(response.current.sunrise, response.timezone_offset),
                            sunset: convertToLocal(response.current.sunset, response.timezone_offset),
                        },
                        timezone: response.timezone_offset || 0,
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
                        dt: convertToLocal(item.dt, response.timezone_offset),
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
                            sunrise: convertToLocal(item.sunrise, response.timezone_offset),
                            sunset: convertToLocal(item.sunset, response.timezone_offset),
                        },
                        timezone: response.timezone_offset || 0,
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
                        dt: convertToLocal(item.dt, response.timezone_offset),
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
