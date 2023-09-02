import React, { useState } from "react";
import styled from "@emotion/native";
import { SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import OutsidePressHandler from "react-native-outside-press";
import { PlusIcon } from "./PlusIcon";

const MenuContainer = styled.TouchableOpacity`
  height: 40px;
  display: flex;
  justify-content: center;
  // border: 1px solid pink;
  position: relative;
}
`;

const Menu = styled.View`
  width: 194px;
  min-height: 88px;
  // background-color: red;
  background-color: #191919;
  position: absolute;
  border-radius: 12px;
  top: -100px;
`;

const ItemContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  padding: 11px 16px 11px 16px;
  justify-content: center; // This will vertically center the immediate child.
`;

const TextWrapper = styled.View`
  flex: 1;
  justify-content: center; // This will vertically center the Text inside this View.
  display: flex;
`;

const ItemWrapper = styled.View`
  flex: 1;
  justify-content: space-between; // This will vertically center the Text inside this View.
  display: flex;
  flex-direction: row;
`;

const Item = styled.Text`
  font-family: "SF-Pro-Text-Regular";
  font-size: 15px;
  line-height: 22px;
  // text-align: left;
  color: #ffffff;
`;

const Divider = styled.View`
  height: 1px;
  background-color: #545458;
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  top: 50%;
`;

export const MenuComponent = () => {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };
  
  const openMenu = () => {
    setVisible(true);
  };

  const closeMenu = () => setVisible(false);

  const renderMenu = () => (
    <Menu>
      <Divider />
      <ItemContainer onPress={e => e.preventDefault} activeOpacity={1}>
        <TextWrapper>
          <ItemWrapper>
            <Item>Item 1</Item>
            <PlusIcon />
          </ItemWrapper>
        </TextWrapper>
        <TextWrapper>
          <Item>Item 2</Item>
        </TextWrapper>
      </ItemContainer>
    </Menu>
  );

  return (
    <OutsidePressHandler
      onOutsidePress={closeMenu}
    >
      <SafeAreaView style={{ zIndex: 1 }}>
        <MenuContainer onPress={toggleMenu} activeOpacity={1}>
          {visible && renderMenu()}
          <Icon name="dots-vertical" size={30} color={"white"} />
        </MenuContainer>
      </SafeAreaView>
    </OutsidePressHandler>
  );
};
