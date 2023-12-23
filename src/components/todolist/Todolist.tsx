import {TodoItemStatus, TodolistType, TodoTasksType} from "../../propsType.ts";
import {TodoTask} from "../todoTask/TodoTask.tsx";
import {memo, useCallback, useState} from "react";
import Button from '@mui/material/Button';
import {AddField} from "../addField/AddField.tsx";
import {EditableSpan} from "../editableSpan/EditableSpan.tsx";
import DeleteIcon from '@mui/icons-material/Delete';
import style from "./Todolist.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {addTaskCA, changeCheckedTaskCA, deleteTaskCA, deleteTodoCA, editTitleTask} from "../../state/tasksReduser.ts";
import {deleteTodolistCA, editTodolistCA} from "../../state/todolistReducer.ts";
import {RootReducerType} from "../../state/store.ts";
import {FilterButton} from "../filterButton/FilterButton.tsx";


interface TodoListProps extends TodolistType {


}


export const Todolist = memo(({title, id}: TodoListProps) => {
    const [status, setStatus] = useState(TodoItemStatus.All)
    const stateTasks = useSelector<RootReducerType, TodoTasksType>(store => store.tasks)
    const dispatch = useDispatch()

    const filterTasks = stateTasks[id].filter((item) => {
        if (status === TodoItemStatus.All) {
            return item
        }
        return status === TodoItemStatus.Completed
            ? item.checked
            : !item.checked

    })

    const handlerDeleteTodolist = useCallback(() => {
        dispatch(deleteTodolistCA(id))
        dispatch(deleteTodoCA(id))
    }, [dispatch, id])

    const onDeleteTodoTask = useCallback((idTask: string) => {
        dispatch(deleteTaskCA(id, idTask))
    }, [dispatch, id])

    const handlerAddTodoTask = useCallback((newTitle: string) => {
        dispatch(addTaskCA(id, newTitle))

    }, [dispatch, id])

    const onChangeChecked = useCallback((idTask: string) => {
        dispatch(changeCheckedTaskCA(id, idTask))
    }, [dispatch, id])

    const onClickFilterButtonHandler = useCallback((activeStatus: TodoItemStatus) => {
        setStatus(activeStatus)


    }, [])

    const onEditTodoHandler = useCallback((newTitle: string) => {
        dispatch(editTodolistCA(id, newTitle))
    }, [dispatch, id])

    const onEditTodoItemHandler = useCallback((idTask: string, newLabel: string) => {
        dispatch(editTitleTask(id, idTask, newLabel))
    }, [dispatch, id])
    return (
        <div className={style.wrapper}>
            <div className={style.titleWrapper}>
                <EditableSpan label={title} onEditHandler={onEditTodoHandler} variantTypography={"h4"}/>
                <Button size='small' onClick={handlerDeleteTodolist} variant="outlined" startIcon={<DeleteIcon/>}>
                    Delete
                </Button>
            </div>
            <AddField handlerAdd={handlerAddTodoTask}/>
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
})