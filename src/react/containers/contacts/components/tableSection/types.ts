import { Contact } from "../../../../../api/ContactService";

interface ITableSectionProps {
    data: Contact[];
    onCellPress: (id: string) => void;
    activeContactId?: string;
    onSortPress: () => void;
    isAscending?: boolean;
}

export default ITableSectionProps;
