import { FC } from "react";
import { Text } from "./Notification.styled";

interface INotificationProps {
  message: string;
}

const Notification: FC<INotificationProps> = ({ message }) => {
  return <Text>{message}</Text>;
};

export default Notification;
