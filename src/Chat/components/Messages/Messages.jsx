import React, { useRef, useEffect } from "react";
import styled from "@emotion/native";
import { ScrollView } from "react-native";

const MessageContainer = styled.View`
  // background-color: ${({ type }) =>
    type === "chat" ? "#434654" : "#343541"};
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
  width: 30px;
  height: 30px;
  background-color: ${({ type }) => (type === "assistant" ? "#21BF73" : "#3299DA")};
  border-radius: 11px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const LogoText = styled.Text`
  color: #fff;
  font-size: 8px;
`;

const NameLabel = styled.Text`
  color: #c6c6c6;
  font-size: 15px;
  // font-family: "Inter-Regular";
  // text-transform: uppercase;
  margin-left: 10px;
`;

const Message = styled.Text`
  // color: #ffffff;
  color: #949494;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-left: 5px;
  margin-top: 10px;
  font-size: 14px;
  // font-family: "Inter-Regular";
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

  const renderMessages = () => {
    return messages.map((message, index) => {
      const logoText = "IW";
      const isUser = message.type === "user";
      return (
        <MessageContainer type={message.type} index={index} key={index}>
          <LogoWrapper>
            <Logo type={message.type}>
              {isUser && <LogoText>{logoText}</LogoText>}
            </Logo>
            <NameLabel>{isUser ? "Paul" : "P.A."}</NameLabel>
          </LogoWrapper>
          <Message>{message.message}</Message>
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

