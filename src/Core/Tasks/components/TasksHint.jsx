import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from '@emotion/native';
import { ClearIcon } from 'src/ui/icons/ClearIcon';

const Container = styled.View`
  width: 90%;
  margin: 0 auto;
  padding: 10px 16px 10px 16px;
  border-radius: 14px;
  background-color: #1C1C1E;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HintContentContainer = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const EmojiContainer = styled.View`
  width: 50px;
  height: 50px;
  background-color: #FFFFFF1A;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.View`
  flex: 1;
  margin-left: 13px;
  // background-color: #FFFFFF1A;
`;

const Title = styled.Text`
  font-size: 18px;
  font-family: "SF-Pro-Text-Medium";
  color: #FFFFFF;
  margin-top: 5px;
`;

const Description = styled.Text`
  font-size: 13px;
  font-family: "SF-Pro-Text-Regular";
  color: #BCBCBC;
  margin-top: 5px;
`;

const CloseIconWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const TasksHint = (props) => {
  const { icon, title, description, onPress, onClose } = props;

  return (
    <Container>
      <HintContentContainer onPress={onPress}>
        <EmojiContainer>
          <Text>{icon}</Text>
        </EmojiContainer>
        <TextContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextContainer>
      </HintContentContainer>
      <CloseIconWrapper onPress={onClose}>
        <ClearIcon color='#5F5F5F' />
      </CloseIconWrapper>
    </Container>
  );
};
