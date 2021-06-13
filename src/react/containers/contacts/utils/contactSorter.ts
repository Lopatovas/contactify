import { Contact } from "../../../../api/ContactService";
import { getFullName } from "./nameFormatter";

const sortByName = (contacts: Contact[], ascending?: boolean) => {
  const sortedAsc = [...contacts].sort((a, b) => {
    const aFullName = getFullName(a);
    const bFullName = getFullName(b);
    return aFullName > bFullName ? 1 : bFullName > aFullName ? -1 : 0;
  });
  return ascending ? sortedAsc : sortedAsc.reverse();
};

export { sortByName };
