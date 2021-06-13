import React from "react";
import styles from "./styles.module.css";
import ILoaderProps from "./types";

const Loader = (props: ILoaderProps) => {
  const { isLoading, children, isAbsolute } = props;

  if (isLoading)
    return (
      <div className={`${styles.loader} ${isAbsolute && styles.absolute}`} />
    );

  return <>{children}</>;
};

export { Loader };
