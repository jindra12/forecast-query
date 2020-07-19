import forecast from '../src/index';
import { apiKey } from './apiKey';
import nodeFetch from 'node-fetch';

const makeFetch = (url: RequestInfo): Promise<Response> => {
    if (typeof url === 'string') {
        return nodeFetch(url) as any;
    }
    throw Error('Only needs to use string!');
}

const makeCrashFetch = (_: RequestInfo): Promise<Response> => {
    throw Error('Will not reach for api when it can use cache!');
}

describe("Can send an api request to real free api", () => {
    test("Can simply call an api and get todays weather conditions", async () => {
        expect((await forecast(apiKey).fetch(makeFetch).at(new Date()).is())?.icon).toBeTruthy();
    });
    test("Can call an api and get information on past date events", async () => {
        // http://api.openweathermap.org/data/2.5/onecall/timemachine?exclude=minutely&lat=50.073658&lon=14.418540&appid=&dt=1595100167
        // Date: Sat Jul 18 2020 19:22:47
        const past = forecast(apiKey).fetch(makeFetch);
        past.around(50.07365, 14.41854); // Best results are available when using coords
        past.at(new Date(2020, 6, 18, 19, 22, 47));
        expect((await past.cloudy())?.description).toBe('scattered clouds');
        // Mon Jul 20 3020 14:00:00 - will use easing to fetch a similar date (future dates cannot be accessed without paid account)
        expect((await past.at(new Date(3020, 6, 20, 14, 0, 0)).rainy())?.description).toBe('light rain');
        // Will use cached request data to get appropriate result
        expect((await past.fetch(makeCrashFetch).at(new Date(2020, 6, 19, 0, 0, 0)).rainy())?.description).toBe('shower rain');
    });
    test("Can call api to find out how much it rains outside", async () => {
        expect(await forecast(apiKey).fetch(makeFetch).in('Prague').at(new Date()).rain()).not.toBeNull();
    });
});