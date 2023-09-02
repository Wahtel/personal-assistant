import React, { useRef, useEffect } from "react";
import styled from "@emotion/native";
import { ScrollView } from "react-native";
import { AssistantIcon } from "./components/AssistantIcon";
import { AssistantMessage } from "./components/AssistantMessage";
import { UserMessage } from "./components/UserMessage";
import { render } from "react-native-web/dist/cjs/exports/render";

const MessageContainer = styled.View`
  display: flex;
  border-top-color: rgba(32, 33, 35, 0);
  margin: auto;
  margin-bottom: 20px;
  width: 85%;
  display: flex;
  z-index: 1;
  flex-direction: column;
  // align-items: center;
`;

const LogoWrapper = styled.View`
  flex-direction: row;
  display: flex;
  justify-Content: flex-start;
  align-items: center;
  // background-color: #1f1e1e;
`;

const Logo = styled.View`
  width: 26px;
  height: 26px;
  background-color: ${({ type }) => (type === "assistant" ? "#0B6AC9" : "#BF5AF2")};
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const LogoText = styled.Text`
  color: #FFFFFF;
  font-size: 12px;
  font-family: "SF-Pro-Text-Medium";
`;

const NameLabel = styled.Text`
  color: #555555;
  font-size: 15px;
  font-family: "SF-Pro-Text-Medium";
  margin-left: 10px;
`;


export const Messages = (props) => {
  const { messages } = props;
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current.scrollToEnd({ animated: true });
    }, 100); 
  
    return () => {
      clearTimeout(timer);
    };
  }, [messages]);

  const renderLogo = type => {
    if (type === "user") {
      return <LogoText>IW</LogoText>;
    }
    return <AssistantIcon />;
  }

  const renderMessage = ({ type, message }) => {
    if (type === "user") {
      return <UserMessage message={message} />;
    }
    return <AssistantMessage message={message} />;
  };

  const renderMessages = () => {
    return messages.map((message, index) => {
      const isUser = message.type === "user";
      return (
        <MessageContainer type={message.type} index={index} key={index}>
          <LogoWrapper>
            <Logo type={message.type}>
              {renderLogo(message.type)}
            </Logo>
            <NameLabel>{isUser ? "Paul" : "Personal Assistant"}</NameLabel>
          </LogoWrapper>
          {renderMessage(message)}
        </MessageContainer>
      );
    });
  };

  return (
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }} ref={ref}>
        {renderMessages()}
      </ScrollView>
  );
};

