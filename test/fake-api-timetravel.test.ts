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


describe("Can send an api request and then read day-by-day results from the response", () => {
    test("Can time-travel in 16 day pro api", async () => {
        const fakeDate = setWhatIsToday(new Date((1485741600 - 7200) * 1000))!;
        const tenDaysAhead = new Date(fakeDate);
        tenDaysAhead.setDate(tenDaysAhead.getDate() + 10);
        const load = forecast(apiKey, true).around(35, 193).at(new Date(fakeDate), tenDaysAhead).fetch(global.fetch);
        expect(await load.temp('max')).toBe(285.51);
        load.tomorrow();
        expect(await load.temp('max')).toBe(284.66);
        load.dayAfterTomorrow();
        expect(await load.temp('max')).toBe(285.7);
    });
    test("Can time-travel in 3 hours/5 day api", async () => {
        const fakeDate = setWhatIsToday(new Date(1487246400 * 1000))!;
        const fourDaysAhead = new Date(fakeDate);
        fourDaysAhead.setDate(fourDaysAhead.getDate() + 4);
        const load = forecast(apiKey).in('London', 'us').at(new Date(fakeDate), fourDaysAhead).fetch(global.fetch);
        expect(await load.pressure()).toBe(970.91);
        load.hour(17);
        expect(await load.pressure()).toBe(970.44);
        load.hour(21);
        expect(await load.pressure()).toBe(968.14);
    });
});
