import {TodoItemStatus, TodolistType, TodoTaskType} from "../../propsType.ts";
import {TodoTask} from "../todoTask/TodoTask.tsx";
import {useState} from "react";
import clsx from 'clsx';
import styles from './Todolist.module.scss'
import {AddField} from "../addField/AddField.tsx";


interface TodoListProps extends TodolistType {
    tasks:TodoTaskType[]
    handlerDeleteTodolist: (idTodo: string) => void
    handlerDeleteTodoTask: (idTodo: string, idTask: string) => void
    handlerAddTodoTask: (idTodo: string, newTitle: string) => void
    onChangeCheckedHandler: (idTodo: string, newTitle: string) => void

}


export const Todolist = ({
                             title,
                             id,
                             tasks,
                             handlerDeleteTodolist,
                             handlerDeleteTodoTask,
                             handlerAddTodoTask,
                             onChangeCheckedHandler
                         }: TodoListProps) => {
    const [status, setStatus] = useState(TodoItemStatus.All)
    const filterTasks = tasks.filter((item) => {
        if (status === TodoItemStatus.All) {
            return item
        }
        return status === TodoItemStatus.Completed
            ? item.checked
            : !item.checked

    })


    const onDeleteTodoTask = (idTask: string) => {
        handlerDeleteTodoTask(id, idTask)
    }

    const onAddTodoItem = (newTitle: string) => {
        handlerAddTodoTask(id, newTitle)
    }

    const onChangeChecked = (idItem: string) => {
        onChangeCheckedHandler(id, idItem)
    }

    const onClickFilterButtonHandler = (activeStatus: TodoItemStatus) => {
        setStatus(activeStatus)


    }
    return (
        <div>
            <h3>{title}</h3>
            <button onClick={() => handlerDeleteTodolist(id)}>Delete</button>
            <AddField handlerAdd={onAddTodoItem} label={'+'}/>
            <ul>
                {filterTasks.length ? filterTasks.map((item) => {
                    return (
                        <TodoTask key={item.id}
                                  label={item.label}
                                  checked={item.checked}
                                  id={item.id}
                                  handlerDeleteTodoTask={onDeleteTodoTask}
                                  onChangeCheckedHandler={onChangeChecked}
                        />
                    )
                }) : <p> Your tasks are empty </p>}

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