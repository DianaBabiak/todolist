import {TodoItemType} from "../../propsType.ts";


interface TodoItemProps extends TodoItemType {
    handlerDeleteTodoItem: (idItem: string) => void

}

export const TodoItem = ({label, id, checked, handlerDeleteTodoItem}: TodoItemProps) => {
    return (
        <li>
            <input type="checkbox" checked={checked}/>
            <span>{label}</span>
            <button onClick={() => handlerDeleteTodoItem(id)}>X</button>
        </li>
    )

}