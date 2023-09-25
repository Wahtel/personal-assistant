import React, { useState } from "react";
import styled from "@emotion/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  SpinnerIcon,
  SendMessageIcon,
  RecordAudioIcon,
  TrashIcon,
  ClearIcon,
} from "src/ui/icons";
import { Menu } from "../../../Menu/";

const InputContainer = styled.View`
  // margin-left: 15px;
  flex-direction: row;
  position: relative;
  display: flex;
  height: 50px;
  align-items: center;
  background-color: #000000;
  // justify-content: flex-end;
  // background-color: red;
  width: 95%;
  // border: 1px solid pink;
  margin: 0 auto;
`;

const InputWrapper = styled.View`
  display: flex;
  // width: 80%;
  width: 285px;
  position: relative;
  // border: 1px solid pink;
`;

const IconContainer = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  justify-content: center;
  // background-color: pink;
  width: 45px;
`;

const IconPositioning = styled.View`
  position: absolute;
  right: 16px;
`;

const ActionIconContainer = styled.TouchableOpacity`
  display: flex;
  // opacity: ${({ isDisabled }) => (isDisabled ? "0.5" : "1")};
  flex: 1.5;
  // background-color: green;
  // border: 1px solid blue;
  align-items: center;
`;

const StyledInput = styled.TextInput`
  background-color: #1f1f1f;
  border-radius: 100px;
  height: 38px;
  padding: 8px 16px 8px 16px;
  color: #aeaeb2;
  font-family: "SF-Pro-Text-Regular";
  font-size: 15px;
`;

const View = styled.View`
  display: flex;
  flex: 1;
  // background-color: red;
  // border: 1px solid red;
  align-items: center;
  justify-content: center;
`;

export const Input = (props) => {
  const {
    navigation,
    isRecording,
    startRecording,
    stopRecording,
    fetching,
    communicationState,
    toggleCommunicationState,
  } = props;
  const [messageValue, setMessageValue] = useState("");

  const clearState = () => {
    setMessageValue("");
  };

  const iconPressHandler = () => {
    if (isRecording) {
      stopRecording();
    } else if (messageValue.length) {
      clearState();
    } else {
      startRecording();
    }
  };

  const renderIcon = () => {
    console.log(messageValue.length, "messageValue.length");
    if (messageValue.length) {
      return <ClearIcon />;
    }
    if (isRecording) {
      return <TrashIcon />;
    }
    if (fetching) {
      return <SpinnerIcon />;
    }

    return <RecordAudioIcon />;
  };

  return (
    <InputContainer>
      <View>
        <Menu navigation={navigation} />
      </View>
      <InputWrapper>
        <StyledInput
          placeholder="Message"
          placeholderTextColor="#dedede"
          selectionColor="#FF9F0A"
          onChange={(e) => setMessageValue(e.nativeEvent.text)}
          value={messageValue}
          isRecording={isRecording}
          keyboardAppearance="dark"
          editable={!isRecording}
        />
        <IconContainer onPress={iconPressHandler}>
          <IconPositioning>{renderIcon()}</IconPositioning>
        </IconContainer>
      </InputWrapper>
      <ActionIconContainer onPress={toggleCommunicationState} activeOpacity={1}>
        <SendMessageIcon isEmpty={!messageValue.length && !isRecording} />
      </ActionIconContainer>
    </InputContainer>
  );
};
