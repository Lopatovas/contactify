export interface IDropdownOption {
  label: string;
  value: string;
}

export interface IDropdownProps {
  label?: string;
  id: string;
  disabled?: boolean;
  options: IDropdownOption[];
  selectedOption?: IDropdownOption;
  onSelected: (value: IDropdownOption | null) => void;
}
