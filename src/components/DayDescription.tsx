import { Day } from "../types";
import { Input, Typography, Flex } from "antd";

const { TextArea } = Input;
const { Title } = Typography;

interface IDayDescription {
  day: Day;
}

export const DayDescription: React.FC<IDayDescription> = ({ day }) => {
  return (
    <Flex className="example-component" vertical={true}>
      <Title>Описание дня</Title>
      <TextArea value={day.description} />
    </Flex>
  );
};
