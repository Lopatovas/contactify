import React from "react";
import ICheckboxProps from "./types";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Checkbox = (props: ICheckboxProps) => {
  const { label, id, icon, isChecked, setIsChecked } = props;

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.container}>
        {label}
        <input
          type="checkbox"
          id={id}
          defaultChecked={isChecked}
          onClick={setIsChecked}
        />
        {icon && <FontAwesomeIcon icon={icon} className={styles.iconSpacing} />}
        <span className={styles.checkmark} />
      </label>
    </div>
  );
};

export { Checkbox };
