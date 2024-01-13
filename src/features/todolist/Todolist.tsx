import {StatusLoading, TodoItemFilter, TodolistStateType} from "../../state/type.ts";
import {TodoTask} from "./todoTask/TodoTask.tsx";
import {memo, useEffect} from "react";
import Button from '@mui/material/Button';
import {AddField} from "../../components/addField/AddField.tsx";
import {EditableSpan} from "../../components/editableSpan/EditableSpan.tsx";
import DeleteIcon from '@mui/icons-material/Delete';
import style from "./Todolist.module.scss"
import {FilterButton} from "../../components/filterButton/FilterButton.tsx";
import {useTodolist} from "../../hooks/useTodolist.ts";
import {getTasksTC} from "../../state/tasks/tasksReduser.ts";
import {useAppDispatch} from "../../state/store.ts";

interface TodoListProps {
    todo: TodolistStateType
    demo?: boolean

}

export const Todolist = memo(({todo, demo = false}: TodoListProps) => {
    const dispatch = useAppDispatch()

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

    useEffect(() => {
        if (demo){
            return
        }
       dispatch(getTasksTC(todo.id))
    }, [dispatch, todo.id])

    return (
        <div className={style.wrapper}>
            <div className={style.titleWrapper}>
                <EditableSpan label={todo.title} onEditHandler={onEditTodoHandler} variantTypography={"h4"} disabled={todo.entityStatus===StatusLoading.loading}/>
                <Button disabled={todo.entityStatus===StatusLoading.loading} size='small' onClick={handlerDeleteTodolist} variant="outlined" startIcon={<DeleteIcon/> }>
                    Delete
                </Button>
            </div>
            <AddField handlerAdd={handlerAddTodoTask} disabled={todo.entityStatus===StatusLoading.loading}/>
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