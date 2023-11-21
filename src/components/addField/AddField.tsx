import {ChangeEvent, useState, KeyboardEvent} from "react";
import '../../App.css'
import TextField from '@mui/material/TextField';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';
import style from "./AddField.module.scss"


interface AddFieldProps {
    handlerAdd: (newTitle: string) => void

}


export const AddField = ({handlerAdd}: AddFieldProps) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState<null | string>(null)
    const onChangeValueInput = (e: ChangeEvent<HTMLInputElement>) => {
        const addedValue = e.target.value
        setValue(addedValue)


    }

    const onClickAdd = () => {
        if (value.trim() === '') {
            setError('Title is required')
            return
        } else {
            handlerAdd?.(value)
            setValue('')
        }
    }

    const onKeyDownAdd = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (e.key === 'Enter') {
            if (value.trim() === '') {
                setError('Title is required')
                return
            } else {
                handlerAdd?.(value)
                setValue('')
            }
        }
    }


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

            <IconButton  aria-label="add" size="large" onClick={onClickAdd}>
                <AddBoxIcon fontSize="large" color="primary"/>
            </IconButton>
        </div>
    )


}