import type { Dayjs } from "dayjs";
import { Calendar, Tag, Flex } from "antd";
import type { CalendarProps } from "antd";
import type { Day } from "../types";

const exampleDay: Day = {
  date: "9",
  title: "девятый день",
  events: [
    { key: "1", title: "Девятины", time: "9:00", description: "lol" },
    { key: "2", title: "Концерт", time: "16:00", description: "kek" },
  ],
};

const getDayData = (value: Dayjs) => {
  let dayData;
  switch (value.date()) {
    case Number(exampleDay.date):
      dayData = [{ title: exampleDay.title, events: exampleDay.events }];
      break;
    default:
  }
  return dayData || [];
};

const dateCellRender = (value: Dayjs) => {
  const dayData = getDayData(value);
  return (
    <ul className="events">
      {dayData.map((item) => (
        <li key={item.title}>
          <div className="chip">{item.title}</div>
          {item.events?.map((event) => (
            <Flex>
              <Tag>
                {event.title} {event.time}
              </Tag>
            </Flex>
          ))}
        </li>
      ))}
    </ul>
  );
};

const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
  if (info.type === "date") return dateCellRender(current);
  return info.originNode;
};

export default function TheCalendar(days?: Day[]) {
  return <Calendar cellRender={cellRender} />;
}
