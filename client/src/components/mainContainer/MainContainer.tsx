import React, { ReactNode } from "react";
import "./mainContainer.scss";

interface Props {
  children: ReactNode;
}

const MainContainer = ({ children }: Props) => {
  return <div className="mainContainer">{children}</div>;
};

export default MainContainer;
