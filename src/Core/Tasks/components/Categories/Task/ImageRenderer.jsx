import React from "react";
import styled from "@emotion/native";

const StyledImage = styled.Image`
  width: 28px;
  height: 28px;
`;

const images = {
  facebook: {
    uri: require('./images/facebookLogo.png'),
  },
};

export const ImageRenderer = ({ name }) => {
  const image = images[name];
  return <StyledImage source={image.uri} />;
};
