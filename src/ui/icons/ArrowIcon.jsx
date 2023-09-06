import React from "react";
import styled from "@emotion/native";
import Svg, { Path, Circle } from "react-native-svg";

const StyledSVG = styled(Svg)``;

export const ArrowIcon = (props) => {
  return (
    <StyledSVG
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      {...props}
    >
      <Circle
        cx="10.4595"
        cy="10.5405"
        r="10.2266"
        transform="rotate(-90 10.4595 10.5405)"
        fill="white"
        fillOpacity="0.1"
      />
      <Path
        d="M9.27262 6.41352L13.0367 10.0954C13.1722 10.226 13.2351 10.3712 13.2351 10.5405C13.2351 10.7098 13.1674 10.8647 13.0367 10.9905L9.27262 14.6675C9.16135 14.7739 9.03071 14.832 8.87105 14.832C8.5469 14.832 8.29531 14.5804 8.29531 14.2611C8.29531 14.1063 8.35821 13.9563 8.46948 13.845L11.8611 10.5453L8.46948 7.23602C8.35821 7.12474 8.29531 6.97959 8.29531 6.81993C8.29531 6.50061 8.5469 6.24902 8.87105 6.24902C9.02588 6.24902 9.16135 6.30708 9.27262 6.41352Z"
        fill="#D5D5D5"
      />
    </StyledSVG>
  );
};
