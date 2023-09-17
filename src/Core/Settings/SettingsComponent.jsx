import React, { useState } from 'react';
import styled from '@emotion/native';

import SettingsEditModal from './components/SettingsEditModal/SettingsEditModal';
import SettingsItem from './components/SettingsItem/SettingsItem';
import Divider from './components/Divider/Divider';

import UserIcon from 'src/Core/Settings/images/UserIcon';
import LockIcon from 'src/Core/Settings/images/LockIcon';
import EnvelopeIcon from 'src/Core/Settings/images/EnvelopeIcon';
import ExitIcon from 'src/Core/Settings/images/ExitIcon';

export const SettingsComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <SettingsEditModal modalVisible={modalVisible} setModalVisible={setModalVisible} onSubmit={() => setModalVisible(false)}/>
      <PageTitle>Settings</PageTitle>
      <SettingsContentContainer contentContainerStyle={{
        rowGap: 20
      }}>
        <SettingsBlockContainer onPress={() => setModalVisible(!modalVisible)}>
          <SettingsItem onPress={() => setModalVisible(!modalVisible)} hasArrowIcon iconComponent={<UserIcon />}
                        settingsItemTitle='User name'
                        settingsItemValue='Don Norman' />
          <Divider width='80%' />
          <SettingsItem hasArrowIcon isDisabled iconComponent={<LockIcon />} settingsItemTitle='Password'
                        settingsItemValue='Change password' />
          <Divider width='80%' />
          <SettingsItem hasArrowIcon isDisabled iconComponent={<EnvelopeIcon />} settingsItemTitle='Email'
                        settingsItemValue='donnorman@gmail.com' />
        </SettingsBlockContainer>

        <SettingsBlockContainer>
          <SettingsItem settingsItemTitle='Terms of Use' />
          <Divider width='95%' />
          <SettingsItem settingsItemTitle='Privacy Policy' />
          <Divider width='95%' />
          <SettingsItem settingsItemTitle='Support center' />
        </SettingsBlockContainer>


        <SettingsBlockContainer>
          <SettingsItem hasArrowIcon style={{ width: '100%' }} iconComponent={<ExitIcon />}
                        settingsItemTitle='Delete account' />
        </SettingsBlockContainer>
      </SettingsContentContainer>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: #0a0c0b;
`;

const SettingsContentContainer = styled.ScrollView`
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

const SettingsBlockContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: #18181B;
  border-radius: 10px;
`;
