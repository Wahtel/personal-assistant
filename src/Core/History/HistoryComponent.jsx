import React from "react";
import styled from "@emotion/native";
import { ChatHistory } from "./components";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #0a0c0b;
  flex-direction: column;
`;

const Text = styled.Text`
  color: #ffffff;
`;

const HistoryContainer = styled.View`
  // flex: 1;
  // padding: 0px 0px 0px 16px;
  border-radius: 10px;
  background-color: #1C1C1E;
  // height: 100px;
  margin: 0 20px;
  margin-bottom: 15px;
`;

export const HistoryComponent = () => {
  return (
    <Container>
      <HistoryContainer>
        <ChatHistory />
        <ChatHistory />
        <ChatHistory />
        <ChatHistory />
        <ChatHistory />
      </HistoryContainer>
      <HistoryContainer>
        <ChatHistory />
      </HistoryContainer>
    </Container>
  );
};
