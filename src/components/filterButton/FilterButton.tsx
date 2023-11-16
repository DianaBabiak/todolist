import React from 'react';
import {TodoItemStatus} from "../../propsType.ts";
import {Button} from "@mui/material";


interface FilterButtonProps {
    status: TodoItemStatus;
    onClickHandler: (status: TodoItemStatus) => void;
    isSelected: boolean;
}

const FilterButton: React.FC<FilterButtonProps> = ({status, onClickHandler, isSelected}) => {
    return (
        <Button color='secondary' onClick={() => onClickHandler(status)} variant={isSelected ? "contained" : "outlined"}>{status}</Button>

    );
};

export default FilterButton;
