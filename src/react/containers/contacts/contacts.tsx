import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { IContactsProps, IFilterProps } from "./types";
import { Loader, AppLogo } from "../../components";
import { DetailsSection, FilterSection, TableSection } from "./components";
import userPic from "../../assets/userpic.jpg";
import { sortByName } from "./utils/contactSorter";
import {
  filterByActive,
  filterByCity,
  filterByName,
} from "./utils/contactFilter";

export const Contacts = (props: IContactsProps) => {
  const {
    isLoading,
    isFetched,
    fetchContactsAsync,
    contacts,
    isContactDetailsLoading,
    contactDetails,
    fetchContactByIdAsync,
  } = props;

  const [contactsLocal, setContactsLocal] = useState(contacts);
  const [isAscending, setIsAscending] =
    useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (!isFetched && !isLoading) {
      fetchContactsAsync();
    }
  }, [fetchContactsAsync, isFetched, isLoading]);

  useEffect(() => {
    setContactsLocal(contacts);
  }, [contacts]);

  const onTableItemPress = (id: string) => {
    fetchContactByIdAsync(id);
  };

  const sortData = () => {
    setContactsLocal((cnt) => sortByName(cnt, isAscending ? false : true));
    setIsAscending((asc) => !asc);
  };

  const filterData = ({ nameQuery, cityQuery, isActive }: IFilterProps) => {
    let result = [...contacts];
    result = filterByName([...contacts], nameQuery);
    result = filterByCity(result, cityQuery);
    result = filterByActive(result, isActive);
    if (isAscending !== undefined) {
      result = sortByName(result, isAscending ? false : true);
    }
    setContactsLocal(result);
  };

  const shouldShowDetails =
    (contactDetails &&
      contactsLocal.find((contact) => contact.id === contactDetails.id)) ||
    isContactDetailsLoading;

  return (
    <div className={styles.background}>
      <Loader isLoading={isLoading} isAbsolute>
        <div className={styles.container}>
          <div className={styles.mainSection}>
            <FilterSection
              dropdownOptions={[
                { label: "City", value: "" },
                ...contacts.map((contact) => ({
                  label: contact.city,
                  value: contact.city,
                })),
              ]}
              onFilterCallback={filterData}
            />
            <TableSection
              data={contactsLocal}
              onCellPress={onTableItemPress}
              activeContactId={contactDetails?.id}
              onSortPress={sortData}
              isAscending={isAscending}
            />
          </div>
          <div className={styles.flexGrid}>
            <AppLogo />
            {shouldShowDetails && (
              <DetailsSection
                contact={contactDetails}
                photoUrl={userPic}
                isLoading={isContactDetailsLoading}
              />
            )}
          </div>
        </div>
      </Loader>
    </div>
  );
};
