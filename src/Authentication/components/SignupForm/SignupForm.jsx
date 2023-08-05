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
  // background-color: red;
`;

const FormContainer = styled.View`
  width: 100%;
  height: 200px;
  padding-horizontal: 30px;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  // margin-bottom: 10px;
  color: #f8f8f8;
  height: 34px;
`;

const SubTitle = styled.Text`
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 36px;
  color: #949494;
  height: 26px;
`;

const StyledText = styled.Text`
  color: #949494;
  font-size: 13px;
  text-align: center;
  font-family: "Inter-Medium";
`;

const HighlightedText = styled.Text`
  color: #21bf73;
  text-decoration-line: underline;
`;

const ButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  height: 150px;
  width: 100%;
  display: flex;
`;

const Input = styled.TextInput`
  border-width: 1px;
  border-color: #5e5e5e;
  border-radius: 15px;
  padding: 12px;
  padding-left: 23px;
  margin-bottom: 8px;
`;

const TextWrapper = styled.View`
  margin-top: 10px;
`;

const Button = styled.Pressable`
  width: 90%;
  background-color: #21bf73;
  align-items: center;
  padding: 10px;
  margin: 0 auto;
  height: 66px;
  display: flex;
  justify-content: center;
  border-radius: 15px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-family: "Inter-Regular";
  font-size: 16px;
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
          <Title>Sign Up</Title>
          <SubTitle>It only takes a minute to creae your account</SubTitle>
          <Input
            placeholder="Email address"
            keyboardType="email-address"
            placeholderTextColor="#CCCCCC"
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
            {/* <TouchableOpacity onPress={toggleForm}>
              <Link>Sign in</Link>
            </TouchableOpacity> */}
          </TextWrapper>
        </View>
      </FormContainer>
      <ButtonContainer>
        <Button onPress={() => navigation.navigate("Chat")}>
          <ButtonText>Sign Up</ButtonText>
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
