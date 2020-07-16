import { Query } from "./request-types";

export const arrayToUrl = (...array: Array<string | undefined>) => array.filter(s => s).join(',');

export const today = () => getDateWoTime(new Date());

export const daysAheadFromNow = (days: number) => {
    const now = getDateWoTime(new Date());
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

export const getDateWoTime = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());

export const compareDates = (...date: Date[]) => {
    const first = date[0];
    return date.reduce((p: boolean, c) => !p ? false : first.getTime() === c.getTime(), true);
}

export const isDaily = (query: Query): boolean => compareDates(
    getDateWoTime(today()),
    getDateWoTime(query.from),
    getDateWoTime(query.to)
);