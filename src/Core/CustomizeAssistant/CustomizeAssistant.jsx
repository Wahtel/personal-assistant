import React, { useState } from 'react';
import styled from '@emotion/native';
import { LayoutAnimation } from 'react-native';

import PaAccordion from '../../components/Primary/PaAccordion/PaAccordion'
  ;
import EnvelopeIcon from 'src/Core/Settings/images/EnvelopeIcon';

const subItems = [{ id: 1, value: 'Item 1', isSelected: false }, { id: 2, type: 'separator' }, {
  id: 3,
  value: 'Item 2',
  isSelected: false
}, { id: 4, type: 'separator' }, {
  id: 5,
  value: 'Item 3',
  isSelected: true
}];

export default function CustomizeAssistant() {
  const [isVoiceSettingsOpen, setIsVoiceSettingsOpen] = useState(false);

  function toggleOpen() {
    setIsVoiceSettingsOpen(isVoiceSettingsOpen => !isVoiceSettingsOpen);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  return (
    <Container>
      <PageTitle>Customize chat</PageTitle>
      <CustomizeAssistantContentContainer>
        <SettingsBlockContainer>
          <PaAccordion roundedTop roundedBottom hasArrowIcon hasSub iconComponent={<EnvelopeIcon />}
                       settingsItemTitle='Voice'
                       settingsItemValue='Sandra' iconContainerBackgroundColor='red' subItems={subItems}
                       isSubOpen={isVoiceSettingsOpen}
                       onPress={toggleOpen} />
        </SettingsBlockContainer>
      </CustomizeAssistantContentContainer>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: #0a0c0b;
`;

const PageTitle = styled.Text`
  width: 90%;
  margin: 20px 0;
  font-size: 34px;
  font-family: "SF-Pro-Text-Bold";
  font-weight: 600;
  color: #ffffff;
`;

const CustomizeAssistantContentContainer = styled.ScrollView`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SettingsBlockContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: #18181B;
  border-radius: 10px;
`;

