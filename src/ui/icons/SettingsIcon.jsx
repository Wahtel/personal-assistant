import React from "react";
import Svg, { Path } from "react-native-svg";

export const SettingsIcon = ({ color }) => {
  return (
    <Svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
    >
      <Path
        d="M13.1056 23.5488H14.7583C15.3002 23.5488 15.7066 23.2236 15.8241 22.6908L16.2756 20.7851C16.5827 20.6767 16.8717 20.5593 17.1427 20.4329L18.8135 21.4625C19.256 21.7425 19.7889 21.6973 20.1592 21.327L21.3243 20.1619C21.6946 19.7916 21.7487 19.2407 21.4507 18.7891L20.4301 17.1364C20.5566 16.8654 20.674 16.5764 20.7643 16.2964L22.688 15.8449C23.2209 15.7275 23.537 15.321 23.537 14.7791V13.1535C23.537 12.6206 23.2209 12.2052 22.688 12.0877L20.7824 11.6271C20.683 11.311 20.5566 11.0311 20.4482 10.7872L21.4688 9.0983C21.7578 8.6377 21.7216 8.1229 21.3333 7.74357L20.1592 6.5785C19.7799 6.23531 19.3012 6.17208 18.8406 6.42497L17.1427 7.47263C16.8807 7.34618 16.5917 7.22878 16.2847 7.1204L15.8241 5.18765C15.7066 4.65479 15.3002 4.32965 14.7583 4.32965H13.1056C12.5546 4.32965 12.1482 4.65479 12.0308 5.18765L11.5792 7.11137C11.2722 7.21071 10.9741 7.32812 10.7032 7.4636L9.01427 6.42497C8.55366 6.17208 8.08402 6.22627 7.69567 6.5785L6.52157 7.74357C6.13321 8.1229 6.09708 8.6377 6.38609 9.0983L7.40666 10.7872C7.29828 11.0311 7.18087 11.311 7.07249 11.6271L5.16684 12.0877C4.63397 12.2052 4.31787 12.6206 4.31787 13.1535V14.7791C4.31787 15.321 4.63397 15.7275 5.16684 15.8449L7.09055 16.2964C7.18087 16.5764 7.29828 16.8654 7.42472 17.1364L6.40416 18.7891C6.10612 19.2407 6.16031 19.7916 6.53963 20.1619L7.69567 21.327C8.06596 21.6973 8.59882 21.7425 9.0504 21.4625L10.7122 20.4329C10.9831 20.5593 11.2722 20.6767 11.5792 20.7851L12.0308 22.6908C12.1482 23.2236 12.5546 23.5488 13.1056 23.5488ZM13.9274 17.1002C12.1934 17.1002 10.7754 15.6733 10.7754 13.9302C10.7754 12.2052 12.1934 10.7872 13.9274 10.7872C15.6705 10.7872 17.0885 12.2052 17.0885 13.9302C17.0885 15.6733 15.6705 17.1002 13.9274 17.1002Z"
        fill={color}
      />
    </Svg>
  );
};
