import { RootState } from "../store";

const getContacts = (state: RootState) => state.contact.contacts;

const getIsContactsLoading = (state: RootState) =>
  state.contact.status === "loading";

const getIsContactsFetched = (state: RootState) =>
  state.contact.isContactsFetched;

const getIsContactDetailsLoading = (state: RootState) =>
  state.contact.statusDetails === "loading";

const getContactDetails = (state: RootState) => state.contact.contactDetails;

export {
  getContacts,
  getIsContactsLoading,
  getIsContactsFetched,
  getIsContactDetailsLoading,
  getContactDetails,
};
