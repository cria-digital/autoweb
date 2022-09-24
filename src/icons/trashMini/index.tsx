import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const TrashMiniIcon = (props: SvgProps | any) => (
  <Svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.19 7.334a1.31 1.31 0 0 0-1.31 1.31h5.239a1.31 1.31 0 0 0-1.31-1.31H15.19Zm0-2.62a3.929 3.929 0 0 0-3.928 3.93H6.024a1.31 1.31 0 1 0 0 2.618h1.31v13.096a3.928 3.928 0 0 0 3.928 3.928h10.476a3.929 3.929 0 0 0 3.929-3.928V11.262h1.31a1.31 1.31 0 0 0 0-2.619h-5.239a3.929 3.929 0 0 0-3.928-3.928h-2.62Zm0 10.477a1.31 1.31 0 1 0-2.619 0v6.548a1.31 1.31 0 1 0 2.62 0V15.19Zm5.239 0a1.31 1.31 0 1 0-2.62 0v6.548a1.31 1.31 0 1 0 2.62 0V15.19Z"
      fill="#F50254"
    />
  </Svg>
);

export default TrashMiniIcon;
