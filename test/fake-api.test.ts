import forecast from '../src/index';
import { apiResults } from './apiResults';

const apiKey = "439d4b804bc8187953eb36d2a8c26a02";

global.fetch = jest.fn((url: string) => {
    if (apiResults[url]) {
        return Promise.resolve({
            status: 200,
            json: () => Promise.resolve(apiResults[url]),
        }) as any;
    }
    return Promise.resolve({
        status: 400,
        json: () => Promise.resolve({ message: "Bad request" }),
    }) as any
});


describe("Can send an api request to fake api and analyze results", () => {
    test("weather?q=London,uk", async () => {
        const load = forecast(apiKey).in('London', 'uk');
        expect(await load.clouds()).toBe(90);
        expect(await load.wind('speed')).toBe(4.1);
        expect((await load.drizzle()).description).toBe('light intensity drizzle');
    });
    test("weather?q=London", async () => {
        const load = forecast(apiKey).in('London');
        expect(await load.pressure()).toBe(1012);
        expect(await load.humidity()).toBe(81);
        expect((await load.drizzle()).description).toBe('light intensity drizzle');
    });
    test("weather?id=2172797", async () => {
        const load = forecast(apiKey).in(2172797);
        expect(await load.temp('max')).toBe(300.15);
        expect(await load.temp()).toBe(300.15);
        expect((await load.cloudy()).description).toBe('scattered clouds');
    });
    test("weather?lat=35&lon=139", async () => {
        const load = forecast(apiKey).around(35, 139);
        expect(await load.humidity()).toBe(100);
        expect(await load.pressure()).toBe(1013.75);
        expect((await load.sunny()).description).toBe('clear sky');
    });
    test("weather?zip=94040,us", async () => {
        const load = forecast(apiKey).zip('94040', 'us');
        expect(await load.visibility()).toBe(12874);
        expect(await load.wind('gust')).toBe(11.3);
        expect((await load.clouds())).toBe(1);
    });
    test("group?id=524901,703448,2643743", async () => {
        // "sunrise": 1485753940, "sunset": 1485784855 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky"
        const load = forecast(apiKey).in(524901, 703448, 2643743);
        expect(await load.sunrise()).toBe(12874);
        expect(await load.wind('gust')).toBe(11.3);
        expect((await load.clouds())).toBe(1);
    });
    test("pro.openweathermap.org/data/2.5/forecast/hourly?id=524901", async () => {

    });
    test("pro.openweathermap.org/data/2.5/forecast/hourly?lat=35&lon=139", async () => {

    });
    test("pro.openweathermap.org/data/2.5/forecast/hourly?zip=94040", async () => {

    });
    test("onecall/timemachine?exclude=minutely&lat=50.073658&lon=14.418540&dt=1595100167", async () => {

    });
    test("onecall?exclude=minutely&lat=50.073658&lon=14.418540", async () => {
        // expect(forecast(apiKey).around(50.073658, 14.418540).at(new Date(1595100167 * 1000)).)
    });
    test("forecast/daily?id=524901", async () => {

    });
    test("forecast/daily?id=524901", async () => {

    });
    test("forecast/daily?lat=35&lon=139&cnt=16", async () => {

    });
    test("forecast/daily?zip=94040", async () => {

    });
    test("pro.openweathermap.org/data/2.5/climate/daily?id=524901", async () => {

    });
    test("pro.openweathermap.org/data/2.5/climate/daily?lat=35&lon=139", async () => {

    });
    test("pro.openweathermap.org/data/2.5/climate/daily?zip=94040", async () => {

    });
    test("forecast?q=London,us", async () => {

    });
    test("forecast?id=524901", () => {

    });
    test("forecast?lat=35&lon=139", async () => {

    });
});