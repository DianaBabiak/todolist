import {ChangeEvent, useState, KeyboardEvent} from "react";


interface AddFieldProps {
    handlerAdd: (newTitle: string) => void
    label: string
}


export const AddField = ({handlerAdd, label}: AddFieldProps) => {
    const [value, setValue] = useState('')
    const onChangeValueInput = (e: ChangeEvent<HTMLInputElement>) => {
        const addedValue = e.target.value
        setValue(addedValue)
        console.log(value)

    }

    const onClickAdd = () => {
        handlerAdd?.(value)
        setValue('')
    }

    const onKeyDownAdd =(e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.key==='Enter'){
            handlerAdd?.(value)
            setValue('')
        }
    }


    return (
        <div>
            <input value={value}
                   onChange={onChangeValueInput}
                   onKeyDown={onKeyDownAdd}/>

            <button onClick={onClickAdd}>{label}</button>
        </div>
    )


}