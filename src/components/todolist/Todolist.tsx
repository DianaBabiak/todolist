import {TodoItemStatus, TodolistType, TodoTaskType} from "../../propsType.ts";
import {TodoTask} from "../todoTask/TodoTask.tsx";
import {useState} from "react";
import Button from '@mui/material/Button';
import {AddField} from "../addField/AddField.tsx";
import {EditableSpan} from "../editableSpan/EditableSpan.tsx";
import FilterButton from "../filterButton/FilterButton.tsx";
import DeleteIcon from '@mui/icons-material/Delete';


import style from "./Todolist.module.scss"


interface TodoListProps extends TodolistType {
    tasks: TodoTaskType[]
    handlerDeleteTodolist: (idTodo: string) => void
    handlerDeleteTodoTask: (idTodo: string, idTask: string) => void
    handlerAddTodoTask: (idTodo: string, newTitle: string) => void
    onChangeCheckedHandler: (idTodo: string, newTitle: string) => void
    onEditTodoItem: (idTodo: string, idTask: string, newTitle: string) => void
    onEditTodo: (idTodo: string, newTitle: string) => void

}


export const Todolist = ({
                             title,
                             id,
                             tasks,
                             handlerDeleteTodolist,
                             handlerDeleteTodoTask,
                             handlerAddTodoTask,
                             onChangeCheckedHandler,
                             onEditTodo,
                             onEditTodoItem
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

    const onEditTodoHandler = (newTitle: string) => {
        onEditTodo(id, newTitle)
    }
    const onEditTodoItemHandler = (idTask: string, newLabel: string) => {
        onEditTodoItem(id, idTask, newLabel)
    }
    return (
        <div className={style.wrapper}>
            <div className={style.titleWrapper}>
                <EditableSpan label={title} onEditHandler={onEditTodoHandler} variantTypography={"h4"}/>
                <Button size='small' onClick={() => handlerDeleteTodolist(id)} variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            </div>
            <AddField handlerAdd={onAddTodoItem} />
            <ul>
                {filterTasks.length ? filterTasks.map((item) => {
                    return (
                        <TodoTask key={item.id}
                                  label={item.label}
                                  checked={item.checked}
                                  id={item.id}
                                  handlerDeleteTodoTask={onDeleteTodoTask}
                                  onChangeCheckedHandler={onChangeChecked}
                                  onEditTodoItem={onEditTodoItemHandler}
                        />
                    )
                }) : <p>Your tasks are empty </p>}

            </ul>
            <div className={style.wrapperButtons}>
                <FilterButton
                    status={TodoItemStatus.All}
                    onClickHandler={onClickFilterButtonHandler}
                    isSelected={status === TodoItemStatus.All}
                />
                <FilterButton
                    status={TodoItemStatus.Active}
                    onClickHandler={onClickFilterButtonHandler}
                    isSelected={status === TodoItemStatus.Active}
                />
                <FilterButton
                    status={TodoItemStatus.Completed}
                    onClickHandler={onClickFilterButtonHandler}
                    isSelected={status === TodoItemStatus.Completed}
                />
            </div>
        </div>

    )
}