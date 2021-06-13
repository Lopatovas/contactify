import { ReactNode } from "react";

interface ILoaderProps {
  isLoading: boolean;
  children: ReactNode;
  isAbsolute?: boolean;
}

export default ILoaderProps;
