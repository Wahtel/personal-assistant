import React from "react";
import { Text } from "react-native";
import styled from "@emotion/native";
import { ClearIcon } from "src/ui/icons/ClearIcon";

const Container = styled.View`
  width: 350px;
  height: 80px;
  margin: 0 auto;
  padding: 10px 16px 10px 16px;
  border-radius: 14px;
  background-color: #1C1C1E;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const EmojiContainer = styled.View`
  width: 50px;
  height: 50px;
  background-color: #FFFFFF1A;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.View`
  flex: 1;
  height: 60px;
  margin-left: 13px;
  // background-color: #FFFFFF1A;
`;

const Title = styled.Text`
  font-size: 18px;
  font-family: "SF-Pro-Text-Medium";
  color: #FFFFFF;
  margin-top: 5px;
`;

const Description = styled.Text`
  font-size: 13px;
  font-family: "SF-Pro-Text-Regular";
  color: #BCBCBC;
  margin-top: 5px;
`;

const StyledIcon = styled(ClearIcon)`
  position: absolute;
  top: 13px;
  right: 13px;
`;

export const TasksHint = () => {
  return (
    <Container>
      <StyledIcon color="#5F5F5F" />
      <EmojiContainer>
        <Text>🥳</Text>
      </EmojiContainer>
      <TextContainer>
        <Title>Welcome to Promts!</Title>
        <Description>You can choose a topic to use the chat more conveniently</Description>
      </TextContainer>
    </Container>
  );
};
