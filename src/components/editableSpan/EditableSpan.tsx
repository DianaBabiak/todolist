import {memo,} from "react";
import Typography, {TypographyProps} from '@mui/material/Typography';
import {useEditableSpan} from "../../hooks/useEditableSpan.ts";


interface EditableSpanProps {
    label: string
    onEditHandler: (newLabel: string) => void
    variantTypography: TypographyProps['variant']

}

export const EditableSpan = memo(({label, onEditHandler, variantTypography}: EditableSpanProps) => {
    const {
        editMode,
        error,
        editLabel,
        onBlurHandler,
        onChangeLabelHandler,
        onKeyDownEdit,
        onDoubleClickHandler
    } = useEditableSpan(onEditHandler, label)

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