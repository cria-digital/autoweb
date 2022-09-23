import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const EqualIcon = (props: SvgProps | any) => (
  <Svg
    width={6}
    height={6}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path fill="#11111D" d="M0 0h6v2H0zM0 4h6v2H0z" />
  </Svg>
);

export default EqualIcon;
