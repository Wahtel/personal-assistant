import React from "react";
import styled from "@emotion/native";

const Container = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  padding: 0 16px;
`;

const ItemWrapper = styled.View`
  flex: 1;
  justify-content: space-between; // This will vertically center the Text inside this View.
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Item = styled.Text`
  font-family: "SF-Pro-Text-Regular";
  font-size: 15px;
  line-height: 22px;
  color: #ffffff;
`;

export const MenuItem = (props) => {
  const { text, Icon, onPress } = props;

  return (
    <Container onPress={onPress}>
      <ItemWrapper>
        <Item>{text}</Item>
        <Icon />
      </ItemWrapper>
    </Container>
  );
};
