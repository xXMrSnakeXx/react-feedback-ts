import { FC, ReactNode } from "react";
import { Container, Title } from "./Section.styled";

interface ISectionProps {
  title: string;
  children: ReactNode;
}

const Section: FC<ISectionProps> = ({ title, children }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      {children}
    </Container>
  );
};

export default Section;
