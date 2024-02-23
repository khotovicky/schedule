import dayjs, { Dayjs } from "dayjs";
import {Day, Event} from "./types.ts";
import {CalendarDay, CalendarEvent} from "../types.ts";

const february2024Days: Day[] = [
    {
        date: "2024-02-23",
        title: "девятый день",
        events: [
            { key: "1", title: "Девятины", time: "0000-00-00T09:00", description: "lol" },
            { key: "2", title: "Концерт", time: "0000-00-00T16:00", description: "kek" },
        ],
    },
    {
        date: "2024-02-15",
        title: "Анин др",
        description: "Выпить, закусить",
        events: [
            {
                key: "2",
                title: "закусить",
                description: "неплохо закусить",
                time: "0000-00-00T16:01",
            },
            { key: "1", title: "выпить", description: "хорошо выпить", time: "0000-00-00T16:00" },
        ],
    }
];

const convertToCalendarEvent = (event: Event): CalendarEvent => ({
    ...event,
    time: dayjs(event.time)
})
const convertToCalendarDay = (day: Day): CalendarDay => ({
    ...day,
    events: day.events?.map(convertToCalendarEvent),
    date: dayjs(day.date)
})

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const getDaysForMonth = async (month: Dayjs) => {
    await sleep(1000)
    if (month.isSame(dayjs("2024-02-23"), "month")) {
        return february2024Days.map(convertToCalendarDay)
    }
    return []
}
