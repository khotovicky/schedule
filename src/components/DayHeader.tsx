import { Day } from "../types";
import { Typography, Button, Flex } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

interface IDayHeader {
  day: Day;
}

export const DayHeader: React.FC<IDayHeader> = ({ day }) => {
  return (
    <Flex
      className="example-component"
      justify="center"
      align="center"
      gap={"24px"}
    >
      <Button>
        <CloseOutlined />
      </Button>
      <Title>{day.title}</Title>
      <Text>{day.date}</Text>
    </Flex>
  );
};
