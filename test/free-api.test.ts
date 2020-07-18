import forecast from '../src/index';
import { apiKey } from './apiKey';
import nodeFetch from 'node-fetch';

const makeFetch = (url: RequestInfo): Promise<Response> => {
    if (typeof url === 'string') {
        return nodeFetch(url) as any;
    }
    throw Error('Only needs to use string!');
}

describe("Can send an api request to real free api", () => {
    test("Can simply call an api and get todays weather conditions", async () => {
        expect((await forecast(apiKey).fetch(makeFetch).at(new Date()).is())?.icon).toBeTruthy();
    });
    test("Can call an api and get information on past date events", async () => {
        // http://api.openweathermap.org/data/2.5/onecall/timemachine?exclude=minutely&lat=50.073658&lon=14.418540&appid=&dt=1595100167
        // Date: Sat Jul 18 2020 19:22:47
        const past = forecast(apiKey).fetch(makeFetch);
        past.around(50.07365, 14.41854);
        past.at(new Date(2020, 6, 18, 19, 22, 47));
        expect((await past.cloudy())?.description).toBe('scattered clouds');
        // Mon Jul 20 2020 14:00:00
        expect((await past.at(new Date(2020, 6, 20, 14, 0, 0)).rainy())?.description).toBe('light rain');
    });
});