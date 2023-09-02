import React from "react";
import styled from "@emotion/native";

const Message = styled.View`
  display: flex;
  max-width: 100%;
  margin-top: 10px;
  background-color: #FFFFFF12;
  padding: 15px;
  border-radius: 12px;
`;

  const Text = styled.Text`
  color: rgba(255, 255, 255, 1);
  font-family: "SF-Pro-Text-Regular";
  font-size: 15px;
  line-height: 18.5px;
`;

export const UserMessage = (props) => {
  const { message } = props;

  return (
    <Message>
      <Text>{message}</Text>
    </Message>
  );
};

