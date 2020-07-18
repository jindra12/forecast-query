import { Language, TypeOfWeather, LongForecastListItem } from "./derived-request-types";

/**
 * Source: https://openweathermap.org/api/hourly-forecast
 */
export interface HourlyForecast {
	/**
	 *  Response code
	 */ 
	code: string;
	/**
	 * Internal parameter
	 */
	message: string;
    city: {
        id: number; 
        name: string;
        coord: {
			lat: number;
			lon: number;			
		}
	};
    country: Language;
	population: number;
	/**
	 * Shift in seconds from UTC
	 */
	timezone: number;
	/**
	 * Sunrise time, unix, UTC
	 */
	sunrise: number;
	/**
	 * Sunset time, unix, UTC
	 */
	sunset: number;
	/**
	 * Number of timestamps returned by this API call
	 */ 
    cnt: number;
    list: [{
		/**
		 * Time of data forecasted, unix, UTC
		 */
		dt: number;
        main: {
			/**
			 * Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
			 */
			temp: number;
			/**
			 * This temperature parameter accounts for the human perception of weather.
			 */
			feels_like: number;
			temp_min: number;
			temp_max: number;
			pressure: number;
			/**
			 * Pressure at sea level
			 */
			sea_level: number;
			/**
			 * Pressure at ground level
			 */
			grnd_level: number;
			/**
			 * Percentage
			 */
			humidity: number;
			weather: TypeOfWeather[];
			/**
			 * Percentage
			 */
			clouds: number;
			wind: {
				/**
				 * Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
				 */
				speed: number;
				/**
				 * Which way the wind is blowing
				 */ 
				deg: number;
			};
			rain: {
				/**
				 * Rain volume for the past hour, mm
				 */
				'1h': number;
			} | undefined;
			snow: {
				/**
				 * Snow volume for the past hour, mm
				 */
				'1h': number;
			} | undefined;
			/**
			 * Part of the day (n - night, d - day)
			 */
			sys: string;
		}
	}];
};

export interface DailyForecast {
    coord: {
		lon: number;
		lat: number;
	};
	weather: TypeOfWeather[];
	/**
	 * Internal parameter
	 */
	base: string;
	main: {
		temp: number;
		/**
		 * This temperature parameter accounts for the human perception of weather.
		 */
		feels_like: number;
		/**
		 * hPa
		 */
		pressure: number;
		/**
		 * Percentage
		 */
		humidity: number;
		temp_min: number;
		temp_max: number;
		/**
		 * Pressure at sea level
		 */
		sea_level: number;
		/**
		 * Pressure on ground level
		 */
		grnd_level: number;
	};
	wind: {
		/**
		 * Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
		 */
		speed: number;
		/**
		 * Wind direction, degrees (meteorological)
		 */
		deg: number;
		/**
		 * Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
		 */
		gust: number
	};
	clouds: {
		/**
		 * Cloudiness, %
		 */
		all: number;
	};
	rain: {
		/**
		 * Rain volume for the last 1 hour, mm
		 */
		'1h': number;
		/**
		 * Rain volume for the last 3 hours, mm
		 */
		'3h': number;
	} | undefined;
	snow: {
		/**
		 * Snow volume for the last 1 hour, mm
		 */
		'1h': number;
		/**
		 * Snow volume for the last 3 hours, mm
		 */
		'3h': number;
	} | undefined;
	/**
	 * UTC datetime
	 */
	dt: number;
    sys: {
		type: string;
		id: string;
		message: string;
		country: Language;
		/**
		 * UTC time
		 */
		sunrise: number;
		/**
		 * UTC time
		 */
		sunset: number;
	};
	/**
	 * UTC shift in seconds
	 */
	timezone: number;
	/**
	 * City id
	 */
	id: number;
	/**
	 * City name
	 */
	name: string;
};

export interface FiveDayForecast {
	/**
	 * Internal parameter
	 */
	code: string;
	/**
	 * Internal parameter
	 */
    message: string;
    city: {
        id: number;
        name: string;
        coord: {
			lat: number;
			lon: number;
		};
		country: Language;
		/**
		 * UTC shift in seconds
		 */
        timezone: number;
        sunrise: number;
        sunset: number;
	};
	/**
	 * Number of lines returned by this API call
	 */
    cnt: number;
    list: [{
		/**
		 * Time of data forecasted, unix, UTC
		 */
		dt: number;
		main: {
			/**
			 * Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
			 */
			temp: number; 
			/**
			 * Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
			 */
            feels_like: number;
            temp_min: number;
			temp_max: number;
			/**
			 * Atmospheric pressure on the sea level by default, hPa
			 */
			pressure: number;
			/**
			 * Atmospheric pressure on the sea level, hPa
			 */
			sea_level: number;
			/**
			 * Ground level pressure
			 */
			grnd_level: number;
			/**
			 * Humidity, %
			 */
            humidity: number;
		};
		weather: TypeOfWeather[];
		clouds: {
			/**
			 * By precentage
			 */
			all: number;
		};
        wind: {
			/**
			 * Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
			 */
			speed: number;
			/**
			 * Wind direction, degrees (meteorological)
			 */
			deg: number;
		};
        rain: {
			/**
			 * Rain volume for last 3 hours, mm
			 */
			'3h': number;
		} | undefined;
		snow: {
			/**
			 * Snow volume for last 3 hours
			 */
			'3h': number;
		} | undefined;
	}];
}



