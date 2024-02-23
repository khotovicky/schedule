import {FC} from "react";
import {Space, Tag, Typography} from "antd";
import {CalendarEvent} from "../types.ts";

interface Props {
    title?: string
    description?: string
    events?: CalendarEvent[]
}

export const CalendarDayCell: FC<Props> = ({ events = [], title }) => {

    const sortedEvents = [...events].sort(
        (eventA, eventB) => eventA.time.isAfter(eventB.time) ? 1 : -1
    )

    return <Space direction={"vertical"} className="events">
        <div className="chip">{title}</div>
        {sortedEvents.map((event) => (
            <Tag color={"red"}>
                <Space>
                    <Typography.Text>
                        {event.title}
                    </Typography.Text>
                    <Tag color={"blue"}>{event.time.format("HH:mm")}</Tag>
                </Space>
            </Tag>
        ))}
    </Space>
}
