import {ChangeEvent, useState, KeyboardEvent} from "react";
import '../../App.css'


interface AddFieldProps {
    handlerAdd: (newTitle: string) => void
    label: string
}


export const AddField = ({handlerAdd, label}: AddFieldProps) => {
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
        <div>
            <input value={value}
                   onChange={onChangeValueInput}
                   onKeyDown={onKeyDownAdd}
            className={error? 'error' : ''}/>

            <button onClick={onClickAdd}>{label}</button>
            {error && <div className= 'errorMessage'>{error}</div>}
        </div>
    )


}