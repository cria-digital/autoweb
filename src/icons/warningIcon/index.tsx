import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const WarningIcon = (props: SvgProps | any) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M22.187 20.186a2 2 0 0 1-2 2h-.374a2 2 0 0 1-2-2v-9.12a2 2 0 0 1 2-2h.374a2 2 0 0 1 2 2v9.12Zm-4.374 8.374a2 2 0 0 1 2-2h.374a2 2 0 0 1 2 2v.373a2 2 0 0 1-2 2h-.374a2 2 0 0 1-2-2v-.373ZM31.085 3.249a10 10 0 0 0-7.07-2.93h-8.03a10 10 0 0 0-7.07 2.93L3.249 8.915a10 10 0 0 0-2.929 7.07v8.029a10 10 0 0 0 2.929 7.071l5.666 5.666a10 10 0 0 0 7.07 2.929h8.03a10 10 0 0 0 7.07-2.93l5.666-5.665a10 10 0 0 0 2.93-7.071v-8.028a10 10 0 0 0-2.93-7.071l-5.666-5.666Z"
      fill={props.color ?? "#F89147"}
    />
  </Svg>
);

export default WarningIcon;
