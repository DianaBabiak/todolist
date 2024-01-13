import {ChangeEvent, KeyboardEvent, useCallback, useState} from "react";


export const useEditableSpan = (onEditHandler: (newLabel: string) => void, label:string, disabled?:boolean)=>{
    const [editMode, setEditMode] = useState(false)
    const [editLabel, setEditLabel] = useState('')
    const [error, setError] = useState<null | string>(null)

    const onDoubleClickHandler = useCallback(() => {
        if(disabled){
            return
        }
        setEditMode(true)
        setEditLabel(label)

    }, [label])
    const onChangeLabelHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setEditLabel(e.currentTarget.value)
    }, [])
    const onBlurHandler = useCallback(() => {
        if (editLabel.trim() === '') {
            setError('Title is required')
            return
        } else {
            setEditMode(false)
            onEditHandler(editLabel)
        }
    }, [onEditHandler, editLabel])
    const onKeyDownEdit = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (e.key === 'Enter') {
            if (editLabel.trim() === '') {
                setError('Title is required')
                return
            } else {
                setEditMode(false)
                onEditHandler(editLabel)
            }
        }
    }, [onEditHandler, editLabel])

    return {
        editMode,
        error,
        editLabel,
        onBlurHandler,
        onChangeLabelHandler,
        onKeyDownEdit,
        onDoubleClickHandler
    }
}