import Checkbox from "@mui/material/Checkbox";
import { memo } from "react";

interface CheckBoxProps {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}
export const CheckBox = memo(
  ({ checked, onChange, disabled }: CheckBoxProps) => {
    return (
      <Checkbox
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        defaultChecked
        color="secondary"
      />
    );
  },
);
