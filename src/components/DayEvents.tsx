import { useState } from "react";
import { Day } from "../types";
import { Typography, Flex, Table, Button, Input } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface IDayEvents {
  day: Day;
}

const columns = [
  {
    title: "Название",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Описание",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Время",
    dataIndex: "time",
    key: "time",
  },
];

export const DayEvents: React.FC<IDayEvents> = ({ day }) => {
  const [isAdding, setIsAdding] = useState(false);

  function startAdding() {
    setIsAdding(true);
  }

  function stopAdding() {
    setIsAdding(false);
  }

  function addEvent() {}

  return (
    <Flex className="example-component" vertical={true}>
      <Title>События</Title>
      <Table dataSource={day.events} columns={columns} />
      {isAdding ? (
        <Flex gap="24px" justify="center" align="center">
          <Flex vertical={true}>
            <Title>Название</Title>
            <Input />
          </Flex>
          <Flex vertical={true}>
            <Title>Описание</Title>
            <Input />
          </Flex>
          <Flex vertical={true}>
            <Title>Время</Title>
            <Input />
          </Flex>
          <Button onClick={addEvent} shape="circle">
            <CheckOutlined />
          </Button>
          <Button onClick={stopAdding} shape="circle">
            <CloseOutlined />
          </Button>
        </Flex>
      ) : (
        <Button onClick={startAdding}>Добавить событие</Button>
      )}
    </Flex>
  );
};
