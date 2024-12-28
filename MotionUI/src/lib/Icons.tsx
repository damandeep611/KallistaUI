import React from "react";
import ReactLogoSvg from "../assets/icons/reactsvg.svg";

interface ReactIconProps {
  width?: string;
  height?: string;
  color?: string;
}

const ReactIcon: React.FC<ReactIconProps> = ({ width, height, color }) => {
  return <ReactLogoSvg style={{ width, height, color }} />;
};

export default ReactIcon;
