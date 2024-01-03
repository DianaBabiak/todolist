import {useCallback, useState} from "react";
import {TaskStatuses, TodoItemFilter} from "../type.ts";
import {useAppDispatch, useAppSelector} from "../state/store.ts";
import {deleteTodolistTC, editTitleTodolistTC} from "../state/todolistReducer.ts";
import {
    changeCheckedTaskTC,
    createTaskTC,
    deleteTaskTC,
    editTitleTaskTC
} from "../state/tasksReduser.ts";


export const useTodolist = (id: string) => {
    const [filter, setFilter] = useState(TodoItemFilter.All)
    const stateTasks = useAppSelector(({tasks}) => tasks)
    const dispatch = useAppDispatch()

    const filterTasks = stateTasks[id].filter((item) => {
        if (filter === TodoItemFilter.All) {
            return item
        }
        return filter === TodoItemFilter.Completed
            ? item.status === TaskStatuses.Completed
            : item.status === TaskStatuses.New

    })

    const handlerDeleteTodolist = useCallback(() => {
        dispatch(deleteTodolistTC(id))
    }, [dispatch, id])

    const onDeleteTodoTask = useCallback((idTask: string) => {
        dispatch(deleteTaskTC(id, idTask))
    }, [dispatch, id])

    const handlerAddTodoTask = useCallback((newTitle: string) => {
        dispatch(createTaskTC(id, newTitle))
    }, [dispatch, id])

    const onChangeChecked = useCallback((idTask: string, status: TaskStatuses) => {
        dispatch(changeCheckedTaskTC(id, idTask, status))
    }, [dispatch, id])

    const onClickFilterButtonHandler = useCallback((activeStatus: TodoItemFilter) => {
        setFilter(activeStatus)


    }, [])

    const onEditTodoHandler = useCallback((newTitle: string) => {
        dispatch(editTitleTodolistTC(id, newTitle))

    }, [dispatch, id])

    const onEditTodoItemHandler = useCallback((idTask: string, newLabel: string) => {
        dispatch(editTitleTaskTC(id, idTask, newLabel))
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