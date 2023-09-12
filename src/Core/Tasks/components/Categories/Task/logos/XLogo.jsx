import React from "react";
import styled from "@emotion/native";
import Svg, { Path } from "react-native-svg";

const Conatiner = styled.View`
  width: 25px;
  height: 25px;
  display: flex;
  background-color: #000000;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

export const XLogo = () => {
  return (
    <Conatiner>
      <Svg
        width="15"
        height="15"
        viewBox="0 0 1200 1227"
        fill="none"
      >
        <Path
          d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
          fill="white"
        />
      </Svg>
    </Conatiner>
  );
};
