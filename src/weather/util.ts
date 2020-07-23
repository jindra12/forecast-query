import { Query } from "./derived-request-types";

export const arrayToUrl = (...array: Array<string | undefined>) => array.filter(s => s).join(',');

/**
 * Used for mocks, not real export
 */
export const setWhatIsToday = (date: Date | null) => whatIsToday = date;

/**
 * Used for mocks, not real export
 */
let whatIsToday: Date | null = null;
export const today = () => whatIsToday ? new Date(whatIsToday) : new Date();

export const daysAheadFromNow = (days: number) => {
    const now = today();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    now.setDate(now.getDate() + days);
    return now;
}

export const fourDaysFromNow = () => daysAheadFromNow(4);
export const fiveDaysFromNow = () => daysAheadFromNow(5);
export const sixteenDaysAhead = () => daysAheadFromNow(16);
export const thirtyDaysAhead = () =>  daysAheadFromNow(30);

export const closestWeek = (type: 'work' | 'all', now: Date = today()): [Date, Date] => {
    if (now.getUTCDay() === 1) {
        const end = new Date(now);
        end.setDate(end.getDate() + type === 'work' ? 5 : 7);
        return [now, end];
    }
    now.setDate(now.getDate() + 1);
    return closestWeek(type, now);
}

export const isBetween = (from: Date, to: Date, query: Query) => from.getTime() <= query.from.getTime()
    && to.getTime() >= query.from.getTime()
    && from.getTime() <= query.to.getTime()
    && to.getTime() >= query.to.getTime();

export const isPast = (query: Query): boolean => {
    const now = today();
    return now.getTime() > query.from.getTime() && now.getTime() > query.to.getTime();
}

export const getLocalFromUtc = (time: number) => time + (new Date().getTimezoneOffset() * 60 * 1000);
export const getUtcFromLocal = (time: number) => time - (new Date().getTimezoneOffset() * 60 * 1000);

export const isLessOrEqualWoTime = (a: Date, b: Date) => a.getFullYear() <= b.getFullYear()
        || a.getMonth() <= b.getMonth()
        || a.getDate() <= b.getDate();

export const isDaily = (query: Query): boolean => {
    const now = today();
    return now.getFullYear() === query.from.getFullYear()
        && now.getMonth() === query.from.getMonth()
        && now.getDate() === query.from.getDate()
        && now.getFullYear() === query.to.getFullYear()
        && now.getMonth() === query.to.getMonth()
        && now.getDate() === query.to.getDate();
};

export const fromSameHour = (query: Query): boolean => today().getHours() === query.from.getHours();