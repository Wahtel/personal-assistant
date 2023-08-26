import React from "react";
import styled from "@emotion/native";
import {
  View,
  Dimensions,
} from "react-native";
import { PasswordInput } from "../PasswordInput";

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const FormContainer = styled.View`
  width: 100%;
  // height: 250px;
  padding-horizontal: 10px;
  // background-color: green;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  color: #f8f8f8;
  margin-bottom: 15px;
  font-family: "SF-Pro-Text-Semibold";
  `;
  
  const SubTitle = styled.Text`
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 36px;
  color: #AEAEB2;
  height: 26px;
  font-family: "SF-Pro-Text-Regular";
`;

const StyledText = styled.Text`
  color: #949494;
  font-size: 11.85px;
  text-align: center;
  font-family: "SF-Pro-Text-Medium";
`;

const HighlightedText = styled.Text`
  color: #FF9F0A;
  text-decoration-line: underline;
`;

const ButtonContainer = styled.View`
  // position: absolute;
  // bottom: 0;
  // height: 150px;
  width: 100%;
  display: flex;
  // background-color: red;
  margin-top: 30px;
`;

const Input = styled.TextInput`
  border-radius: 14px 14px 0px 0px;
  padding: 12px 16px 12px 16px;
  background-color: #202020;
  height: 48px;
  margin-bottom: 1px;
  color: #FFFFFF;
  font-family: "SF-Pro-Text-Regular";
  `;
  
  const TextWrapper = styled.View`
  margin-top: 16px;
  `;
  
  const Button = styled.Pressable`
  width: 90%;
  background-color: #0C7BEB;
  align-items: center;
  padding: 10px;
  margin: 0 auto;
  height: 61.39px;
  display: flex;
  justify-content: center;
  border-radius: 12px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-family: "SF-Pro-Text-Medium";
  font-size: 18px;
`;

const SignInContainer = styled.View`
  margin-top: 21px;
`;

export const SignupForm = ({ toggleForm, navigation }) => {
  const { height } = Dimensions.get("window");

  return (
    <Container screenHeight={height}>
      <FormContainer>
        <View>
          <Title>Sign up</Title>
          <SubTitle>It only takes a minute to creae your account</SubTitle>
          <Input
            placeholder="Email address"
            keyboardType="email-address"
            placeholderTextColor="#FFFFFF"
            autoCapitalize="none"
            // onChangeText={setEmail}
            // value={email}
          />
          <PasswordInput
            placeholder="Password"
            // onChangeText={setPassword}
            // value={password}
          />
          <TextWrapper>
            <StyledText>
              I agree the <HighlightedText>Terms of Use</HighlightedText> and{" "}
              <HighlightedText>Privacy Policy</HighlightedText>
            </StyledText>
          </TextWrapper>
        </View>
      </FormContainer>
      <ButtonContainer>
        <Button onPress={() => navigation.navigate("Chat")}>
          <ButtonText>Sign up</ButtonText>
        </Button>
        <SignInContainer>
          <StyledText>
            Already registered?{" "}
            <HighlightedText onPress={toggleForm}>
              Sign In
            </HighlightedText>
          </StyledText>
        </SignInContainer>
      </ButtonContainer>
    </Container>
  );
};
