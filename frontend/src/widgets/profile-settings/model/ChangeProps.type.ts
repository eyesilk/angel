import { Dispatch, SetStateAction } from "react";

export interface ChangeProps {
  onClose: Dispatch<SetStateAction<boolean>>
}