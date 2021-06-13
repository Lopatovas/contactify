import React from "react";
import { Loader } from "../../../../components";
import { formatName } from "../../utils/nameFormatter";
import styles from "./styles.module.css";
import IDetailsSectionProps from "./types";

const DetailsSection = (props: IDetailsSectionProps) => {
  const { contact, photoUrl, isLoading } = props;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Loader isLoading={isLoading}>
          {contact && (
            <>
              <div className={styles.imageContainer}>
                <img
                  src={photoUrl}
                  alt="Contact person"
                  className={styles.image}
                />
              </div>
              <div className={styles.detailsContainer}>
                <div>
                  <p>Name:</p>
                  <p>City:</p>
                  <p>Email:</p>
                  <p>Phone:</p>
                </div>
                <div>
                  <p>{formatName(contact.name, contact.surname)}</p>
                  <p>{contact.city}</p>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  <p>{contact.phone}</p>
                </div>
              </div>
            </>
          )}
        </Loader>
      </div>
    </div>
  );
};

export { DetailsSection };
