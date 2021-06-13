import React from "react";
import IButtonProps from "./types";
import styles from "./styles.module.css";

const Button = (props: IButtonProps) => {
  const { onPress, children } = props;

  return (
    <button onClick={onPress} type="button" className={styles.btn}>
      {children}
    </button>
  );
};

export { Button };
