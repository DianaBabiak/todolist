import {ChangeEvent, KeyboardEvent, memo, useCallback, useState} from "react";
import Typography, {TypographyProps} from '@mui/material/Typography';



interface EditableSpanProps {
    label: string
    onEditHandler: (newLabel: string) => void
    variantTypography: TypographyProps['variant']

}

export const EditableSpan = memo(({label, onEditHandler, variantTypography}: EditableSpanProps) => {
    const [editMode, setEditMode] = useState(false)
    const [editLabel, setEditLabel] = useState('')
    const [error, setError] = useState<null | string>(null)

    const onDoubleClickHandler = useCallback(() => {
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
                    <Typography style={{
                        margin: '0',
                        display: 'flex',
                        alignItems: 'end',
                        paddingBottom: '5px'
                    }} onDoubleClick={onDoubleClickHandler} variant={variantTypography} gutterBottom>


                        {label}
                    </Typography>
                    {error && <div className='errorMessage'>{error}</div>}
                </>
            )}
        </>
    );


})