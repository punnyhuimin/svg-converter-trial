// template: streamline-solid
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { memo } from "react";

const SvgClockIcon = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      {...other}
    >
      <path d="M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm1 13H7.995A.994.994 0 0 1 7 15.005v-.011c0-.549.445-.994.995-.994H14V5.995c0-.55.445-.995.995-.995h.011c.549 0 .994.445.994.995V16z" />
    </SvgIcon>
  );
};

export default SvgClockIcon;
