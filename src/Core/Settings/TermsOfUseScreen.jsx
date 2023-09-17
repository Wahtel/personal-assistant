import React from 'react';
import styled from '@emotion/native';
import { Pressable, Text } from 'react-native';


export default function TermsOfUseScreen(props) {
  const { navigation } = props;

  return (
    <Container>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={{ color: 'white'}}>Yes</Text>
      </Pressable>
      <PageTitle>Settings</PageTitle>
      <TermsOfUseScreenContainer contentContainerStyle={{
        rowGap: 20
      }}>
        <PageTitle>Settings</PageTitle>
      </TermsOfUseScreenContainer>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: #0a0c0b;
`;

const TermsOfUseScreenContainer = styled.ScrollView`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PageTitle = styled.Text`
  width: 90%;
  margin: 20px 0;
  font-size: 34px;
  font-family: "SF-Pro-Text-Bold";
  font-weight: 600;
  color: #ffffff;
`;
