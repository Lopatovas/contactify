import { faEye } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Button, Checkbox, Dropdown, Input } from "../../../../components";
import styles from "./styles.module.css";
import IFilterSectionProps from "./types";

const FilterSection = (props: IFilterSectionProps) => {
  const { dropdownOptions, onFilterCallback } = props;

  const [nameQuery, setNameQuery] = useState<string | undefined>(undefined);
  const [cityQuery, setCityQuery] = useState<string | undefined>(undefined);
  const [isActiveQuerry, setIsActiveQuerry] =
    useState<boolean | undefined>(undefined);

  return (
    <div className={styles.container}>
      <Input
        id="nameFilter"
        type="text"
        onChange={(e) => setNameQuery(e.target.value)}
        placeholder="Name"
      />
      <Dropdown
        id="cityDropdown"
        onSelected={(e) => setCityQuery(e?.value)}
        options={dropdownOptions}
      />
      <Checkbox
        id="isActiveCheckbox"
        label="Show active"
        icon={faEye}
        isChecked={isActiveQuerry || false}
        setIsChecked={() => setIsActiveQuerry(!isActiveQuerry)}
      />
      <div className={styles.buttonWrapper}>
        <Button
          onPress={() =>
            onFilterCallback({ nameQuery, cityQuery, isActive: isActiveQuerry })
          }
        >
          FILTER
        </Button>
      </div>
    </div>
  );
};

export { FilterSection };
