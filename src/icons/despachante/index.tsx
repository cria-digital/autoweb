import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const DespachanteIcon = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19.6 16.858V3.143A2.743 2.743 0 0 0 16.857.4H3.143A2.743 2.743 0 0 0 .4 3.143v13.715A2.743 2.743 0 0 0 3.143 19.6h13.714a2.743 2.743 0 0 0 2.743-2.742ZM4.377 3.829h5.507a.823.823 0 1 1 0 1.646H4.377a.823.823 0 1 1 0-1.646Zm0 3.566h5.486a.823.823 0 1 1 0 1.645H4.377a.823.823 0 1 1 0-1.645Zm11.246 8.777H4.377a.823.823 0 1 1 0-1.646h11.246a.823.823 0 1 1 0 1.646Zm0-3.566H4.377a.823.823 0 1 1 0-1.646h11.246a.823.823 0 1 1 0 1.646Z"
      fill="#fff"
    />
  </Svg>
);

export default DespachanteIcon;
