import React from 'react';
import {Pressable} from 'react-native';
import BackButtonIcon from "./images/BackButtonIcon";
import styled from "@emotion/native";

export default function BackButton(props) {
  const { onPress } = props;

  return (
      <BackButtonContainer>
        <Pressable onPress={onPress}>
          <BackButtonWrapper>
            <BackButtonIcon />
            <BackButtonText>Back</BackButtonText>
          </BackButtonWrapper>
        </Pressable>
      </BackButtonContainer>
  );
};

const BackButtonContainer = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
`;

const BackButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const BackButtonText = styled.Text`
  font-size: 17px;
  font-family: "SF-Pro-Text-Regular";
  font-weight: 400;
  color: #007AFF;
`;
