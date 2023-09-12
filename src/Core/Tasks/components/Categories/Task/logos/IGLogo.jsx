import React from "react";
import styled from "@emotion/native";
import IGImage from "./instagram-logo.png";
import Svg, { Path } from "react-native-svg";

const Container = styled.View`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

const StyledImage = styled.Image`
  width: 28px;
  height: 28px;
`;

export const IGLogo = () => {
  return <StyledImage source={IGImage} />;
};
