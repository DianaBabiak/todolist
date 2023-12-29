import {TodoItemFilter} from "../../type.ts";
import {TodoTask} from "../todoTask/TodoTask.tsx";
import {memo} from "react";
import Button from '@mui/material/Button';
import {AddField} from "../addField/AddField.tsx";
import {EditableSpan} from "../editableSpan/EditableSpan.tsx";
import DeleteIcon from '@mui/icons-material/Delete';
import style from "./Todolist.module.scss"
import {FilterButton} from "../filterButton/FilterButton.tsx";
import {useTodolist} from "../../hooks/useTodolist.ts";
import {TodolistType} from "../../api/commonAPI.ts";

interface TodoListProps {
    todo: TodolistType

}

export const Todolist = memo(({todo}: TodoListProps) => {
    const {
        status,
        filterTasks,
        onEditTodoHandler,
        handlerDeleteTodolist,
        handlerAddTodoTask,
        onDeleteTodoTask,
        onChangeChecked,
        onEditTodoItemHandler,
        onClickFilterButtonHandler
    } = useTodolist(todo.id)

    return (
        <div className={style.wrapper}>
            <div className={style.titleWrapper}>
                <EditableSpan label={todo.title} onEditHandler={onEditTodoHandler} variantTypography={"h4"}/>
                <Button size='small' onClick={handlerDeleteTodolist} variant="outlined" startIcon={<DeleteIcon/>}>
                    Delete
                </Button>
            </div>
            <AddField handlerAdd={handlerAddTodoTask}/>
            <ul>
                {filterTasks.length ? filterTasks.map((item) => {
                    return (
                        <TodoTask key={item.id}
                                  task={item}
                                  handlerDeleteTodoTask={onDeleteTodoTask}
                                  onChangeCheckedHandler={onChangeChecked}
                                  onEditTodoItem={onEditTodoItemHandler}
                        />
                    )
                }) : <p>Your tasks are empty </p>}

            </ul>
            <div className={style.wrapperButtons}>
                <FilterButton
                    status={TodoItemFilter.All}
                    onClickHandler={onClickFilterButtonHandler}
                    isSelected={status === TodoItemFilter.All}
                />
                <FilterButton
                    status={TodoItemFilter.Active}
                    onClickHandler={onClickFilterButtonHandler}
                    isSelected={status === TodoItemFilter.Active}
                />
                <FilterButton
                    status={TodoItemFilter.Completed}
                    onClickHandler={onClickFilterButtonHandler}
                    isSelected={status === TodoItemFilter.Completed}
                />
            </div>
        </div>

    )
})