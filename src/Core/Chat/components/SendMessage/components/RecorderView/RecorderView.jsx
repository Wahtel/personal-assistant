import React, { useEffect, useState } from "react";
import styled from "@emotion/native";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Container = styled.View`
  background-color: #3f37c9;
  height: 300px;
  margin-top: 10px;
`;

const TimerText = styled.Text`
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  margin-top: 15px;
  margin-left: 15px;
`;

const StopRecordingView = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StopRecordingText = styled.Text`
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  margin-left: 7px;
`;

export const RecorderView = props => {
  const [seconds, setSeconds] = useState(0);
  const { stopRecording } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const displaySecondsFormatted =
    displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds;

  return (
    <Container>
      <TimerText>
        {displayMinutes}:{displaySecondsFormatted}
      </TimerText>
      <StopRecordingView onPress={stopRecording} activeOpacity={1}>
        <MaterialCommunityIcon
          name="stop-circle-outline"
          size={25}
          color="#ffffff"
        />
        <StopRecordingText>Tap to stop recording</StopRecordingText>
      </StopRecordingView>
    </Container>
  );
};
