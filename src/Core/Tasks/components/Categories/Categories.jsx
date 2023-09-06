import React from "react";
import styled from "@emotion/native";
import { Task } from "./Task/Task";

const Container = styled.View`
  display: flex;
  margin-top: 14px;
  margin-left: 20px;
`;

const TitleWrapper = styled.View`
  display: flex;
  height: 28px;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 7px;
`;

const Title = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-family: "SF-Pro-Text-Semibold";
`;

export const Categories = ({ tasks }) => {

  const renderTasks = () => {
    return tasks.map((task) => {
      return <Task key={task.id} task={task} />;
    });
  };

  return (
    <Container>
      <TitleWrapper>
        <Title>Suggested</Title>
      </TitleWrapper>
      {renderTasks()}
    </Container>
  );
};
