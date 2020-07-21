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
    console.log(url);
    return Promise.resolve({
        status: 400,
        json: () => Promise.resolve({ message: "Bad request" }),
    }) as any
}) as any;

describe("Can send an api request to fake api and analyze results", () => {
    test("weather?q=London,uk", async () => {
        // In order to mock requests properly, we need a time machine
        setWhatIsToday(new Date((1485789600 - 7200) * 1000));
        const load = forecast(apiKey).in('London', 'uk').fetch(global.fetch);
        expect(await load.clouds()).toBe(90);
        expect(await load.wind('speed')).toBe(4.1);
        expect((await load.drizzle())?.description).toBe('light intensity drizzle');
    });
    test("weather?q=London", async () => {
        setWhatIsToday(new Date((1485789600 - 7200) * 1000));
        const load = forecast(apiKey).in('London').fetch(global.fetch);
        expect(await load.pressure()).toBe(1012);
        expect(await load.humidity()).toBe(81);
        expect((await load.drizzle())?.description).toBe('light intensity drizzle');
    });
    test("weather?id=2172797", async () => {
        setWhatIsToday(new Date((1485789600 - 7200) * 1000));
        const load = forecast(apiKey).in(2172797).fetch(global.fetch);
        expect(await load.temp('max')).toBe(300.15);
        expect(await load.temp()).toBe(300.15);
        expect((await load.cloudy())?.description).toBe('scattered clouds');
    });
    test("weather?zip=94040,us", async () => {
        setWhatIsToday(new Date((1519061700 - 7200) * 1000));
        const load = forecast(apiKey).zip('94040', 'us').fetch(global.fetch);
        expect(await load.visibility()).toBe(12874);
        expect(await load.wind('gust')).toBe(11.3);
        expect((await load.clouds())).toBe(1);
    });
    test("group?id=524901,703448,2643743", async () => {
        setWhatIsToday(new Date((1485793175 - 7200) * 1000));
        const load = forecast(apiKey).in(524901, 703448, 2643743).fetch(global.fetch);
        expect((await load.sun('rise'))?.getTime()).toBe(1485746740000);
        expect((await load.sun('set'))?.getTime()).toBe(1485746740000);
        expect((await load.sunny())?.description).toBe('clear sky');
    });
    test("pro.openweathermap.org/data/2.5/forecast/hourly?id=524901", async () => {
        setWhatIsToday(new Date((1553709600 - 7200) * 1000));
        const load = forecast(apiKey, true).in(524901).fetch(global.fetch);
        expect(await load.humidity()).toBe(100);
        expect(await load.pressure('ground')).toBe(997.153);
        expect((await load.cloudy())?.description).toBe('broken clouds');
    });
    test("pro.openweathermap.org/data/2.5/forecast/hourly?lat=35&lon=139", async () => {
        setWhatIsToday(new Date(1553709600 * 1000));
        const load = forecast(apiKey, true).around(35, 139).fetch(global.fetch);
        expect(await load.clouds()).toBe(40);
        expect(await load.wind()).toBe(10.96);
        expect((await load.cloudy())?.id).toBe(802);
    });
    test("pro.openweathermap.org/data/2.5/forecast/hourly?zip=94040", async () => {
        setWhatIsToday(new Date(1553709600 * 1000));
        const load = forecast(apiKey, true).zip('94040').fetch(global.fetch);
        expect(await load.clouds()).toBe(94);
        expect(await load.humidity()).toBe(100);
        expect((await load.rainy())?.description).toBe('light rain');
    });
    test("onecall/timemachine?exclude=minutely&lat=35&lon=139&dt=1595100167", async () => {
        setWhatIsToday(null);
        const load = forecast(apiKey).around(35, 139).at(new Date((1595100167 - 7200) * 1000)).fetch(global.fetch);
        await load.result(); // Pre-load results, hack needed because of local time/utc, you dont need this in real use
        load.hour(12);
        expect((await load.sun())?.getTime()).toBe(1595041993 * 1000);
        expect((await load.sun('set'))?.getTime()).toBe(1595099011 * 1000);
        expect((await load.temp('feel'))).toBe(293.1);
    });
    test("onecall?exclude=minutely&lat=35&lon=139", async () => {
        setWhatIsToday(new Date((1595100167 + 43200) * 1000)); // Move it by 12 hours
        const load = forecast(apiKey).around(35, 139).fetch(global.fetch);
        expect(await load.wind('speed')).toBe(2.16);
        expect(await load.wind('degree')).toBe(344);
        expect((await load.cloudy())?.description).toBe('scattered clouds');
    });
    test("forecast/daily?cnt=16&id=524901", async () => {
        const fakeDate = setWhatIsToday(new Date(1485766800 * 1000))!;
        const tenDaysAhead = new Date(fakeDate);
        tenDaysAhead.setDate(tenDaysAhead.getDate() + 10);
        const load = forecast(apiKey, true).in(524901).at(new Date(fakeDate), tenDaysAhead).fetch(global.fetch);
        expect(await load.wind('speed')).toBe(4.1);
        expect(await load.wind('degree')).toBe(249);
        expect((await load.sunny())?.description).toBe('sky is clear');
    });
    test("forecast/daily?cnt=16&lat=35&lon=139", async () => {
        const fakeDate = setWhatIsToday(new Date(1485741600 * 1000))!;
        const tenDaysAhead = new Date(fakeDate);
        tenDaysAhead.setDate(tenDaysAhead.getDate() + 10);
        const load = forecast(apiKey, true).around(35, 193).at(new Date(fakeDate), tenDaysAhead).fetch(global.fetch);
        expect(await load.temp('max')).toBe(284.66);
        expect(await load.pressure()).toBe(1023.68);
        expect(await load.humidity()).toBe(100);
    });
    test("forecast/daily?cnt=16&zip=94040", async () => {
        const fakeDate = setWhatIsToday(new Date(1519070400 * 1000))!;
        const tenDaysAhead = new Date(fakeDate);
        tenDaysAhead.setDate(tenDaysAhead.getDate() + 10);
        const load = forecast(apiKey, true).zip('94040').at(new Date(fakeDate), tenDaysAhead).fetch(global.fetch);
        expect(await load.wind('speed')).toBe(1.25);
        expect(await load.rain()).toBe(1.3);
        expect((await load.rainy())?.description).toBe('light rain');
    });
    test("pro.openweathermap.org/data/2.5/forecast/climate/daily?id=524901", async () => {
        const fakeDate = setWhatIsToday(new Date(1485766800 * 1000))!;
        const twentyDaysAhead = new Date(fakeDate);
        twentyDaysAhead.setDate(twentyDaysAhead.getDate() + 20);
        const load = forecast(apiKey, true).in(524901).at(new Date(fakeDate), twentyDaysAhead).fetch(global.fetch);
        expect(await load.wind('speed')).toBe(4.1);
        expect(await load.wind('degree')).toBe(249);
        expect(await load.snow()).toBe(1.44);
    });
    test("pro.openweathermap.org/data/2.5/forecast/climate?lat=35&lon=139", async () => {
        const fakeDate = setWhatIsToday(new Date(1485741600 * 1000))!;
        const twentyDaysAhead = new Date(fakeDate);
        twentyDaysAhead.setDate(twentyDaysAhead.getDate() + 20);
        const load = forecast(apiKey, true).around(35, 139).at(new Date(fakeDate), twentyDaysAhead).fetch(global.fetch);
        expect(await load.temp('min')).toBe(282.27);
        expect(await load.temp('max')).toBe(284.66);
        expect(await load.pressure()).toBe(1023.68);
    });
    test("pro.openweathermap.org/data/2.5/forecast/climate?zip=94040", async () => {
        const fakeDate = setWhatIsToday(new Date(1519070400 * 1000))!;
        const twentyDaysAhead = new Date(fakeDate);
        twentyDaysAhead.setDate(twentyDaysAhead.getDate() + 20);
        const load = forecast(apiKey, true).zip('94040').at(new Date(fakeDate), twentyDaysAhead).fetch(global.fetch);
        expect(await load.rain()).toBe(1.3);
        expect(await load.clouds()).toBe(0);
        expect((await load.rainy())?.description).toBe('light rain');
    });
    test("forecast?q=London,us", async () => {
        const fakeDate = setWhatIsToday(new Date(1487246400 * 1000))!;
        const fourDaysAhead = new Date(fakeDate);
        fourDaysAhead.setDate(fourDaysAhead.getDate() + 4);
        const load = forecast(apiKey).in('London', 'us').at(new Date(fakeDate), fourDaysAhead).fetch(global.fetch);
        expect(await load.temp('min')).toBe(281.821);
        expect(await load.temp('max')).toBe(285.66);
        expect(await load.pressure()).toBe(970.91);
    });
    test("forecast?id=524901", async () => {
        const fakeDate = setWhatIsToday(new Date(1485799200 * 1000))!;
        const fourDaysAhead = new Date(fakeDate);
        fourDaysAhead.setDate(fourDaysAhead.getDate() + 4);
        const load = forecast(apiKey).in(524901).at(new Date(fakeDate), fourDaysAhead).fetch(global.fetch);
        expect(await load.clouds()).toBe(32);
        expect(await load.humidity()).toBe(76);
        expect((await load.snowy())?.description).toBe('light snow');
    });
    test("forecast?lat=35&lon=139", async () => {
        const fakeDate = setWhatIsToday(new Date(1485799200 * 1000))!;
        const fourDaysAhead = new Date(fakeDate);
        fourDaysAhead.setDate(fourDaysAhead.getDate() + 4);
        const load = forecast(apiKey).around(35, 139).at(new Date(fakeDate), fourDaysAhead).fetch(global.fetch);
        expect(await load.wind('speed')).toBe(6.21);
        expect(await load.wind('degree')).toBe(31.5035);
        expect(await load.rain()).toBe(0);
    });
});