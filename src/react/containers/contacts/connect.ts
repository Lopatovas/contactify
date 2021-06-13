import { connect, MapStateToProps } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import {
  getContacts,
  fetchContactsAsync,
  getIsContactsLoading,
  getIsContactsFetched,
  getContactDetails,
  getIsContactDetailsLoading,
} from "../../../redux/contact";
import { IDispatchProps, IReduxProps } from "./types";
import { Contacts as ContactsPage } from "./contacts";
import { fetchContactByIdAsync } from "../../../redux/contact/thunk";

const mapStateToProps: MapStateToProps<IReduxProps, {}, RootState> = (
  state
) => ({
  contacts: getContacts(state),
  isLoading: getIsContactsLoading(state),
  isFetched: getIsContactsFetched(state),
  contactDetails: getContactDetails(state),
  isContactDetailsLoading: getIsContactDetailsLoading(state),
});

const mapDispatchToProps = (dispatch: AppDispatch): IDispatchProps => ({
  fetchContactsAsync: () => dispatch(fetchContactsAsync()),
  fetchContactByIdAsync: (id: string) => dispatch(fetchContactByIdAsync(id)),
});

const Contacts = connect(mapStateToProps, mapDispatchToProps)(ContactsPage);

export { Contacts };
