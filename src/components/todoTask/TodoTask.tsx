import {TodoTaskType} from "../../propsType.ts";
import '../../App.css'
import {EditableSpan} from "../editableSpan/EditableSpan.tsx";
import {Checkbox, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";



interface TodoItemProps extends TodoTaskType {
    handlerDeleteTodoTask: (idTask: string) => void
    onChangeCheckedHandler:(idItem: string) => void
    onEditTodoItem: (idTask:string, newLabel:string) => void

}

export const TodoTask = ({label, id, checked, handlerDeleteTodoTask, onChangeCheckedHandler, onEditTodoItem}: TodoItemProps) => {
    const onChangeChecked=()=>{
        onChangeCheckedHandler(id)
    }

const onEditTodoItemHandler = (newLabel:string)=>{
    onEditTodoItem(id, newLabel)
    }
    return (
        <li className={checked ? 'isDone': ''}>
            <Checkbox checked={checked} onChange={onChangeChecked} defaultChecked color="secondary" />
            <EditableSpan label={label} onEditHandler={onEditTodoItemHandler} variantTypography={"h6"}/>
            <IconButton aria-label="delete" size="large">
                <Delete fontSize="small" onClick={() => handlerDeleteTodoTask(id)}/>
            </IconButton>


        </li>
    )

}

