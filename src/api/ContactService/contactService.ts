import axios from "axios";
import { ENDPOINTS } from "../config";

const fetchContactsAsync = () => axios.get(ENDPOINTS.CONTACT);
const fetchContactByIdAsync = (id: string) =>
  axios.get(ENDPOINTS.CONTACT_DETAILS(id));

export const ContactService = { fetchContactsAsync, fetchContactByIdAsync };
