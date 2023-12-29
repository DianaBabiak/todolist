import '../../App.css'
import {EditableSpan} from "../editableSpan/EditableSpan.tsx";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {CheckBox} from "../checkBoks/CheckBox.tsx";
import {memo, useCallback} from "react";
import styles from "./TodoTask.module.scss"
import {TaskType} from "../../api/commonAPI.ts";
import {TaskStatuses} from "../../type.ts";


interface TodoItemProps {
    task:TaskType
    handlerDeleteTodoTask: (idTask: string) => void
    onChangeCheckedHandler:(idItem: string, status:TaskStatuses) => void
    onEditTodoItem: (idTask:string, newLabel:string) => void

}

export const TodoTask =memo( ({task, handlerDeleteTodoTask, onChangeCheckedHandler, onEditTodoItem}: TodoItemProps) => {
    const onChangeChecked=useCallback(()=>{
        const newStatus = task.status === TaskStatuses.Completed ? TaskStatuses.New : TaskStatuses.Completed;
        onChangeCheckedHandler(task.id, newStatus);

    },[onChangeCheckedHandler,task.id, task.status])

const onEditTodoItemHandler =useCallback( (newLabel:string)=>{
    onEditTodoItem(task.id, newLabel)
    },[onEditTodoItem,task.id])
    return (
        <li className={task.status === TaskStatuses.Completed ? styles.isDone: styles.wrapperTask}>
            <CheckBox checked={task.status===TaskStatuses.Completed} onChange={onChangeChecked}/>
            <EditableSpan label={task.title} onEditHandler={onEditTodoItemHandler} variantTypography={"h6"}/>
            <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize="small" onClick={() => handlerDeleteTodoTask(task.id)}/>
            </IconButton>
        </li>
    )

})

