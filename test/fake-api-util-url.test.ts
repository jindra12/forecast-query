import forecast from '../src/index';
import { setWhatIsToday } from '../src/weather/util';

const apiKey = "439d4b804bc8187953eb36d2a8c26a02";

global.fetch = jest.fn((url: string) => {
    return Promise.resolve({
        status: 400,
        json: () => Promise.resolve({ message: url }),
    }) as any
}) as any;

describe("Can create urls with different languages and units", () => {
    test("Can create a different language query", async () => {
        const reporter = async (error: any) => expect((await error.json()).message).toBe('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02&lang=pl');
        // In order to mock requests properly, we need a time machine
        setWhatIsToday(new Date(1485789600 * 1000));
        const load = forecast(apiKey).error(reporter).language('pl').in('London', 'uk').fetch(global.fetch);
        await load.result();
    });
    test("Can create a different units query", async () => {
        const reporter = async (error: any) => expect((await error.json()).message).toBe('https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02');
        // In order to mock requests properly, we need a time machine
        setWhatIsToday(new Date(1485789600 * 1000));
        const load = forecast(apiKey).error(reporter).units('metric').in('London', 'uk').fetch(global.fetch);
        await load.result();
    });
});