import { useState, useEffect, Fragment } from "react";
import { Audio } from "expo-av";
import styled from "@emotion/native";
import { View, Button, ScrollView, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Assuming you're using FontAwesome. Adjust according to your icon library.


const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
  // background-color: #343541;
  // background-color: white;
`;

const MessageContainer = styled.View`
  // background-color: ${({ type }) =>
    type === "chat" ? "#434654" : "#343541"};
  display: flex;
  border-top-color: rgba(32, 33, 35, 0);
  margin: auto;
  margin-bottom: 20px;
  width: 85%;
  display: flex;
  flex-direction: column;
  // align-items: center;
`;

const LogoWrapper = styled.View`
  flex-direction: row;
  display: flex;
  justify-Content: flex-start;
  align-items: center;
`;

const Logo = styled.View`
  width: 20px;
  height: 20px;
  background-color: ${({ type }) => (type === "chat" ? "#c083fc" : "#3299DA")};
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const LogoText = styled.Text`
  color: #fff;
  font-size: 8px;
`;

const NameLabel = styled.Text`
  color: #c6c6c6;
  font-size: 10px;
  text-transform: uppercase;
  margin-left: 10px;
`;

const Message = styled.Text`
  color: #fff;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-left: 30px;
`;

const InputContainer = styled.View`
  margin-left: 15px;
  flex-direction: row;
  position: relative;
  display: flex;
  height: 30px;
`;

const IconContainer = styled.TouchableOpacity`
  position: absolute;
  left: 78%;
  display: flex;
  justify-content: center;
  height: 100%;
}
`;

const SendIconContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 15px;
  width: 30px;
  background-color: #1f1e1e;
  border-radius: 50%;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
`;

const StyledText = styled.Text`
  text-align: center;
`;

const StyledInput = styled.TextInput`
  background-color: #1f1e1e;
  width: 85%;
  border-radius: 50px;
  height: 30px;
  padding-left: 10px;
  color: #dedede;
`;

const messages = [
  { type: "user", message: "Hello" },
  { type: "chat", message: "Hello" },
  { type: "user", message: "Hello" },
  { type: "chat", message: "Hello" },
  { type: "user", message: "Hello" },
  {
    type: "chat",
    message:
      "Very Very Very Very Very Very Very Very long hello Very Very Very Very Very Very Very Very long helloVery Very Very Very Very Very Very Very long helloVery Very Very Very Very Very Very Very long helloVery Very Very Very Very Very Very Very long helloVery Very Very Very Very Very Very Very long helloVery Very Very Very Very Very Very Very long helloVery Very Very Very Very Very Very Very long helloVery Very Very Very Very Very Very Very long helloVery Very Very Very Very Very Very Very long hello",
  },
  { type: "user", message: "Hello" },
  { type: "chat", message: "Hello" },
  { type: "user", message: "Hello" },
  { type: "chat", message: "Hello" },
  { type: "user", message: "Hello" },
  {
    type: "chat",
    message: "Very Very Very Very Very Very Very Very long hello",
  },
  { type: "user", message: "Hello" },
  { type: "chat", message: "Hello" },
  { type: "user", message: "Hello" },
  { type: "chat", message: "Hello" },
  { type: "user", message: "Hello" },
  {
    type: "chat",
    message: "Very Very Very Very Very Very Very Very long hello",
  },
];

export const AudioRecorderComponent = () => {
  const [recording, setRecording] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioURI, setAudioURI] = useState(null);
  const [messageValue, setMessageValue] = useState("");

  console.log(!messageValue.length, "!messageValue.length");

  useEffect(() => {
    return () => {
      if (recording) {
        recording.stopAndUnloadAsync();
      }
    };
  }, [recording]);
  
  useEffect(() => {
    console.log(messageValue, "messageValue");
  }, [messageValue]);

  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const newRecording = new Audio.Recording();
      await newRecording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      await newRecording.startAsync();

      setRecording(newRecording);
      setIsRecording(true);
    } catch (error) {
      console.log("Error starting recording:", error);
    }
  };

  const stopRecording = async () => {
    try {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setAudioURI(uri);
      setIsRecording(false);
    } catch (error) {
      console.log("Error stopping recording:", error);
    }
  };

  const renderButton = () => (
    <Fragment>
      <Button
        title={isRecording ? "Stop Recording" : "Start Recording"}
        onPress={isRecording ? stopRecording : startRecording}
      />
      {audioURI && <StyledText>Audio URI: {audioURI}</StyledText>}
    </Fragment>
  );

  const renderMessages = () => {
    return messages.map((message, index) => {
      const logoText = "IW";
      const isUser = message.type === "user";
      return (
        <MessageContainer type={message.type} index={index} key={index}>
          <LogoWrapper>
            <Logo type={message.type}>
              {isUser && <LogoText>{logoText}</LogoText>}
            </Logo>
            <NameLabel>{isUser ? "Paul" : "GPT"}</NameLabel>
          </LogoWrapper>
          <Message>{message.message}</Message>
        </MessageContainer>
      );
    });
  };

  return (
    <Container>
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        {renderMessages()}
      </ScrollView>
      <InputContainer>
        <StyledInput
          placeholder="Message"
          placeholderTextColor="#dedede"
          onChange={(e) => setMessageValue(e.nativeEvent.text)}
          value={messageValue}
        />
        {!messageValue && (
          <IconContainer>
            <Icon name="multitrack-audio" size={20} color="gray" />
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
    </Container>
  );
};

