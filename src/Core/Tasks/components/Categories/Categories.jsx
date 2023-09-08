import React from "react";
import styled from "@emotion/native";
import { FlatList } from "react-native";
import { Task } from "./Task/Task";

const Container = styled.View`
  display: flex;
  margin-top: 14px;
  // margin-left: 20px;
  // border: 1px solid #ffffff;
  // width: 350px;
  margin: 10px auto;
`;

const TitleWrapper = styled.View`
  display: flex;
  height: 28px;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 7px;
  margin-left: 13px;
`;

const Title = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-family: "SF-Pro-Text-Semibold";
`;

const Tasks = styled.View`
  display: flex;
  flexDirection: row;
  flexWrap: wrap;
  // background-color: red;
`;

export const Categories = ({ tasks, title }) => {
  const renderTasks = () => {
    return tasks.map((task) => {
      return <Task key={task.id} task={task} />;
    });
  };

  return (
    <Container>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      <Tasks>
        {renderTasks()}
      </Tasks>
    </Container>
  );
};
