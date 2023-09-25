import React from 'react';
import styled from '@emotion/native';
import { Text } from 'react-native';

export default function CustomizeAssistant() {
  return (
    <Container>
      <Text>CustomizeAssistant</Text>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: #0a0c0b;
`;