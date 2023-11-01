import {TodoTaskType} from "../../propsType.ts";
import '../../App.css'



interface TodoItemProps extends TodoTaskType {
    handlerDeleteTodoTask: (idTask: string) => void
    onChangeCheckedHandler:(idItem: string) => void

}

export const TodoTask = ({label, id, checked, handlerDeleteTodoTask, onChangeCheckedHandler}: TodoItemProps) => {
    const onChangeChecked=()=>{
        onChangeCheckedHandler(id)
    }


    return (
        <li className={checked ? 'isDone': ''}>
            <input type="checkbox" checked={checked} onChange={onChangeChecked} />
            <span >{label}</span>
            <button onClick={() => handlerDeleteTodoTask(id)}>X</button>


        </li>
    )

}