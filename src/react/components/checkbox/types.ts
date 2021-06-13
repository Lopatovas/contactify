import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

interface ICheckboxProps {
  label?: string | ReactNode;
  icon?: IconProp;
  id: string;
  isChecked: boolean;
  setIsChecked: () => void;
}

export default ICheckboxProps;
