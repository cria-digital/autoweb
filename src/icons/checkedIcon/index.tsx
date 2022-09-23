import * as React from "react";
import Svg, {
  SvgProps,
  Circle,
  G,
  Path,
  Defs,
  ClipPath,
} from "react-native-svg";

const CheckedIcon = (props: SvgProps | any) => (
  <Svg
    width={56}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={28} cy={28} r={23.333} fill={props.color ?? "#0AB20C"} />
    <G clipPath="url(#a)">
      <Path
        d="m24.258 36.358-7.583-7.583a1.167 1.167 0 0 1 0-1.65l1.65-1.65a1.167 1.167 0 0 1 1.65 0l5.108 5.108 10.942-10.941a1.167 1.167 0 0 1 1.65 0l1.65 1.65a1.167 1.167 0 0 1 0 1.65L25.908 36.357a1.167 1.167 0 0 1-1.65 0Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(16.333 16.334)"
          d="M0 0h23.333v23.333H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CheckedIcon;
