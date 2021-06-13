import { Contact } from "../../../../api/ContactService";
import { getFullName } from "./nameFormatter";

const filterByName = (contacts: Contact[], query?: string) => {
  if (query) {
    return contacts.filter((contact) =>
      getFullName(contact).toLowerCase().includes(query.toLowerCase())
    );
  }
  return contacts;
};

const filterByCity = (contacts: Contact[], city?: string) => {
  if (city) {
    return contacts.filter((contact) => contact.city === city);
  }
  return contacts;
};

const filterByActive = (contacts: Contact[], isActive?: boolean) => {
  if (isActive) {
    return contacts.filter((contact) => contact.isActive);
  }
  return contacts;
};

export { filterByName, filterByCity, filterByActive };
