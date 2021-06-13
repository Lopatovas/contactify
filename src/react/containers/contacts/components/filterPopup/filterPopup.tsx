import React from "react";
import { Checkbox } from "../../../../components";
import styles from "./styles.module.css";
import { IFilterPopupProps, IFilterableFields } from "./types";

const FilterPopup = (props: IFilterPopupProps) => {
  const { activeFields, onValueChange } = props;

  const toggleField = (value: keyof IFilterableFields) => {
    const result = { ...activeFields, [value]: !activeFields[value] };
    onValueChange(result);
  };

  return (
    <div className={styles.filterModal}>
      {Object.keys(activeFields).map((field) => (
        <Checkbox
          isChecked={activeFields[field as keyof IFilterableFields]}
          id={`${field}-checkbox`}
          key={`${field}-checkbox`}
          setIsChecked={() => toggleField(field as keyof IFilterableFields)}
          label={<span className={styles.filterModalLabel}>{field}</span>}
        />
      ))}
    </div>
  );
};

export { FilterPopup };
