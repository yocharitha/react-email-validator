import React from "react";
import classNames from "./Sample.module.scss";

function SampleComponent({ children }) {
  return <div className={classNames.wrapper}>{children}</div>;
}

export default SampleComponent;
