import React, { useState } from "react";
import styles from "./styles.module.css";
import ITableSectionProps from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faList,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { formatName } from "../../utils/nameFormatter";
import { FilterPopup } from "../filterPopup";

const TableSection = (props: ITableSectionProps) => {
  const { data, onCellPress, activeContactId, onSortPress, isAscending } =
    props;

  const [activeFields, setActiveFields] = useState({
    Name: true,
    City: true,
    Email: true,
    Phone: true,
  }
  );
  const [isFilterPopupActive, setIsFilterPopupActive] = useState(false);

  return (
    <>
    <table
      className={`${styles.table} ${activeContactId && styles.tableActive}`}
    >
      <thead className={styles.tableHeader}>
        <tr>
          {activeFields.Name && <th onClick={onSortPress}>
            Name
            <span className={styles.iconSeperator}>
              {isAscending !== undefined && (
                <FontAwesomeIcon icon={isAscending ? faArrowDown : faArrowUp} />
              )}
            </span>
          </th>}
          {activeFields.City &&<th>City</th>}
          <th />
          {activeFields.Email && <th>Email</th>}
          {activeFields.Phone && <th>Phone</th>}
          <th
            onClick={() => setIsFilterPopupActive((prev) => !prev)}
            className={isFilterPopupActive ? styles.activeFilter : undefined}
          >
            {<FontAwesomeIcon icon={faList} />}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((contact) => (
          <tr
            key={`row-${contact.id}`}
            onClick={() => onCellPress(contact.id)}
            className={`
              ${styles.tableRow} 
              ${isFilterPopupActive && styles.tableRowDark}
              ${activeContactId === contact.id && (isFilterPopupActive ? styles.tableRowActiveDark : styles.tableRowActive)}`
            }
          >
            {activeFields.Name && <td key={`cell-${contact.id}-name`}>
              {formatName(contact.name, contact.surname)}
            </td>}
            {activeFields.City && <td key={`cell-${contact.id}-city`}>{contact.city}</td>}
            <td key={`cell-${contact.id}-active`}>
              {<FontAwesomeIcon icon={contact.isActive ? faEye : faEyeSlash} />}
            </td>
            {activeFields.Email && <td key={`cell-${contact.id}-email`}>{contact.email}</td>}
           {activeFields.Phone && <td key={`cell-${contact.id}-phone`}>{contact.phone}</td>}
            <td key={`cell-${contact.id}-filter`} />
          </tr>
        ))}
      </tbody>
    </table>
    {isFilterPopupActive && <FilterPopup activeFields={activeFields} onValueChange={setActiveFields}/>}
    </>
  );
};

export { TableSection };
