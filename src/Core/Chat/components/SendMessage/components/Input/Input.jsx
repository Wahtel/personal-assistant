import React, { useState } from "react";
import styled from "@emotion/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { SpinnerIcon } from "./SpinnerIcon";
import { SendMessageIcon } from "./SendMessageIcon";
import { RecordAudioIcon } from "./RecordAudioIcon";
import { TrashIcon } from "./TrashIcon";
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
  right: 16px;
  top: 0;
  bottom: 0;
  margin: auto;
  justify-content: center;
  // background-color: pink;
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
  // ${({ isRecording }) => isRecording && "border: 1px solid #3f37c9;"}
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
    isRecording,
    startRecording,
    stopRecording,
    fetching,
    communicationState,
    toggleCommunicationState,
  } = props;
  const [messageValue, setMessageValue] = useState("");

  console.log(communicationState, "communicationState");

  const renderIcon = () => {
    if (isRecording) {
      return <TrashIcon />;
    }
    if (fetching) {
      return <SpinnerIcon />;
    }

    return <RecordAudioIcon />;
  };

  const renderActionIcon = () => {
    // if (communicationState === "audio") {
    //   return <RecordAudioIcon />;
    // }

    return <SendMessageIcon isEmpty={!messageValue.length} />;
  };

  console.log(!messageValue.length, "!messageValue.length");

  return (
    <InputContainer>
      <View>
        <Menu />
      </View>
      <InputWrapper>
        <StyledInput
          placeholder="Message"
          placeholderTextColor="#dedede"
          onChange={(e) => setMessageValue(e.nativeEvent.text)}
          value={messageValue}
          isRecording={isRecording}
          keyboardAppearance="dark"
          editable={!isRecording}
        />
        {!messageValue && (
          <IconContainer onPress={isRecording ? stopRecording : startRecording}>
            {renderIcon()}
          </IconContainer>
        )}
      </InputWrapper>
      <ActionIconContainer onPress={toggleCommunicationState} activeOpacity={1}>
        {renderActionIcon()}
      </ActionIconContainer>
    </InputContainer>
  );
};
