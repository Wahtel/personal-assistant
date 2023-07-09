import React, { useState } from "react";
import styled from "@emotion/native";
import { SafeAreaView } from "react-native";
import { Menu, Divider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const MenuContainer = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  background-color: #1f1e1e;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
`;

const StyledMenu = styled(Menu)`
  & > div {
    position: relative;
    top: 100px;
    width: 150px;
  }
`;

export const MenuComponent = () => {
  const [visible, setVisible] = useState(true);

  const openMenu = () => {
    setVisible(true);
  };
  const closeMenu = () => setVisible(false);
  return (
    <SafeAreaView style={{ zIndex: 1}}>
      <MenuContainer onPress={openMenu} activeOpacity={1}>
        <StyledMenu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Icon
              name="dots-horizontal"
              size={30}
              color={"white"}
            />
          }
        >
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </StyledMenu>
      </MenuContainer>
    </SafeAreaView>
  );
};
