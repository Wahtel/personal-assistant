import React, { useState } from "react";
import styled from "@emotion/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { SpinnerIcon } from "../SpinnerIcon";
import { SendMessageIcon, RecordAudioIcon } from "../../components";

const InputContainer = styled.View`
  margin-left: 15px;
  flex-direction: row;
  position: relative;
  display: flex;
  height: 50px;
  align-items: center;
  background-color: #0A0C0B;
`;

const IconContainer = styled.TouchableOpacity`
  position: absolute;
  left: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 30px;
`;

const SendIconContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  // margin-left: 15px;
  // background-color: red;
  border-radius: 50%;
  // opacity: ${({ isDisabled }) => (isDisabled ? "0.5" : "1")};
  flex: 1;
`;

const StyledInput = styled.TextInput`
  background-color: #1f1e1e;
  width: 80%;
  border-radius: 15px;
  height: 50px;
  padding-left: 20px;
  color: #dedede;
  border: 1px solid #5E5E5E;
  ${({ isRecording }) => isRecording && "border: 1px solid #3f37c9;"}
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

  // const renderIcon = () => {
  //   if (isRecording) {
  //     return (
  //       <MaterialCommunityIcon
  //         name="stop-circle-outline"
  //         size={25}
  //         color="#3f37c9"
  //       />
  //     );
  //   }
  //   if (fetching) {
  //     return <SpinnerIcon />;
  //   }

  //   return <Icon name="multitrack-audio" size={20} color="gray" />;
  // };

  const renderActionIcon = () => {
    if (communicationState === "audio") {
      return (
        <RecordAudioIcon />
      );
    }

    return <SendMessageIcon />;
  };

  console.log(!messageValue.length, "!messageValue.length");

  return (
    <InputContainer>
      <StyledInput
        placeholder="Message"
        placeholderTextColor="#dedede"
        onChange={(e) => setMessageValue(e.nativeEvent.text)}
        value={messageValue}
        isRecording={isRecording}
        keyboardAppearance="dark"
        editable={!isRecording}
      />
      {/* {!messageValue && (
        <IconContainer onPress={isRecording ? stopRecording : startRecording}>
          {renderIcon()}
        </IconContainer>
      )} */}
      <SendIconContainer
        onPress={toggleCommunicationState}
        activeOpacity={1}
      >
        {renderActionIcon()}
      </SendIconContainer>
    </InputContainer>
  );
};
