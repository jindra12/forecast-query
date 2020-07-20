export type Language = 'af'
	| 'us'
	| 'al'
	| 'ar'
	| 'az'
	| 'bg'
	| 'ca'
	| 'cz'
	| 'da'
	| 'de'
	| 'el'
	| 'en'
	| 'eu'
	| 'fa'
	| 'fi'
	| 'fr'
	| 'gl'
	| 'he'
	| 'hi'
	| 'hr'
	| 'hu'
	| 'id'
	| 'it'
	| 'ja'
	| 'kr'
	| 'la'
	| 'lt'
	| 'mk'
	| 'no'
	| 'nl'
	| 'pl'
	| 'pt'
	| 'pt_br'
	| 'ro'
	| 'ru'
	| 'sv'
	| 'se'
	| 'sk'
	| 'sl'
	| 'sp'
	| 'es'
	| 'sr'
	| 'th'
	| 'tr'
	| 'ua'
	| 'uk'
	| 'vi'
	| 'zh_cn'
	| 'zh_tw'
	| 'zu';

interface ThunderstormType {
	main: 'Thunderstorm';
	icon: '11d';
	description: string;
}

export type Thunderstorm = ThunderstormType & ({ id: 200 }
	| { id: 201 }
	| { id: 202 }
	| { id: 210 }
	| { id: 211 }
	| { id: 212 }
	| { id: 221 }
	| { id: 230 }
	| { id: 231 }
	| { id: 232 });

interface DrizzleType {
	main: 'Drizzle';
	icon: '09d';
	description: string;
}

export type Drizzle = DrizzleType & ({ id: 300 }
	| { id: 301 }
	| { id: 302 }
	| { id: 310 }
	| { id: 311 }
	| { id: 312 }
	| { id: 313 }
	| { id: 314 }
	| { id: 321 });

export type Clear = { id: 800, main: 'Clear', description: string, icon: '01d' | '01n' };

export type Clouds = { id: 801, main: 'Clouds', description: string, icon: '02d' | '02n' }
	| { id: 802, main: 'Clouds', description: string, icon: '03d' | '03n' }
	| { id: 803, main: 'Clouds', description: string, icon: '04d' | '04n' }
	| { id: 804, main: 'Clouds', description: string, icon: '04d' | '04n' };

export type Rain = { id: 500, main: 'Rain', description: string, icon: '10d' }
	| { id: 500, main: 'Rain', description: string, icon: '10d' }
	| { id: 501, main: 'Rain', description: string, icon: '10d' }
	| { id: 502, main: 'Rain', description: string, icon: '10d' }
	| { id: 503, main: 'Rain', description: string, icon: '10d' }
	| { id: 504, main: 'Rain', description: string, icon: '10d' }
	| { id: 511, main: 'Rain', description: string, icon: '13d' }
	| { id: 520, main: 'Rain', description: string, icon: '09d' }
	| { id: 521, main: 'Rain', description: string, icon: '09d' }
	| { id: 522, main: 'Rain', description: string, icon: '09d' }
	| { id: 531, main: 'Rain', description: string, icon: '09d' };

export type Snow = { id: 600, main: 'Snow', description: string, icon: '13d' }
	| { id: 601, main: 'Snow', description: string, icon: '13d' }
	| { id: 602, main: 'Snow', description: string, icon: '13d' }
	| { id: 611, main: 'Snow', description: string, icon: '13d' }
	| { id: 612, main: 'Snow', description: string, icon: '13d' }
	| { id: 613, main: 'Snow', description: string, icon: '13d' }
	| { id: 615, main: 'Snow', description: string, icon: '13d' }
	| { id: 616, main: 'Snow', description: string, icon: '13d' }
	| { id: 620, main: 'Snow', description: string, icon: '13d' }
	| { id: 621, main: 'Snow', description: string, icon: '13d' }
	| { id: 622, main: 'Snow', description: string, icon: '13d' }

interface AtmosphereType {
	icon: '50d',
}

export interface Misty { id: 701, main: 'Mist', description: string }
export interface Smokey { id: 711, main: 'Smoke', description: string }
export interface Hazey { id: 721, main: 'Haze', description: string }
export interface DustyWhirls { id: 731, main: 'Dust', description: string }
export interface Foggy { id: 741, main: 'Fog', description: string }
export interface Sandy { id: 751, main: 'Sand', description: string }
export interface Dusty { id: 761, main: 'Dust', description: string }
export interface Ashy { id: 762, main: 'Ash', description: string }
export interface Squally { id: 771, main: 'Squall', description: string }
export interface Tornado { id: 781, main: 'Tornado', description: string }

export type Atmosphere = AtmosphereType & (
	Misty
	| Smokey
	| Hazey
	| DustyWhirls
	| Foggy
	| Sandy
	| Dusty
	| Ashy
	| Squally
	| Tornado);

interface DayType {
	id: undefined;
	main: undefined;
}

