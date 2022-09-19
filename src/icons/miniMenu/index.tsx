import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const MiniMenuIcon = (props: SvgProps | any) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 2.143A2.143 2.143 0 0 1 2.143 0h4.286A2.143 2.143 0 0 1 8.57 2.143v4.286A2.143 2.143 0 0 1 6.43 8.57H2.143A2.143 2.143 0 0 1 0 6.43V2.143Zm11.429 0A2.143 2.143 0 0 1 13.57 0h4.286A2.143 2.143 0 0 1 20 2.143v4.286a2.143 2.143 0 0 1-2.143 2.142h-4.286A2.143 2.143 0 0 1 11.43 6.43V2.143ZM0 13.57a2.143 2.143 0 0 1 2.143-2.142h4.286A2.143 2.143 0 0 1 8.57 13.57v4.286A2.143 2.143 0 0 1 6.43 20H2.143A2.143 2.143 0 0 1 0 17.857v-4.286Zm11.429 0a2.143 2.143 0 0 1 2.142-2.142h4.286A2.143 2.143 0 0 1 20 13.57v4.286A2.143 2.143 0 0 1 17.857 20h-4.286a2.143 2.143 0 0 1-2.142-2.143v-4.286Z"
      fill={props.color ?? "#fff"}
    />
  </Svg>
);

export default MiniMenuIcon;
