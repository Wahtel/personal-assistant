import React, { useState } from "react";
import styled from "@emotion/native";
import { SafeAreaView } from "react-native";
import { Menu, Divider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const MenuContainer = styled.TouchableOpacity`
  height: 40px;
  display: flex;
  justify-content: center;
}
`;

const StyledMenu = styled(Menu)`
& > div {
    // background-color: #1f1e1e;
    position: relative;
    width: 150px;
    padding-bottom: 40px;
    // border: 1px solid pink;
  }
`;

export const MenuComponent = () => {
  const [visible, setVisible] = useState(false);

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
          anchorPosition="top"
          anchor={
            <Icon
              name="dots-vertical"
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
