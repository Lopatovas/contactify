import { IDropdownOption } from "../../../../components/dropdown/types";
import { IFilterProps } from "../../types";

interface IFilterSectionProps {
    dropdownOptions: IDropdownOption[];
    onFilterCallback: (filterParams: IFilterProps) => void;
}

export default IFilterSectionProps;
