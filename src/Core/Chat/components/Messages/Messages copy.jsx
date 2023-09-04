import React, { useRef, useEffect } from "react";
import styled from "@emotion/native";
import { ScrollView } from "react-native";
import { PersonalAssistantIcon } from "./components/PersonalAssistantIcon";
import { AssistantLogo } from "./components/AssistantLogo";
import { AssistantMessage } from "./components/AssistantMessage";
import { UserMessage } from "./components/UserMessage";
import { PromptSuggestion } from "./components/PromptSuggestion";

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

const EmptyStateContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const EmptyStateTitle = styled.Text`
  font-size: 18px;
  color: #555555;
  font-family: "SF-Pro-Text-Medium";
  margin-top: 22px;
`;

const LogoWrapper = styled.View`
  flex-direction: row;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // background-color: #1f1e1e;
`;

const Logo = styled.View`
  width: 26px;
  height: 26px;
  background-color: ${({ type }) =>
    type === "assistant" ? "#0B6AC9" : "#BF5AF2"};
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const LogoText = styled.Text`
  color: #ffffff;
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

  const renderLogo = (type) => {
    if (type === "user") {
      return <LogoText>IW</LogoText>;
    }
    return <AssistantLogo />;
  };

  const renderMessage = ({ type, message }) => {
    if (type === "user") {
      return <UserMessage message={message} />;
    }
    return <AssistantMessage message={message} />;
  };

  const renderEmptyState = () => {
    return (
      <EmptyStateContainer>
        <PersonalAssistantIcon />
        <EmptyStateTitle>Personal Assistant</EmptyStateTitle>
      </EmptyStateContainer>
    );
  };

  const renderMessages = () => {
    return messages.map((message, index) => {
      const isUser = message.type === "user";
      return (
        <MessageContainer type={message.type} index={index} key={index}>
          <LogoWrapper>
            <Logo type={message.type}>{renderLogo(message.type)}</Logo>
            <NameLabel>{isUser ? "Paul" : "Personal Assistant"}</NameLabel>
          </LogoWrapper>
          {renderMessage(message)}
        </MessageContainer>
      );
    });
  };

  const renderChat = () => {
    return (
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }} ref={ref}>
        {renderMessages()}
      </ScrollView>
    );
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 36, flexGrow: 1  }}
      ref={ref}
    >
      {messages.length ? renderMessages() : renderEmptyState()}
    </ScrollView>
  );
};
