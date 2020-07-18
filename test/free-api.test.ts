import forecast from '../src/index';
import { apiKey } from './apiKey';
import nodeFetch from 'node-fetch';

const makeFetch = (url: RequestInfo) => {
    if (typeof url === 'string') {
        return nodeFetch(url);
    }
    throw Error('Only needs to use string!');
}

describe("Can send an api request to real free api", () => {
    test("Can simply call an api and get todays weather conditions", async () => {
        expect((await forecast(apiKey).fetch(makeFetch as any).at(new Date()).is())?.icon).toBeTruthy();
    });
});