export type Day = DayType & ({ description: 'clear sky', icon: '01d.png' | '01n.png' }
	| { description: 'few clouds', icon: '02d.png' | '02n.png' }
	| { description: 'scattered clouds', icon: '03d.png' | '03n.png' }
	| { description: 'broken clouds', icon: '04d.png' | '04n.png' }
	| { description: 'shower rain', icon: '09d.png' | '09n.png' }
	| { description: 'rain', icon: '10d.png' | '10n.png' }
	| { description: 'thunderstorm', icon: '11d.png' | '11n.png' }
	| { description: 'snow', icon: '13d.png' | '13n.png' }
	| { description: 'mist', icon: '50d.png' | '50n.png' });


export type TypeOfWeather = Thunderstorm | Drizzle | Clear | Clouds | Rain | Snow | Atmosphere | Day;

export type WeatherId = TypeOfWeather['id'];
export type WeatherMain = TypeOfWeather['main'];
export type WeatherIcon = TypeOfWeather['icon'];

export interface Response {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	/**
	 * Atmospheric pressure on sea level
	 */
	sea_level: number;
	/**
	 * Atmosperic pressure on ground level
	 */
	grnd_level: number;
	humidity: number;
}
export interface Weather {
	/**
	 * UTC time
	 */
	dt: number;
	weather: TypeOfWeather[];
	clouds: {
		/**
		 * How cloudy it is by percentage
		 */
		all: number
	};
	visibility: {
		/**
		 * Visibility in percent
		 */
		value: number
	};
	precipitation: {
		value: number;
		mode: 'no' | 'rain' | 'snow';
	};
	wind: {
		speed: number;
		/**
		 * Direction
		 */
		deg: number;
		/**
		 * Gust speed
		 */
		gust: number;
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
	};
	snow: {
		/**
		 * Snow volume for the last 1 hour, mm
		 */
		'1h': number;
		/**
		 * Snow volume for the last 3 hours, mm
		 */
		'3h': number;
	};
	/**
	 * Internal parameters
	 */
	sys: object;
	/**
	 * Date time params in string
	 */
	dt_txt: string;
}

export interface Address {
	id: number;
	/**
	 * e.g. London, Prague
	 */
	name: string;
	coord: {
		lat: number;
		lon: number;
	};
	country: string;
	population: number;
	/**
	 * Data like temperature or pressure
	 */
	main: Response;
	/**
	 * UTC
	 */
	timezone: number;
	/**
	 * Sunrise / sunset UTCs
	 */
	sun: {
		/**
		 * UTC milis time
		 */
		sunrise: number;
		/**
		* UTC milis time
		*/
		sunset: number;
	}
}

export interface AdvancedApiPart {
	dt: number;
	/**
	 * UTC time
	 */
	sunrise: number;
	/**
	 * UTC time
	 */
	sunset: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number;
	weather: Weather[],
	rain: {
		"1h": number;
		"3h": number;
	},
	snow: {
		"1h": number;
		"3h": number;
	}
}


export type WeatherResponseType = 'hourly' | 'daily' | 'group' | '5day' | '16day' | '30day' | 'onecall';

export interface LongForecastListItem {
	/**
	 * Time of data forecasted
	 */
	dt: number;
	sunrise: number;
	sunset: number;
	temp: {
		day: number;
		min: number;
		max: number;
		night: number;
		eve: number;
		morn: number;
	};
	/**
	 * Human feeling of temperature
	 */
	feels_like?: {
		day: number;
		night: number;
		eve: number;
		morn: number;
	};
	/**
	 * Atmospheric pressure on the sea level, hPa
	 */
	pressure: number;
	/**
	 * Humidity, %
	 */
	humidity: number;
	weather: TypeOfWeather[];
	/**
	 * Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
	 */
	speed: number;
	/**
	 * Wind direction, degrees (meteorological)
	 */
	deg: number;
	/**
	 * Cloudiness, %
	 */
	clouds: number;
	/**
	 * Precipitation volume, mm
	 */
	rain: number;
	/**
	 * Snow volume, mm
	 */
	snow: number;
}

export interface ApiQuery {
	appid: string;
	from: Date;
	to: Date;
	by: 'day' | 'hour';
	isPro?: boolean;
	units?: 'metric' | 'imperial';
	lang?: Language;
}

export interface CityNameQuery {
	cityName: string;
	stateCode?: string;
	countryCode?: string;
	kind: 'city';
}

export interface CityIdQuery {
	cityId: string;
	kind: 'id';
}

export interface CitiesIdQuery {
	citiesId: string[];
	kind: 'ids';
}

export interface GeoApiQuery {
	lat: number;
	lon: number;
	kind: 'geo';
}

export interface ZipCodeQuery {
	zipCode: string;
	countryCode?: string;
	kind: 'zip';
}

export type Query = ApiQuery & (CityNameQuery | CityIdQuery | CitiesIdQuery | GeoApiQuery | ZipCodeQuery);
