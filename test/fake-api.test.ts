import forecast from '../src/index';
import { apiResults } from './apiResults';
import { setWhatIsToday } from '../src/weather/util';

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
}) as any;


describe("Can send an api request to fake api and analyze results", () => {
    test("weather?q=London,uk", async () => {
        // In order to mock requests properly, we need a time machine
        setWhatIsToday(new Date(1485789600 * 1000));
        const load = forecast(apiKey).in('London', 'uk').fetch(global.fetch);
        expect(await load.clouds()).toBe(90);
        expect(await load.wind('speed')).toBe(4.1);
        expect((await load.drizzle())?.description).toBe('light intensity drizzle');
    });
    test("weather?q=London", async () => {
        // In order to mock requests properly, we need a time machine
        setWhatIsToday(new Date(1485789600 * 1000));
        const load = forecast(apiKey).in('London').fetch(global.fetch);
        expect(await load.pressure()).toBe(1012);
        expect(await load.humidity()).toBe(81);
        expect((await load.drizzle())?.description).toBe('light intensity drizzle');
    });
    test("weather?id=2172797", async () => {
        setWhatIsToday(new Date(1485789600 * 1000));
        const load = forecast(apiKey).in(2172797).fetch(global.fetch);
        expect(await load.temp('max')).toBe(300.15);
        expect(await load.temp()).toBe(300.15);
        expect((await load.cloudy())?.description).toBe('scattered clouds');
    });
    test("weather?zip=94040,us", async () => {
        setWhatIsToday(new Date(1519061700 * 1000));
        const load = forecast(apiKey).zip('94040', 'us').fetch(global.fetch);
        expect(await load.visibility()).toBe(12874);
        expect(await load.wind('gust')).toBe(11.3);
        expect((await load.clouds())).toBe(1);
    });
    test("group?id=524901,703448,2643743", async () => {
        setWhatIsToday(new Date(1485793175 * 1000));
        const load = forecast(apiKey).in(524901, 703448, 2643743).fetch(global.fetch);
        expect((await load.sun('rise'))?.getTime()).toBe(1485753940 * 1000);
        expect((await load.sun('set'))?.getTime()).toBe(1485784855 * 1000);
        expect((await load.sunny())?.description).toBe('clear sky');
    });
    test("pro.openweathermap.org/data/2.5/forecast/hourly?id=524901", async () => {
        const load = forecast(apiKey, true).in(524901).fetch(global.fetch);
        expect(await load.humidity()).toBe(100);
        expect(await load.pressure('ground')).toBe(997.153);
        expect((await load.cloudy())?.description).toBe('broken clouds');
    });
    /*test("pro.openweathermap.org/data/2.5/forecast/hourly?lat=35&lon=139", async () => {
        const load = forecast(apiKey, true).around(35, 139).fetch(global.fetch);
        expect(await load.clouds()).toBe(0);
        expect(await load.wind()).toBe(10.4);
        expect((await load.cloudy())?.id).toBe(800);
    });
    test("pro.openweathermap.org/data/2.5/forecast/hourly?zip=94040", async () => {
       const load = forecast(apiKey, true).zip('94040').fetch(global.fetch);
       expect(await load.clouds()).toBe(86);
       expect(await load.humidity()).toBe(100);
       expect((await load.rainy())?.description).toBe('light rain');
    });
    test("onecall/timemachine?exclude=minutely&lat=50.073658&lon=14.418540&dt=1595100167", async () => {
        const load = forecast(apiKey).around(50.073658, 14.418540).at(new Date(1595100167 * 1000).getTime()).fetch(global.fetch);
        expect((await load.sun())?.getTime()).toBe(1595041993 * 1000);
        expect((await load.sun('set'))?.getTime()).toBe(1595099011 * 1000);
        expect((await load.temp('feel'))).toBe(291.96);
    });
    test("onecall?exclude=minutely&lat=50.073658&lon=14.418540", async () => {
        const load = forecast(apiKey).around(50.073658, 14.418540).fetch(global.fetch);
        expect(await load.wind('speed')).toBe(1.5);
        expect(await load.wind('degree')).toBe(0);
        expect((await load.cloudy())?.description).toBe('scattered clouds');
    });
    test("forecast/daily?cnt=16&id=524901", async () => {
        const tenDaysAhead = new Date();
        tenDaysAhead.setDate(tenDaysAhead.getDate() + 10);
        const load = forecast(apiKey, true).in(524901).at(new Date(), tenDaysAhead).fetch(global.fetch);
        expect(await load.wind('speed')).toBe(4.57);
        expect(await load.wind('degree')).toBe(225);
        expect((await load.sunny())?.description).toBe('sky is clear');
    });
    test("forecast/daily?cnt=16&lat=35&lon=139", async () => {
        const tenDaysAhead = new Date();
        tenDaysAhead.setDate(tenDaysAhead.getDate() + 10);
        const load = forecast(apiKey, true).around(35, 193).at(new Date(), tenDaysAhead).fetch(global.fetch);
        expect(await load.temp('max')).toBe(285.51);
        expect(await load.pressure()).toBe(1031.75);
        expect(await load.humidity()).toBe(100);
    });
    test("forecast/daily?cnt=16&zip=94040", async () => {
        const tenDaysAhead = new Date();
        tenDaysAhead.setDate(tenDaysAhead.getDate() + 10);
        const load = forecast(apiKey, true).zip('94040').at(new Date(), tenDaysAhead).fetch(global.fetch);
        expect(await load.wind('speed')).toBe(3.36);
        expect(await load.rain()).toBe(0.31);
        expect((await load.rainy())?.description).toBe('light rain');
    });
    test("pro.openweathermap.org/data/2.5/climate/daily?id=524901", async () => {
        const twentyDaysAhead = new Date();
        twentyDaysAhead.setDate(twentyDaysAhead.getDate() + 20);
        const load = forecast(apiKey, true).in(524901).at(new Date(), twentyDaysAhead).fetch(global.fetch);
        expect(await load.wind('speed')).toBe(4.57);
        expect(await load.wind('degree')).toBe(225);
        expect(await load.snow()).toBe(0.01);
    });
    test("pro.openweathermap.org/data/2.5/climate/daily?lat=35&lon=139", async () => {
        const twentyDaysAhead = new Date();
        twentyDaysAhead.setDate(twentyDaysAhead.getDate() + 20);
        const load = forecast(apiKey, true).around(35, 139).at(new Date(), twentyDaysAhead).fetch(global.fetch);
        expect(await load.temp('min')).toBe(285.51);
        expect(await load.temp('max')).toBe(285.51);
        expect(await load.pressure()).toBe(1013.75);
    });
    test("pro.openweathermap.org/data/2.5/climate/daily?zip=94040", async () => {
        const twentyDaysAhead = new Date();
        twentyDaysAhead.setDate(twentyDaysAhead.getDate() + 20);
        const load = forecast(apiKey, true).zip('94040').at(new Date(), twentyDaysAhead).fetch(global.fetch);
        expect(await load.rain()).toBe(0.31);
        expect(await load.clouds()).toBe(20);
        expect((await load.rainy())?.description).toBe('light rain');
    });
    test("forecast?q=London,us", async () => {
        const fourDaysAhead = new Date();
        fourDaysAhead.setDate(fourDaysAhead.getDate() + 4);
        const load = forecast(apiKey).in('London', 'us').at(new Date(), fourDaysAhead).fetch(global.fetch);
        expect(await load.temp('min')).toBe(281.556);
        expect(await load.temp('max')).toBe(286.67);
        expect(await load.pressure()).toBe(972.73);
    });
    test("forecast?id=524901", async () => {
        const fourDaysAhead = new Date();
        fourDaysAhead.setDate(fourDaysAhead.getDate() + 4);
        const load = forecast(apiKey).in(524901).at(new Date(), fourDaysAhead).fetch(global.fetch);
        expect(await load.clouds()).toBe(68);
        expect(await load.humidity()).toBe(84);
        expect((await load.snowy())?.description).toBe('light snow');
    });
    test("forecast?lat=35&lon=139", async () => {
        const fourDaysAhead = new Date();
        fourDaysAhead.setDate(fourDaysAhead.getDate() + 4);
        const load = forecast(apiKey).around(35, 139).at(new Date(), fourDaysAhead).fetch(global.fetch);
        expect(await load.wind('speed')).toBe(7.27);
        expect(await load.wind('degree')).toBe(15.0048);
        expect(await load.rain()).toBe(0);
    });*/
});