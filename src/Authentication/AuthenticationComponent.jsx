import React, { useState } from "react";
import styled from "@emotion/native";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { LoginForm, SignupForm } from "./components";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000000;
`;

const Content = styled.View`
  padding: 40px 0 0px 20px;
  background-color: green;
  flex: 1;
  position: relative;
`;

const Title = styled.Text`
  color: #ffffff;
  font-family: "SF-Pro-Text-Semibold";
  font-size: 32px;
  margin-bottom: 14px;
`;

const SubTitle = styled.Text`
  color: #aeaeb2;
  font-family: "SF-Pro-Text-Regular";
  font-size: 15px;
  // line-height: 18px;
`;

const ButtonContainer = styled.View`
  height: 150px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  background-color: red;
  align-self: center;
`;

export const AuthenticationComponent = ({ navigation }) => {
  const [formState, setFormState] = useState("signup");

  const toggleForm = () => {
    setFormState(formState === "login" ? "signup" : "login");
  };

  const renderForm = () => {
    if (formState === "login") {
      return <LoginForm toggleForm={toggleForm} navigation={navigation} />;
    }

    return <SignupForm toggleForm={toggleForm} navigation={navigation} />;
  };

  return (
    <Container>
      <Content>
        <Title>Welcome to Personal Assistant</Title>
        <SubTitle>
          Crafted for You, Powered by AI: Experience the future of personal
          assistance today.
        </SubTitle>
      </Content>
      <ButtonContainer>

      </ButtonContainer>
    </Container>
  );
};
