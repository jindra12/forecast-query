export type Language = 'af'
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
	main: 'Thunderstorm',
	icon: '11d',
}

export type Thunderstorm = ThunderstormType & ({ id: 200, description: 'thunderstorm with light rain' }
	| { id: 201, description: 'thunderstorm with rain' }
	| { id: 202, description: 'thunderstorm with heavy rain' }
	| { id: 210, description: 'light thunderstorm' }
	| { id: 211, description: 'thunderstorm' }
	| { id: 212, description: 'heavy thunderstorm' }
	| { id: 221, description: 'ragged thunderstorm' }
	| { id: 230, description: 'thunderstorm with light drizzle' }
	| { id: 231, description: 'thunderstorm with drizzle' }
	| { id: 232, description: 'thunderstorm with heavy drizzle' });

interface DrizzleType {
	main: 'Drizzle',
	icon: '09d',
}

export type Drizzle = DrizzleType & ({ id: 300, description: 'light intensity drizzle' }
	| { id: 301, description: 'drizzle' }
	| { id: 302, description: 'heavy intensity drizzle' }
	| { id: 310, description: 'light intensity drizzle rain' }
	| { id: 311, description: 'drizzle rain' }
	| { id: 312, description: 'heavy intensity drizzle rain' }
	| { id: 313, description: 'shower rain and drizzle' }
	| { id: 314, description: 'heavy shower rain and drizzle' }
	| { id: 321, description: 'shower drizzle' });

export type Clear = { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' | '01n' };

export type Clouds = { id: 801, main: 'Clouds', description: 'few clouds: 11-25%', icon: '02d' | '02n' }
	| { id: 802, main: 'Clouds', description: 'scattered clouds: 25-50%', icon: '03d' | '03n' }
	| { id: 803, main: 'Clouds', description: 'broken clouds: 51-84%', icon: '04d' | '04n' }
	| { id: 804, main: 'Clouds', description: 'overcast clouds: 85-100%', icon: '04d' | '04n' };

export type Rain = { id: 500, main: 'Rain', description: 'light rain', icon: '10d' }
	| { id: 500, main: 'Rain', description: 'light rain', icon: '10d' }
	| { id: 501, main: 'Rain', description: 'moderate rain', icon: '10d' }
	| { id: 502, main: 'Rain', description: 'heavy intensity rain', icon: '10d' }
	| { id: 503, main: 'Rain', description: 'very heavy rain', icon: '10d' }
	| { id: 504, main: 'Rain', description: 'extreme rain', icon: '10d' }
	| { id: 511, main: 'Rain', description: 'freezing rain', icon: '13d' }
	| { id: 520, main: 'Rain', description: 'light intensity shower rain', icon: '09d' }
	| { id: 521, main: 'Rain', description: 'shower rain', icon: '09d' }
	| { id: 522, main: 'Rain', description: 'heavy intensity shower rain', icon: '09d' }
	| { id: 531, main: 'Rain', description: 'ragged shower rain', icon: '09d' };


interface AtmosphereType {
	icon: '50d',
}

export interface Misty { id: 701, main: 'Mist', description: 'mist' }
export interface Smokey { id: 711, main: 'Smoke', description: 'Smoke' }
export interface Hazey { id: 721, main: 'Haze', description: 'Haze' }
export interface DustyWhirls { id: 731, main: 'Dust', description: 'sand/ dust whirls' }
export interface Foggy { id: 741, main: 'Fog', description: 'fog' }
export interface Sandy { id: 751, main: 'Sand', description: 'sand' }
export interface Dusty { id: 761, main: 'Dust', description: 'dust' }
export interface Ashy { id: 762, main: 'Ash', description: 'volcanic ash' }
export interface Squally { id: 771, main: 'Squall', description: 'squalls' }
export interface Tornado { id: 781, main: 'Tornado', description: 'tornado' }

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


export type TypeOfWeather = Thunderstorm | Drizzle | Clear | Clouds | Rain | Atmosphere | Day;

export type WeatherId = TypeOfWeather['id'];
export type WeatherDescription = TypeOfWeather['description'];
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


export type WeatherResponseType = 'hourly' | 'daily' | '5day' |  '16day' | '30day' | 'onecall';

export interface ApiQuery {
	appid: string;
	from: Date;
	to: Date;
	by: 'day' | 'hour';
	easedLevel: number;
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
