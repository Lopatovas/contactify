import { Contact } from "../../../api/ContactService";

export interface IFilterProps {
  nameQuery?: string;
  isActive?: boolean;
  cityQuery?: string;
}

export interface IReduxProps {
  contacts: Array<Contact>;
  contactDetails?: Contact;
  isContactDetailsLoading: boolean;
  isLoading: boolean;
  isFetched: boolean;
}

export interface IDispatchProps {
  fetchContactsAsync: () => void;
  fetchContactByIdAsync: (id: string) => void;
}

export type IContactsProps = IReduxProps & IDispatchProps;
