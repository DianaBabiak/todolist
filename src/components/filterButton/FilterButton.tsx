import { TodoItemFilter } from "../../state/type.ts";
import Button from "@mui/material/Button";
import { memo } from "react";

interface FilterButtonProps {
  status: TodoItemFilter;
  onClickHandler: (status: TodoItemFilter) => void;
  isSelected: boolean;
}

export const FilterButton = memo(
  ({ status, onClickHandler, isSelected }: FilterButtonProps) => {
    return (
      <Button
        color="secondary"
        onClick={() => onClickHandler(status)}
        variant={isSelected ? "contained" : "outlined"}
      >
        {status}
      </Button>
    );
  },
);
