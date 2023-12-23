import {TodoTaskType} from "../../propsType.ts";
import '../../App.css'
import {EditableSpan} from "../editableSpan/EditableSpan.tsx";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {CheckBox} from "../checkBoks/CheckBox.tsx";
import {memo, useCallback} from "react";
import styles from "./TodoTask.module.scss"



interface TodoItemProps extends TodoTaskType {
    handlerDeleteTodoTask: (idTask: string) => void
    onChangeCheckedHandler:(idItem: string) => void
    onEditTodoItem: (idTask:string, newLabel:string) => void

}

export const TodoTask =memo( ({label, id, checked, handlerDeleteTodoTask, onChangeCheckedHandler, onEditTodoItem}: TodoItemProps) => {
    const onChangeChecked=useCallback(()=>{
        onChangeCheckedHandler(id)
    },[onChangeCheckedHandler,id])

const onEditTodoItemHandler =useCallback( (newLabel:string)=>{
    onEditTodoItem(id, newLabel)
    },[onEditTodoItem,id])
    return (
        <li className={checked ? styles.isDone: styles.wrapperTask}>
            <CheckBox checked={checked} onChange={onChangeChecked}/>
            <EditableSpan label={label} onEditHandler={onEditTodoItemHandler} variantTypography={"h6"}/>
            <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize="small" onClick={() => handlerDeleteTodoTask(id)}/>
            </IconButton>
        </li>
    )

})

