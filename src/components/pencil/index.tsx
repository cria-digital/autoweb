import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

const PencilIcon = (props: SvgProps | any) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      clipPath="url(#a)"
      stroke="#E8023F"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M5.333 26.666h5.334l14-14a3.771 3.771 0 1 0-5.334-5.333l-14 14v5.333ZM18 8.666l5.333 5.333" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default PencilIcon;
