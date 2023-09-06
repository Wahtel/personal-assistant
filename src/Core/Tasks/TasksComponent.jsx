import React from "react";
import styled from "@emotion/native";
import { TasksHint, Categories } from "./components";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #0a0c0b;
`;

const Text = styled.Text`
  color: #ffffff;
`;

const Tasks = [
  {
    id: 1,
    title: "Post",
    description: "Compose engaging instagram post",
    icon: "instagram",
    prompt:
      "As a content strategist specializing in Instagram engagement, draft a post on [topic]. This post targets [business description] and should resonate with [target audience]. The main aim of this post is [post objective]. Please create an Instagram post that aligns with the specified objectives and audience preferences.",
  },
];

export const TasksComponent = () => {
  return (
    <Container>
      <TasksHint />
      <Categories tasks={Tasks} />
    </Container>
  );
};
