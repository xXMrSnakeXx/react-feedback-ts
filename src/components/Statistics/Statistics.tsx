import { FC } from "react";
import { Text } from "./Statistics.styled";

interface IStatisticsProps {
  stat: IStat;
  total: number;
  positivePercentage: number;
}
interface IStat {
  good: number;
  neutral: number;
  bad: number;
}

const Statistics: FC<IStatisticsProps> = ({
  stat,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {Object.entries(stat).map(([key, value]) => (
        <Text key={key}>
          {key}: {value}
        </Text>
      ))}
      <Text> Total: {total}</Text>
      <Text> Positive feedback: {positivePercentage}%</Text>
    </>
  );
};

export default Statistics;
