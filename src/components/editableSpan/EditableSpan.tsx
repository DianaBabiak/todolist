import {ChangeEvent, KeyboardEvent, useState} from "react";
import Typography, {TypographyProps} from '@mui/material/Typography';


interface EditableSpanProps {
    label: string
    onEditHandler: (newLabel: string) => void
    variantTypography: TypographyProps['variant']

}

export const EditableSpan = ({label, onEditHandler, variantTypography}: EditableSpanProps) => {
    const [editMode, setEditMode] = useState(false)
    const [editLabel, setEditLabel] = useState('')
    const [error, setError] = useState<null | string>(null)

    const onDoubleClickHandler = () => {
        setEditMode(true)
        setEditLabel(label)

    }
    const onChangeLabelHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEditLabel(e.currentTarget.value)
    }
    const onBlurHandler = () => {
        if (editLabel.trim() === '') {
            setError('Title is required')
            return
        } else {
            setEditMode(false)
            onEditHandler(editLabel)
        }
    }
    const onKeyDownEdit = (e: KeyboardEvent<HTMLInputElement>) => {
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
    }


    return (

            <>
                {editMode ? (
                    <input
                        value={editLabel}
                        autoFocus
                        onBlur={onBlurHandler}
                        onChange={onChangeLabelHandler}
                        onKeyDown={onKeyDownEdit}
                        className={error ? 'error' : ''}
                    />
                ) : (
                    <>
                        <Typography onDoubleClick={onDoubleClickHandler} variant={variantTypography} gutterBottom>
                            {label}
                        </Typography>
                        {error && <div className='errorMessage'>{error}</div>}
                    </>
                )}
            </>
        );



}