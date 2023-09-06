import React from "react";
import styled from "@emotion/native";

const StyledImage = styled.Image`
  width: 28px;
  height: 28px;
`;

// we need to build all logos as svg components

const images = {
  facebook: {
    uri: require('./images/facebook-logo.png'),
  },
  instagram: {
    uri: require('./images/instagram-logo.png'),
  },
  x: {
    uri: require('./images/x-logo.png'),
  },
  tiktok: {
    uri: require('./images/tik-tok-logo.png'),
  },
};

export const ImageRenderer = ({ name }) => {
  const image = images[name];
  return <StyledImage source={image.uri} />;
};
