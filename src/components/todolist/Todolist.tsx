import {TodoItemStatus, TodolistType, TodoTasksType} from "../../propsType.ts";
import {TodoTask} from "../todoTask/TodoTask.tsx";
import {useState} from "react";
import Button from '@mui/material/Button';
import {AddField} from "../addField/AddField.tsx";
import {EditableSpan} from "../editableSpan/EditableSpan.tsx";
import FilterButton from "../filterButton/FilterButton.tsx";
import DeleteIcon from '@mui/icons-material/Delete';
import style from "./Todolist.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {addTaskCA, changeCheckedTaskCA, deleteTaskCA, deleteTodoCA, editTitleTask} from "../../state/tasksReduser.ts";
import {deleteTodolistCA, editTodolistCA} from "../../state/todolistReducer.ts";
import {RootReducerType} from "../../state/store.ts";


interface TodoListProps extends TodolistType {


}


export const Todolist = ({
                             title,
                             id,
                         }: TodoListProps) => {
    const [status, setStatus] = useState(TodoItemStatus.All)
    const stateTasks = useSelector<RootReducerType,TodoTasksType>(store =>store.tasks)
    const dispatch = useDispatch()

    const filterTasks = stateTasks[id].filter((item) => {
        if (status === TodoItemStatus.All) {
            return item
        }
        return status === TodoItemStatus.Completed
            ? item.checked
            : !item.checked

    })
    const handlerDeleteTodolist = () => {
        dispatch(deleteTodolistCA(id))
        dispatch(deleteTodoCA(id))
    }
    const onDeleteTodoTask = (idTask: string) => {
        dispatch(deleteTaskCA(id, idTask))
    }


    const handlerAddTodoTask = (newTitle: string) => {
        dispatch(addTaskCA(id, newTitle))

    }

    const onChangeChecked = (idTask: string) => {
        dispatch(changeCheckedTaskCA(id, idTask))
    }

    const onClickFilterButtonHandler = (activeStatus: TodoItemStatus) => {
        setStatus(activeStatus)


    }

    const onEditTodoHandler = (newTitle: string) => {
        dispatch(editTodolistCA(id, newTitle))
    }
    const onEditTodoItemHandler = (idTask: string, newLabel: string) => {
        dispatch(editTitleTask(id, idTask, newLabel))
    }
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
}