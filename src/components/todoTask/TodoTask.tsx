import {TodoTaskType} from "../../propsType.ts";
import '../../App.css'
import {EditableSpan} from "../editableSpan/EditableSpan.tsx";



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
            <input type="checkbox" checked={checked} onChange={onChangeChecked} />
            <EditableSpan label={label} onEditHandler={onEditTodoItemHandler}/>
            <button onClick={() => handlerDeleteTodoTask(id)}>X</button>


        </li>
    )

}

