import React from "react";
import styled from "@emotion/native";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #0a0c0b;
`;

const Text = styled.Text`
  color: #ffffff;
`;

export const HistoryComponent = () => {
  return (
    <Container>
      <Text>HistoryComponent</Text>
    </Container>
  );
};
