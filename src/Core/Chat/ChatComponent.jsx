import React, { useEffect } from "react";
import styled from "@emotion/native";
import { Messages, SendMessage, Menu } from "./components";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000000;
`;

export const ChatComponent = props => {
  const { navigation, messages, fetching } = props;

  // useEffect(() => {
  //   console.log("ChatComponent");
  // }, []);

  return (
    <Container>
      {/* <Menu /> */}
      <Messages navigation={navigation} messages={messages} />
      <SendMessage navigation={navigation} sendFile={props.sendFile} fetching={fetching} />
    </Container>
  );
};

