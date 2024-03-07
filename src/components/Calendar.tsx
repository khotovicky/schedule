import dayjs, { type Dayjs } from "dayjs";
import { Calendar } from "antd";
import type { CalendarProps } from "antd";
import {CalendarDayCell} from "./CalendarDayCell.tsx";
import {CalendarDay} from "../types.ts";
import {SelectInfo} from "antd/es/calendar/generateCalendar";

interface Props {
  getDay: (current: Dayjs) => CalendarDay | undefined
  onSelect: (date: dayjs.Dayjs, selectInfo: SelectInfo) =>  void
  value: dayjs.Dayjs
}

export default function TheCalendar ({ getDay, onSelect, value }: Props) {

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {

    const day = getDay(current)

    if (info.type !== "date" || !day) return null

    return <CalendarDayCell title={day.title} events={day.events} />
  };

  return <Calendar onSelect={onSelect} cellRender={cellRender} value={value} />;
}
