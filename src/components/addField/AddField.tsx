import {memo} from "react";
import '../../App.css'
import TextField from '@mui/material/TextField';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';
import style from "./AddField.module.scss"
import {useAddField} from "../../hooks/useAddField.ts";


interface AddFieldProps {
    handlerAdd: (newTitle: string) => void

}


export const AddField = memo(({handlerAdd}: AddFieldProps) => {
    const {value, error, onChangeValueInput, onKeyDownAdd, onClickAdd} = useAddField(handlerAdd)

    return (
        <div className={style.wrapper}>
            <TextField id="outlined-basic" label="Enter a title..."
                       variant="outlined"
                       value={value}
                       onChange={onChangeValueInput}
                       onKeyDown={onKeyDownAdd}
                       error={!!error}
                       helperText={error}
            />

            <IconButton aria-label="add" size="large" onClick={onClickAdd}>
                <AddBoxIcon fontSize="large" color="primary"/>
            </IconButton>
        </div>
    )


})