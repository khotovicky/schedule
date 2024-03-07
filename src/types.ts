import type {Dayjs} from "dayjs";

export interface CalendarDay {
  title?: string
  description?: string
  events?: CalendarEvent[]
  date: Dayjs
}

export interface CalendarEvent {
  key: string
  title?: string
  description: string;
  time: Dayjs;
}
