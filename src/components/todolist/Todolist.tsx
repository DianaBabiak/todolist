import {TodoItemStatus, TodolistType} from "../../propsType.ts";
import {TodoItem} from "../todoItem/TodoItem.tsx";
import {useState} from "react";
import {clsx} from 'clsx';
import styles from './Todolist.module.scss'
import {AddField} from "../addField/AddField.tsx";


interface TodoListProps extends TodolistType {
    handlerDeleteTodolist: (idTodo: string) => void
    handlerDeleteTodoItem: (idTodo: string, idItem: string) => void
    handlerAddTodoItem: (idTodo: string, newTitle: string) => void

}


export const Todolist = ({
                             title,
                             id,
                             items,
                             handlerDeleteTodolist,
                             handlerDeleteTodoItem,
                             handlerAddTodoItem
                         }: TodoListProps) => {
    const [status, setStatus] = useState(TodoItemStatus.All)
    const filterItems = items.filter((item) => {
        if (status === TodoItemStatus.All) {
            return item
        }
        return status === TodoItemStatus.Completed
            ? item.checked
            : !item.checked

    })


    const onDeleteTodoItem = (idItem: string) => {
        handlerDeleteTodoItem(id, idItem)
    }

    const onAddTodoItem = (newTitle: string) => {
        handlerAddTodoItem(id, newTitle)
    }


    return (
        <div>
            <h3>{title}</h3>
            <button onClick={() => handlerDeleteTodolist(id)}>Delete</button>
            <AddField handlerAdd={onAddTodoItem} label={'X'}/>
            <ul>
                {filterItems.map((item) => {
                    return (
                        <TodoItem key={item.id}
                                  label={item.label}
                                  checked={item.checked}
                                  id={item.id}
                                  handlerDeleteTodoItem={onDeleteTodoItem}/>
                    )
                })}

            </ul>
            <div>
                <button onClick={() => {
                    setStatus(TodoItemStatus.All)
                }}
                        className={clsx(styles.button, {[styles.selectedButton]: status === TodoItemStatus.All})}>All
                </button>
                <button onClick={() => {
                    setStatus(TodoItemStatus.Active)
                }}
                        className={clsx(styles.button, {[styles.selectedButton]: status === TodoItemStatus.Active})}>Active
                </button>
                <button onClick={() => {
                    setStatus(TodoItemStatus.Completed)
                }}
                        className={clsx(styles.button, {[styles.selectedButton]: status === TodoItemStatus.Completed})}>Completed
                </button>
            </div>
        </div>

    )
}