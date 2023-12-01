import {TodoTaskType} from "../../propsType.ts";
import '../../App.css'
import {EditableSpan} from "../editableSpan/EditableSpan.tsx";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {CheckBox} from "../checkBoks/CheckBox.tsx";



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
            <CheckBox checked={checked} onChange={onChangeChecked}/>
            <EditableSpan label={label} onEditHandler={onEditTodoItemHandler} variantTypography={"h6"}/>
            <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize="small" onClick={() => handlerDeleteTodoTask(id)}/>
            </IconButton>


        </li>
    )

}

