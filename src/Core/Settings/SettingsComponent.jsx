import React from "react";
import styled from "@emotion/native";
import { View, Text } from "react-native";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #0a0c0b;
`;

export const SettingsComponent = () => {
  return (
    <Container>
      <Text>SettingsComponent</Text>
    </Container>
  );
};
