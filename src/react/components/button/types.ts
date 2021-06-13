import { ReactNode } from "react";

interface IButtonProps {
  onPress: () => void;
  children: ReactNode | string;
}

export default IButtonProps;
