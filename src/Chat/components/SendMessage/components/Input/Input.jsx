import React, { useState } from "react";
import styled from "@emotion/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

const InputContainer = styled.View`
  margin-left: 15px;
  flex-direction: row;
  position: relative;
  display: flex;
  height: 40px;
  align-items: center;
  background-color: black;
`;

const IconContainer = styled.TouchableOpacity`
  position: absolute;
  left: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 30px;
}
`;

const SendIconContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  margin-left: 15px;
  width: 35px;
  background-color: #1f1e1e;
  border-radius: 50%;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
`;

const StyledInput = styled.TextInput`
  background-color: #1f1e1e;
  width: 85%;
  border-radius: 50px;
  height: 40px;
  padding-left: 20px;
  color: #dedede;
  ${({ isRecording }) => isRecording && "border: 1px solid #3f37c9;"}
`;

export const Input = (props) => {
  const { isRecording, startRecording, stopRecording } = props;
  const [messageValue, setMessageValue] = useState("");

  const renderIcon = () => {
    if (isRecording) {
      return (
        <MaterialCommunityIcon
          name="stop-circle-outline"
          size={25}
          color="#3f37c9"
        />
      );
    }
    // if (isRecording) {
    //   return <SpinnerIcon />;
    // }

    return <Icon name="multitrack-audio" size={20} color="gray" />;
  };

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
      {!messageValue && (
        <IconContainer onPress={isRecording ? stopRecording : startRecording}>
          {renderIcon()}
        </IconContainer>
      )}
      <SendIconContainer
        disabled={!messageValue.length}
        isDisabled={!messageValue.length}
      >
        <Icon
          name="arrow-upward"
          size={20}
          color={!messageValue.length ? "gray" : "white"}
        />
      </SendIconContainer>
    </InputContainer>
  );
};
