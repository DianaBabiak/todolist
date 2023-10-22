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
    onChangeCheckedHandler: (idTodo: string, newTitle: string) => void

}


export const Todolist = ({
                             title,
                             id,
                             items,
                             handlerDeleteTodolist,
                             handlerDeleteTodoItem,
                             handlerAddTodoItem,
                             onChangeCheckedHandler
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

const onChangeChecked = (idItem:string)=>{
    onChangeCheckedHandler(id, idItem)
}

const onClickFilterButtonHandler = (activeStatus:TodoItemStatus)=>{
    setStatus(activeStatus)


}
    return (
        <div>
            <h3>{title}</h3>
            <button onClick={() => handlerDeleteTodolist(id)}>Delete</button>
            <AddField handlerAdd={onAddTodoItem} label={'+'}/>
            <ul>
                {filterItems.map((item) => {
                    return (
                        <TodoItem key={item.id}
                                  label={item.label}
                                  checked={item.checked}
                                  id={item.id}
                                  handlerDeleteTodoItem={onDeleteTodoItem}
                                  onChangeCheckedHandler={onChangeChecked}
                        />
                    )
                })}

            </ul>
            <div>
                <button onClick={() => {
                    onClickFilterButtonHandler(TodoItemStatus.All)
                }}
                        className={clsx(styles.button, {[styles.selectedButton]: status === TodoItemStatus.All})}>All
                </button>
                <button onClick={() => {
                    onClickFilterButtonHandler(TodoItemStatus.Active)
                }}
                        className={clsx(styles.button, {[styles.selectedButton]: status === TodoItemStatus.Active})}>Active
                </button>
                <button onClick={() => {
                    onClickFilterButtonHandler(TodoItemStatus.Completed)
                }}
                        className={clsx(styles.button, {[styles.selectedButton]: status === TodoItemStatus.Completed})}>Completed
                </button>
            </div>
        </div>

    )
}