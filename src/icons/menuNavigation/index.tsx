import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

const MenuNavigationIcon = (props: SvgProps | any) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      clipPath="url(#a)"
      stroke={props.color ?? "#fff"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M4 6h16M4 12h16M4 18h16" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color ?? "#fff"} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MenuNavigationIcon;