export interface SixteenDayForecast {
    city: {
		id: number;
		name: string;
		coord: {
			lat: number;
			lon: number;
		};
	};
	country: Language;
	/**
	 * Shift in seconds from UTC
	 */
	timezone: number;
	cod: number;
	message: string;
	/**
	 * Number of lines returned by this API call
	 */
    cnt: number;
    list: LongForecastListItem[];
}

export interface ThirtyDayForecast {
    city: {
        id: number;
        name: string;
        coord: {
            lat: number;
            lon: number;
        }
    }
    country: Language;
    population: number;
    /**
     * Shift in seconds from UTC
     */
    timezone: number;
    cod: number;
    message: string;
    list: LongForecastListItem[];
}

export interface OneCallApi {
    /**
     * Geographical coordinates of the location (latitude)
     */
    lat: number;
    /**
     * Geographical coordinates of the location (longitude)
     */
    lon: number;
    /**
     * Timezone name for the requested location
     */
    timezone: string;
    /**
     * Shift in seconds from UTC
     */
    timezone_offset: number;
    /**
     * Current weather data API response
     */
    current: {
        /**
         * Current time, Unix, UTC
         */
        dt: number;
        /**
         * Sunrise time, Unix, UTC
         */
        sunrise: number;
        /**
         * Sunset time, Unix, UTC
         */
        sunset: number;
        /**
         * Temperature. Units - default: kelvin, metric: Celsius, imperial: Fahrenheit.
         */
        temp: number;
        /**
         * This temperature parameter accounts for the human perception of weather.
         */
        feels_like: number;
        /**
         * Atmospheric pressure on the sea level, hPa
         */
        pressure: number;
        /**
         * Humidity, %
         */
        humidity: number;
        /**
         * AAtmospheric temperature (varying according to pressure and humidity)
         */
        dew_point: number;
        /**
         * Cloudiness, %
         */
        clouds: number;
        /**
         * UV index
         */
        uvi: number;
        /**
         * Average visibility, metres
         */
        visibility: number;
        /**
         * Wind speed. Wind speed. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour. How to change units used
         */
        wind_speed: number;
        /**
         * (where available) Wind gust. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour. How to change units used
         */
        wind_gust?: number;
        /**
         *  Wind direction, degrees (meteorological)
         */
        wind_deg: number;
        rain: {
            /**
             * (where available) Rain volume for last hour, mm
             */
            '1h': number;
        } | undefined;
        snow: {
            /**
             * (where available) Snow volume for last hour, mm
             */
            '1h': number; 
        } | undefined;
            
        weather: TypeOfWeather[];
    };

    hourly?: [{
        dt: number;
        temp: number;
        /**
         * This accounts for the human perception of weather.
         */
        feels_like: number;
        /**
         * Atmospheric pressure on the sea level, hPa
         */
        pressure: number;
        /**
         * Humidity, %
         */
        humidity: number;
        /**
         * Atmospheric temperature (varying according to pressure and humidity)
         */
        dew_point: number;
        /**
         * Cloudiness, %
         */
        clouds: number;
        /**
         * Average visibility, metres
         */
        visibility: number;
        /**
         * Units – default: metre/sec, metric: metre/sec, imperial: miles/hour.How to change units used
         */
        wind_speed: number;
        /**
         * (where available) Wind gust. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour. How to change units used
         */
        wind_gust?: number;
        /**
         * Wind direction, degrees (meteorological)
         */
        wind_deg: number;
        rain: {
            /**
             * (where available) Rain volume for last hour, mm
             */
            '1h'?: number;
        } | undefined;
        snow: {
            /**
             * (where available) Snow volume for last hour, mm
             */
            '1h'?: number;
        } | undefined;
        weather: TypeOfWeather[];
    }]

    /**
     * Daily forecast weather data API response
     */
    daily?: [{
        /**
         * Time of the forecasted data, Unix, UTC
         */
        dt: number;
        /**
         * Sunrise time, Unix, UTC
         */
        sunrise: number;
        /**
         * Sunset time, Unix, UTC
         */
        sunset: number;
        temp: {
            morn: number;
            day: number;
            eve: number;
            night: number;
            min: number;
            max: number;
        };
        /**
         * This accounts for the human perception of weather.
         */
        feels_like: {
            morn: number;
            day: number;
            eve: number;
            night: number;
        };
        /**
         * Atmospheric pressure on the sea level, hPa
         */
        pressure: number;
        /**
         * Humidity, %
         */
        humidity: number;
        /**
         * Atmospheric temperature (varying according to pressure and humidity) below which water droplets begin to condense and dew can form. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.
         */
        dew_point: number;
        wind_speed: number;
        /**
         * (where available)
         */
        wind_gust: number;
        /**
         * Wind direction, degrees (meteorological)
         */
        wind_deg: number;
        /**
         * Cloudiness, %
         */
        clouds: number;
        /**
         * Midday UV index
         */
        uvi: number;
        /**
         * Average visibility, metres
         */
        visibility: number;
        /**
         * (where available) Precipitation volume, mm
         */
        rain: number;
        /**
         * (where available) Snow volume, mm
         */
        snow: number;
        weather: TypeOfWeather[];
    }];
}

export type WeatherResponse = (HourlyForecast & { kind: 'hourly' })
	| (DailyForecast & { kind: 'daily' })
	| (FiveDayForecast & { kind: '5day' })
	| (SixteenDayForecast & { kind: '16day' })
	| (ThirtyDayForecast & { kind: '30day' })
	| (OneCallApi & { kind: 'onecall' });