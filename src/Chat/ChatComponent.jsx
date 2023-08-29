import React, { useEffect } from "react";
import styled from "@emotion/native";
import { Messages, SendMessage, Menu } from "./components";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #0A0C0B;
`;

export const ChatComponent = props => {
  const { messages, fetching } = props;

  // useEffect(() => {
  //   console.log("ChatComponent");
  // }, []);

  return (
    <Container>
      <Menu />
      <Messages messages={messages} />
      <SendMessage sendFile={props.sendFile} fetching={fetching} />
    </Container>
  );
};

