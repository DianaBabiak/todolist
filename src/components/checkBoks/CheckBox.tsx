import Checkbox from '@mui/material/Checkbox';
import {memo} from "react";


interface CheckBoxProps {
    checked: boolean
    onChange: () => void
}
export const CheckBox = memo(({checked, onChange}: CheckBoxProps) => {

    return (
        <Checkbox checked={checked} onChange={onChange} defaultChecked color="secondary"/>


    )
})