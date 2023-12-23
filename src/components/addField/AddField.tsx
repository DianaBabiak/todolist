import {ChangeEvent, useState, KeyboardEvent, memo, useCallback} from "react";
import '../../App.css'
import TextField from '@mui/material/TextField';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';
import style from "./AddField.module.scss"


interface AddFieldProps {
    handlerAdd: (newTitle: string) => void

}


export const AddField = memo(({handlerAdd}: AddFieldProps) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState<null | string>(null)
    const onChangeValueInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const addedValue = e.target.value
        setValue(addedValue)
    }, [])

    const onClickAdd = useCallback(() => {
        if (value.trim() === '') {
            setError('Title is required')
            return
        } else {
            handlerAdd?.(value)
            setValue('')
        }
    }, [value, handlerAdd])

    const onKeyDownAdd = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
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
    }, [value, handlerAdd])


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