import React from "react";
import styled from "@emotion/native";
import { XLogo, TikTokLogo, FBLogo, IGLogo } from "./logos";

const StyledImage = styled.Image`
  width: 28px;
  height: 28px;
`;

// we need to build all logos as svg components

const logos = {
  facebook: FBLogo,
  instagram: IGLogo,
  x: XLogo,
  tiktok: TikTokLogo,
};


export const LogoRenderer = ({ name }) => {
  const Logo = logos[name];
  // console.log(images, "images");
  // console.log(name, "name");
  // console.log(Logo, "Logo");
  return <Logo />;
};
