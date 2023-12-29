import {useCallback, useState} from "react";
import {TaskStatuses, TodoItemFilter, TodoTasksType} from "../type.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../state/store.ts";
import {deleteTodolistCA, editTodolistCA} from "../state/todolistReducer.ts";
import {addTaskCA, changeCheckedTaskCA, deleteTaskCA, deleteTodoCA, editTitleTask} from "../state/tasksReduser.ts";


export const useTodolist = (id:string)=>{
    const [filter, setFilter] = useState(TodoItemFilter.All)
    const stateTasks = useSelector<RootReducerType, TodoTasksType>(store => store.tasks)
    const dispatch = useDispatch()

    const filterTasks = stateTasks[id].filter((item) => {
        if (filter === TodoItemFilter.All) {
            return item
        }
        return filter === TodoItemFilter.Completed
            ? item.status===TaskStatuses.Completed
            : item.status===TaskStatuses.New

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

    const onChangeChecked = useCallback((idTask: string, status:TaskStatuses) => {
        dispatch(changeCheckedTaskCA(id, idTask, status ))
    }, [dispatch, id])

    const onClickFilterButtonHandler = useCallback((activeStatus: TodoItemFilter) => {
        setFilter(activeStatus)


    }, [])

    const onEditTodoHandler = useCallback((newTitle: string) => {
        dispatch(editTodolistCA(id, newTitle))
    }, [dispatch, id])

    const onEditTodoItemHandler = useCallback((idTask: string, newLabel: string) => {
        dispatch(editTitleTask(id, idTask, newLabel))
    }, [dispatch, id])


    return {
        status: filter,
        filterTasks,
        onEditTodoHandler,
        handlerDeleteTodolist,
        handlerAddTodoTask,
        onDeleteTodoTask,
        onChangeChecked,
        onEditTodoItemHandler,
        onClickFilterButtonHandler
    }

}