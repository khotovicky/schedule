import "./App.css";
import {ConfigProvider} from "antd";
import ruRU from "antd/locale/ru_RU";

import TheCalendar from "./components/Calendar";
import {DayHeader} from "./components/DayHeader";
import {DayDescription} from "./components/DayDescription";
import {DayEvents} from "./components/DayEvents";
import {Day} from "./api/types.ts";
import {useEffect, useMemo, useState} from "react";
import {CalendarDay} from "./types.ts";
import dayjs from "dayjs";
import {getDaysForMonth} from "./api/getDaysForMonth.ts";

const exampleDay: Day = {
  date: "15 февраля 2024",
  title: "Анин др",
  description: "Выпить, закусить",
  events: [
    { key: "1", title: "выпить", description: "хорошо выпить", time: "16:00" },
    {
      key: "2",
      title: "закусить",
      description: "неплохо закусить",
      time: "16:01",
    },
  ],
};

function serializeDate(date: dayjs.Dayjs) {
    return date.format('YYYY-MM-DD');
}
const daysArrayToMap = (days: CalendarDay[]) => days.reduce(
    (map, day) => map.set(serializeDate(day.date), day),
    new Map<string, CalendarDay>
)

function App() {

    const [ days, setDays ] = useState<CalendarDay[]>([])
    const [ selectedDate, setSelectedDate ] = useState(dayjs())

    const daysMap = useMemo(
        () => daysArrayToMap(days),
        [ days ]
    )

    useEffect(() => {
        getDaysForMonth(selectedDate).then(setDays)
    }, [ selectedDate.month(), selectedDate.year() ]);

    const getDay = (date: dayjs.Dayjs) => daysMap.get(serializeDate(date))
    const selectHandler = (date: dayjs.Dayjs) => {
        setSelectedDate(date)
    }

    console.log("beforeEffect")

    useEffect(() => {
        console.log("effect")

        return () => console.log("cleanup")
    });

    console.log("afterEffect")

    return <ConfigProvider locale={ruRU}>
      <TheCalendar getDay={getDay} onSelect={selectHandler} value={selectedDate} />
      <DayHeader day={exampleDay} />
      <DayDescription day={exampleDay} />
      <DayEvents day={exampleDay} />
    </ConfigProvider>
}

export default App;
