import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const VehicleIcon = (props: SvgProps | any) => (
  <Svg
    width={20}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19.53 4.375h-2.338l-.65-1.625A4.353 4.353 0 0 0 12.48 0H7.52c-1.8 0-3.394 1.08-4.063 2.75l-.65 1.625H.47a.469.469 0 0 0-.455.582l.235.938c.052.209.24.355.454.355h.784a2.483 2.483 0 0 0-.862 1.875V10c0 .63.24 1.198.625 1.638v2.112c0 .69.56 1.25 1.25 1.25h1.25C4.44 15 5 14.44 5 13.75V12.5h10v1.25c0 .69.56 1.25 1.25 1.25h1.25c.69 0 1.25-.56 1.25-1.25v-2.112c.384-.44.625-1.008.625-1.638V8.125c0-.75-.338-1.417-.862-1.875h.784a.468.468 0 0 0 .454-.355l.235-.938a.469.469 0 0 0-.455-.582ZM5.779 3.679A1.875 1.875 0 0 1 7.52 2.5h4.961c.767 0 1.457.467 1.741 1.179L15 5.625H5l.778-1.946ZM3.75 9.992c-.75 0-1.25-.498-1.25-1.246S3 7.5 3.75 7.5s1.875 1.121 1.875 1.87c0 .747-1.125.622-1.875.622Zm12.5 0c-.75 0-1.875.125-1.875-.623S15.5 7.5 16.25 7.5s1.25.498 1.25 1.246-.5 1.246-1.25 1.246Z"
      fill={props.color ?? "#fff"}
    />
  </Svg>
);

export default VehicleIcon;
