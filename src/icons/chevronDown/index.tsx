import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const ChevronDownIcon = (props: SvgProps | any) => (
  <Svg
    width={16}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.388 0h11.224c.443 0 .878.125 1.253.364.375.238.675.578.867.982a2.85 2.85 0 0 1-.347 2.974l-5.612 6.863A2.347 2.347 0 0 1 8 12a2.328 2.328 0 0 1-1.773-.817L.615 4.32a2.84 2.84 0 0 1-.347-2.974C.46.942.76.602 1.135.364A2.33 2.33 0 0 1 2.388 0Z"
      fill={props.color ?? "#11111D"}
    />
  </Svg>
);

export default ChevronDownIcon;
