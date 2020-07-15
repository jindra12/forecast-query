import { Query, CityNameQuery, CityIdQuery, GeoApiQuery, ZipCodeQuery, BoxQuery, CityCircleQuery, CitiesIdQuery } from "./request-types";

const arrayToUrl = (...array: Array<string | undefined>) => array.filter(s => s).join(',');

export const request = (query: Query) => {
    let toApi = 'api.openweathermap.org/data/2.5/';
    switch (query.kind) {
        case 'box':
            toApi += byRectangle(query);
            break;
        case 'circle':
            toApi += byCircle(query);
            break;
        case 'city':
            toApi += byCityName(query);
            break;
        case 'geo':
            toApi += byGeo(query);
            break;
        case 'id':
            toApi += byCityId(query);
            break;
        case 'ids':
            toApi += byCitiesId(query);
            break;
        case 'zip':
            toApi += byZip(query);
            break;
    }
    return `${toApi}&units=${query.units || ''}&appid=${query.appid}&lang=${query.lang || 'en'}`;
};

const byCityName = (query: CityNameQuery) => `weather?q=${arrayToUrl(query.cityName, query.stateCode, query.countryCode)}`;
const byCityId = (query: CityIdQuery) => `weather?id=${query.cityId}`;
const byCitiesId = (query: CitiesIdQuery) => `group?id=${query.citiesId.join(',')}`;
const byGeo = (query: GeoApiQuery) => `weather?lat=${query.lat}&lon=${query.lon}`;
const byZip = (query: ZipCodeQuery) => `weather?zip=${query.zipCode}${query.countryCode ? `,${query.countryCode}` : ''}`;
const byRectangle = (query: BoxQuery) => `box/city?bbox=${query.bbox.join(',')}`;
const byCircle = (query: CityCircleQuery) => `find?lat=${query.lat}&lon=${query.lon}&cnt=${query.cnt}`;
