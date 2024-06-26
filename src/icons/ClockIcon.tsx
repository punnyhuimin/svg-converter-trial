// template: templates/template.ts
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const SvgClockIcon = (props: SvgIconProps) => {
  return <SvgIcon viewBox="0 0 30 30" {...props}><path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,16H7.995 C7.445,16,7,15.555,7,15.005v-0.011C7,14.445,7.445,14,7.995,14H14V5.995C14,5.445,14.445,5,14.995,5h0.011 C15.555,5,16,5.445,16,5.995V16z" /></SvgIcon>;
};

export default SvgClockIcon;