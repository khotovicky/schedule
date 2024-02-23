import "./App.css";
import { ConfigProvider } from "antd";
import ruRU from "antd/locale/ru_RU";

import TheCalendar from "./components/Calendar";
import { DayHeader } from "./components/DayHeader";
import { Day } from "./types";
import { DayDescription } from "./components/DayDescription";
import { DayEvents } from "./components/DayEvents";

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

function App() {
  return (
    <ConfigProvider locale={ruRU}>
      <TheCalendar />
      <DayHeader day={exampleDay} />
      <DayDescription day={exampleDay} />
      <DayEvents day={exampleDay} />
    </ConfigProvider>
  );
}

export default App;
