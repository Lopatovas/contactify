import { Contact } from "../../../../../api/ContactService";

interface IDetailsSectionProps {
    contact?: Contact;
    photoUrl: string;
    isLoading: boolean;
}

export default IDetailsSectionProps