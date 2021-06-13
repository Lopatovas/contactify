import { Contact } from "../../api/ContactService";

export interface ContactState {
  contacts: Array<Contact>;
  contactDetails?: Contact;
  isContactsFetched: boolean;
  status: "idle" | "loading" | "failed";
  statusDetails: "idle" | "loading" | "failed";
}
