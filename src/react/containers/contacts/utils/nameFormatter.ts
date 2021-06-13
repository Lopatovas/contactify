import { Contact } from "../../../../api/ContactService";

const formatName = (name: string, surname: string) =>
  `${name} ${surname.substr(0, 1)}.`;

const getFullName = (contact: Contact) => `${contact.name} ${contact.surname}`;

export { formatName, getFullName };
