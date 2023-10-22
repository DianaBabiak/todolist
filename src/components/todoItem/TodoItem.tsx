import {TodoItemType} from "../../propsType.ts";
import '../../App.css'



interface TodoItemProps extends TodoItemType {
    handlerDeleteTodoItem: (idItem: string) => void
    onChangeCheckedHandler:(idItem: string) => void

}

export const TodoItem = ({label, id, checked, handlerDeleteTodoItem, onChangeCheckedHandler}: TodoItemProps) => {
    const onChangeChecked=()=>{
        onChangeCheckedHandler(id)
    }


    return (
        <li className={checked ? 'isDone': ''}>
            <input type="checkbox" checked={checked} onChange={onChangeChecked} />
            <span >{label}</span>
            <button onClick={() => handlerDeleteTodoItem(id)}>X</button>
        </li>
    )

}