import React from "react";
import Select, { StylesConfig } from "react-select";
import { IDropdownProps, IDropdownOption } from "./types";
import styles from "./styles.module.css";

const styleConfig: StylesConfig<IDropdownOption, false> = {
  container: (provided) => ({
    ...provided,
    outline: "none",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "var(--white)",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.isFocused ? "var(--accent)" : "var(--white)",
    padding: "0",
    ":hover": {
      color: "var(--accent)",
    },
  }),
  indicatorSeparator: () => ({}),
  singleValue: (provided) => ({
    ...provided,
    color: "var(--white)",
  }),
  input: (provided) => ({
    ...provided,
    color: "var(--white)",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0",
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    border: "0",
    borderRadius: "0",
    borderBottom: state.isFocused
      ? "1px solid var(--accent)"
      : "1px solid var(--white)",
    color: "var(--white)",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.3s linear",
    boxShadow: "none",
    ":hover": {
      borderBottom: "1px solid var(--accent)",
      cursor: "pointer",
    },
  }),
};

const Dropdown = (props: IDropdownProps) => {
  const { options, selectedOption, onSelected } = props;

  return (
    <div className={styles.container}>
      <Select
        styles={styleConfig}
        value={selectedOption}
        onChange={onSelected}
        options={options}
        placeholder="City"
      />
    </div>
  );
};

export { Dropdown };
