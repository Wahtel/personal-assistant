import React, { useState } from 'react';
import styled from '@emotion/native';

import PaInputModal from '../../components/Primary/PaInputModal/PaInputModal';
import PaAccordion from '../../components/Primary/PaAccordion/PaAccordion';
import Divider from '../../components/Primary/Divider/Divider';
import PaConfirm from '../../components/Primary/PaConfirm/PaConfirm';

import UserIcon from 'src/Core/Settings/images/UserIcon';
import LockIcon from 'src/Core/Settings/images/LockIcon';
import EnvelopeIcon from 'src/Core/Settings/images/EnvelopeIcon';
import ExitIcon from 'src/Core/Settings/images/ExitIcon';

export default function SettingsScreen(props) {
  const { navigation } = props;
  const [isUserNameModalOpen, setIsUserNameModalOpen] = useState(false);
  const [isSupportCenterModalOpen, setIsSupportCenterModalOpen] = useState(false);
  const [isDeleteAccountConfirmModalOpen, setIsDeleteAccountConfirmModalOpen] = useState(false);

  return (
    <Container>
      <PaInputModal header='User Name' subHeader='Change the user name' inputPlaceholder='Enter your new name here'
                    modalVisible={isUserNameModalOpen} setModalVisible={setIsUserNameModalOpen}
                    onSubmit={() => setIsUserNameModalOpen(false)} />
      <PaInputModal multiline header='Contact support' subHeader='Leave a message to our support center'
                    inputPlaceholder='Enter your ticket message text' modalVisible={isSupportCenterModalOpen}
                    setModalVisible={setIsSupportCenterModalOpen} onSubmit={() => setIsSupportCenterModalOpen(false)} />
      <PaConfirm confirmText='you want to delete a account?'
                 onConfirmPress={() => setIsDeleteAccountConfirmModalOpen(false)}
                 onRejectPress={() => setIsDeleteAccountConfirmModalOpen(false)}
                 modalVisible={isDeleteAccountConfirmModalOpen} setModalVisible={setIsDeleteAccountConfirmModalOpen} />
      <PageTitle>Settings</PageTitle>
      <SettingsContentContainer contentContainerStyle={{
        rowGap: 20
      }}>
        <SettingsBlockContainer>
          <PaAccordion roundedTop hasArrowIcon iconComponent={<UserIcon />}
                       settingsItemTitle='User name'
                       settingsItemValue='Don Norman' onPress={() => setIsUserNameModalOpen(!isUserNameModalOpen)} />
          <Divider width='80%' />
          <PaAccordion hasArrowIcon isDisabled iconComponent={<LockIcon />} settingsItemTitle='Password'
                       settingsItemValue='Change password' />
          <Divider width='80%' />
          <PaAccordion roundedBottom hasArrowIcon isDisabled iconComponent={<EnvelopeIcon />} settingsItemTitle='Email'
                       settingsItemValue='donnorman@gmail.com' />
        </SettingsBlockContainer>

        <SettingsBlockContainer>
          <PaAccordion roundedTop settingsItemTitle='Terms of Use' onPress={() =>
            navigation.navigate('TermsOfUseScreen')
          } />
          <Divider width='95%' />
          <PaAccordion settingsItemTitle='Privacy Policy' />
          <Divider width='95%' />
          <PaAccordion roundedBottom settingsItemTitle='Support center'
                       onPress={() => setIsSupportCenterModalOpen(!isSupportCenterModalOpen)} />
        </SettingsBlockContainer>


        <SettingsBlockContainer>
          <PaAccordion roundedTop roundedBottom hasArrowIcon style={{ width: '100%' }} iconComponent={<ExitIcon />}
                       settingsItemTitle='Delete account'
                       onPress={() => setIsDeleteAccountConfirmModalOpen(!isDeleteAccountConfirmModalOpen)} />
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
