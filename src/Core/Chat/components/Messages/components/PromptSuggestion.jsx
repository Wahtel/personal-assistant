import React from "react";
import styled from "@emotion/native";

const Container = styled.View`
  display: flex;
  width: 100%;
  height: 59x;
  padding: 10px 22px 10px 22px;
  border-radius: 12px;
  border: 1px solid #FFFFFF4D;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  color: #FFFFFF;
  font-family: "SF-Pro-Text-Medium";
  font-size: 14px;
`;

const Description = styled.Text`
  color: #AEAEB2;
  font-family: "SF-Pro-Text-Regular";
  font-size: 14px;
  margin-top: 4px;
`;

export const PromptSuggestion = ({ title, description }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};
