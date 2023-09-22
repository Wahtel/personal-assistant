import React from 'react';
import styled from '@emotion/native';
import SettingsArrowIcon from './images/SettingsArrowIcon';
import AccordionSubItem from './components/AccordionSubItem/AccordionSubItem';

export default function PaAccordion(props) {
  const {
    hasArrowIcon,
    iconComponent,
    settingsItemTitle,
    settingsItemValue,
    style,
    roundedBottom,
    roundedTop,
    isDisabled,
    onPress,
    hasSub = false,
    subItems = [],
    isSubOpen
  } = props;
  return (
    <AccordionContainer>
      <SettingsItemContainer
        style={{
          opacity: isDisabled ? 0.5 : 1,
          borderTopLeftRadius: roundedTop ? 10 : 0,
          borderTopRightRadius: roundedTop ? 10 : 0,
          borderBottomLeftRadius: roundedBottom ? 10 : 0,
          borderBottomRightRadius: roundedBottom ? 10 : 0,
          backgroundColor: hasSub ? '#242427' : '#18181B'
        }}
        onPress={onPress}>
        {iconComponent ? <SettingsIconContainer>
          {iconComponent}
        </SettingsIconContainer> : null}
        <SettingsItemContentContainer>
          <SettingsItemTitle style={style} numberOfLines={1}
                             ellipsizeMode='tail'>{settingsItemTitle}</SettingsItemTitle>
          <SettingsItemValue numberOfLines={1} ellipsizeMode='tail'>{settingsItemValue}</SettingsItemValue>
        </SettingsItemContentContainer>
        {hasArrowIcon ? <SettingsArrowIcon /> : null}

      </SettingsItemContainer>
      {hasSub && isSubOpen ? subItems.map((item, i) => <AccordionSubItem title={item.value} isSelected={item.isSelected}
                                                                         isLastSubItem={i === subItems.length - 1} />) : null}
    </AccordionContainer>
  );
};

const AccordionContainer = styled.View`
  width: 100%;
`;

const SettingsItemContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  background-color: #18181B;
`;

const SettingsIconContainer = styled.View`
  height: 30px;
  width: 30px;
  background-color: #323232;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SettingsItemContentContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

const SettingsItemTitle = styled.Text`
  width: 40%;
  font-size: 17px;
  font-family: "SF-Pro-Text-Regular";
  color: #ffffff;
`;

const SettingsItemValue = styled.Text`
  flex: 1;
  font-size: 17px;
  font-family: "SF-Pro-Text-Regular";
  color: #EBEBF5;
  opacity: 0.6;
  text-align: right;
`;
