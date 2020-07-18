import forecast from '../src/index';
import { apiKey } from './apiKey';

describe("Can send an api request to real free api", () => {
    test("Can simply call an api and get todays weather conditions", async () => {
        expect((await forecast(apiKey).fetch(global.fetch).at(new Date()).is())?.main).toBeTruthy();
    });
});