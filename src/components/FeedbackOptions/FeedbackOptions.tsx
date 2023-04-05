import { FC } from "react";
import { Button } from "./FeedbackOptions.styled";

interface IFeedbackOptionsProps {
  options: Array<string>;
  onLeaveFeedback: (a: string) => void;
}

const FeedbackOptions: FC<IFeedbackOptionsProps> = ({
  options,
  onLeaveFeedback,
}) => {
  return (
    <>
      {options.map((option) => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </>
  );
};

export default FeedbackOptions;
