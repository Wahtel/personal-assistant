import React from 'react';
import styled from '@emotion/native';

import SelectedIcon from './images/SelectedIcon';


export default function AccordionSubItem(props) {
  const { title, isSelected, isLastSubItem } = props;

  return (
    <SubItemContainer style={{
        borderBottomLeftRadius: isLastSubItem ? 10 : 0,
        borderBottomRightRadius: isLastSubItem ? 10 : 0
      }}>
      <SubItemContentContainer >
        <SubItemTitle>{title}</SubItemTitle>
        {isSelected ? <SelectedIcon /> : null}
      </SubItemContentContainer>
    </SubItemContainer>
  );
};
const SubItemContainer = styled.View`
  width: 100%;
  padding: 10px 18px;
  background-color: #18181B;
`;

const SubItemContentContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;


const SubItemTitle = styled.Text`
  font-size: 17px;
  font-family: "SF-Pro-Text-Regular";
  color: #ffffff;
`;







