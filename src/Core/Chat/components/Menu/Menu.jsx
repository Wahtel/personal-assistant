import React, { useState } from "react";
import styled from "@emotion/native";
import { SafeAreaView, Animated } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import OutsidePressHandler from "react-native-outside-press";
import { PlusIcon } from "src/ui/icons/PlusIcon";
import { PencilIcon } from 'src/ui/icons/PencilIcon';
import { MenuItem } from "./MenuItem";

const MenuContainer = styled.TouchableOpacity`
  height: 40px;
  display: flex;
  justify-content: center;
  // border: 1px solid pink;
  position: relative;
}
`;

const Menu = styled(Animated.View)`
  width: 194px;
  min-height: 88px;
  background-color: #191919;
  position: absolute;
  border-radius: 12px;
  top: -100px;
`;

const Divider = styled.View`
  height: 1px;
  background-color: #545458;
  // position: absolute;
  width: 100%;
  // left: 0;
  // right: 0;
  // top: 50%;
`;

export const MenuComponent = (props) => {
  const { navigation } = props;
  const [visible, setVisible] = useState(false);
  const [menuAnimation] = useState(new Animated.Value(0));
  const anchroColor = visible ? "#0C7BEB" : "#FFFFFF";

  const openMenu = () => {
    Animated.timing(menuAnimation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(menuAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setVisible(false)); // Hide the menu entirely after animation
  };

  const toggleMenu = () => {
    if (visible) {
      closeMenu();
    } else {
      setVisible(true); // Show the menu for the animation
      openMenu();
    }
  };

  const renderMenu = () => (
    <Menu
      style={{
        opacity: menuAnimation,
        transform: [
          {
            translateY: menuAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [30, 0], // adjust these numbers for desired animation effect
            }),
          },
        ],
      }}
    >
      <MenuItem text="Customize chat" Icon={PencilIcon} onPress={() => navigation.navigate('CustomizeAssistantScreen')}/>
      <Divider />
      <MenuItem text="New chat" Icon={PlusIcon} />
    </Menu>
  );

  return (
    <OutsidePressHandler onOutsidePress={closeMenu}>
      <SafeAreaView style={{ zIndex: 1 }}>
        <MenuContainer onPress={toggleMenu} activeOpacity={1}>
          {visible && renderMenu()}
          <Icon name="dots-vertical" size={30} color={anchroColor} />
        </MenuContainer>
      </SafeAreaView>
    </OutsidePressHandler>
  );
};
