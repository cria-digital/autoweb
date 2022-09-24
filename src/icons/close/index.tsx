import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

const CloseIcon = (props: SvgProps | any) => (
  <Svg
    width={56}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={28} cy={28} r={23.333} fill="#E8023F" />
    <Path
      d="M37.544 22.699a3 3 0 0 0-4.243-4.244L28 23.755l-5.301-5.3a3 3 0 1 0-4.244 4.244l5.3 5.3-5.3 5.302a3 3 0 0 0 4.244 4.243l5.3-5.3 5.302 5.3a3.001 3.001 0 0 0 4.243-4.243L32.245 28l5.3-5.301Z"
      fill="#fff"
    />
  </Svg>
);

export default CloseIcon;
