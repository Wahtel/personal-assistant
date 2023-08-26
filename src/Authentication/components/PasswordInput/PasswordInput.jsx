import React, { useState } from "react";
import styled from "@emotion/native";
import { HidePasswordIcon } from "../HidePasswordIcon";
import { ShowPasswordIcon } from "../ShowPasswordIcon";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Input = styled.TextInput`
  border-radius: 0px 0px 14px 14px;
  padding: 12px 16px 12px 16px;
  // margin-bottom: 8px;
  background-color: #202020;
  height: 48px;
  width: 100%;
  color: #ffffff;
  font-family: "SF-Pro-Text-Regular";
`;

const IconContainer = styled.TouchableOpacity`
  position: absolute;
  right: 29px;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  // background-color: blue;
`;

const StyledIcon = styled(HidePasswordIcon)`
  position: absolute;
  right: 29px;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export const PasswordInput = (props) => {
  const { placeholder, secureTextEntry } = props;
  const [isHidden, setIsHidden] = useState(true);

  const toggleIsHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <Container>
      <Input
        placeholder={placeholder}
        secureTextEntry={isHidden}
        placeholderTextColor="#FFFFFF"
        autoCapitalize="none"
        // onChangeText={onChangeText}
        // value={value}
      />
      <IconContainer onPress={toggleIsHidden} activeOpacity={1}>
        {isHidden ? <HidePasswordIcon /> : <ShowPasswordIcon />}
      </IconContainer>
    </Container>
  );
};
