import React from "react";
import styled from "@emotion/native";

const Message = styled.View`
  display: flex;
  max-width: 100%;
  margin-left: 37px;
  margin-top: 10px;
`;

  const Text = styled.Text`
  color: #FFFFFF;
  font-family: "SF-Pro-Text-Medium";
  font-size: 15px;
  line-height: 20px;
`;

export const AssistantMessage = (props) => {
  const { message } = props;

  return (
    <Message>
      <Text>{message}</Text>
    </Message>
  );
};

