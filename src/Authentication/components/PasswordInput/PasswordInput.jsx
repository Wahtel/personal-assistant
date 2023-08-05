import React, { useState } from "react";
import styled from "@emotion/native";
import { HideIcon } from "../HideIcon";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Input = styled.TextInput`
  border-width: 1px;
  border-color: #5e5e5e;
  border-radius: 15px;
  padding: 12px;
  padding-left: 23px;
  margin-bottom: 8px;
  width: 100%;
  color: #ffffff;
`;

const IconContainer = styled.TouchableOpacity`
  position: absolute;
  right: 29px;
  top: 0;
  bottom: 8px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  // background-color: blue;
`;

const StyledIcon = styled(HideIcon)`
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
        placeholderTextColor="#CCCCCC"
        autoCapitalize="none"
        // onChangeText={onChangeText}
        // value={value}
      />
      <IconContainer onPress={toggleIsHidden}>
        <HideIcon />
      </IconContainer>
    </Container>
  );
};
