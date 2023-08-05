import React, { useState, Fragment, useRef, useEffect } from "react";
import styled from "@emotion/native";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import { Audio } from "expo-av";
import { Keyboard } from "react-native";
import { Input, RecorderView } from "./components";

const StyledKeyboardAvoidingView = styled(KeyboardAvoidingView)`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

const StyledText = styled.Text`
  text-align: center;
  color: #fff;
`;

export const SendMessage = (props) => {
  const { sendFile, fetching } = props;
  const recordingRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioURI, setAudioURI] = useState(null);

  useEffect(() => {
    return async () => {
      if (recordingRef.current) {
        await recordingRef.current.stopAndUnloadAsync();
        recordingRef.current = null;
      }
    };
  }, []);

  const renderButton = () => (
    <Fragment>
      {audioURI && <StyledText>Audio URI: {audioURI}</StyledText>}
      {/* <Button
        title={isRecording ? "Stop Recording" : "Start Recording"}
        onPress={isRecording ? stopRecording : startRecording}
      /> */}
    </Fragment>
  );

  const startRecording = async () => {
    Keyboard.dismiss();
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const newRecording = new Audio.Recording();
      await newRecording.prepareToRecordAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      await newRecording.startAsync();

      recordingRef.current = newRecording;
      // setRecording(newRecording);
      setIsRecording(true);
    } catch (error) {
      console.log("Error starting recording:", error);
    }
  };

  const stopRecording = async () => {
    try {
      const recording = recordingRef.current;
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setAudioURI(uri);
      setIsRecording(false);
      // setRecording(null);
      sendFile(uri);
      recordingRef.current = null;
    } catch (error) {
      console.log("Error stopping recording:", error);
    }
  };

  return (
    <Fragment>
      <StyledKeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={10}
      >
        {/* {renderButton()} */}
        <Input
          isRecording={isRecording}
          startRecording={startRecording}
          stopRecording={stopRecording}
          fetching={fetching}
        />
      </StyledKeyboardAvoidingView>
      {isRecording && <RecorderView stopRecording={stopRecording} />}
    </Fragment>
  );
};
