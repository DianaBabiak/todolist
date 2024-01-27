import {StatusLoading, TaskPriorities, TaskStatuses, TodoTasksType} from "../type.ts";
import {TaskType, UpdatePutTaskType} from "../../api/commonAPI.ts";
import {
    addTodolistCA,
    deleteTodolistCA,
    getTodolistsCA,
} from "../todolists/todolistReducer.ts";
import {AppThunkResult} from "../store.ts";
import {tasksAPI} from "../../api/tasksAPI.ts";
import {changeStatusLoadingAC} from "../app/appReducer.ts";
import {errorMessageOnDataRetrieval} from "../../api/errorMessageOnDataRetrieval.ts";
import {errorWithStatus200} from "../../api/errorWithStatus200.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {clearTasksAndTodolists} from "../commonActions.ts";

const initialState: TodoTasksType = {}

const tasksSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        deleteTaskCA(state, action: PayloadAction<{ idTodo: string, idTask: string }>) {
            const tasks = state[action.payload.idTodo];
            const index = tasks.findIndex((t) => t.id === action.payload.idTask);
            if (index !== -1) tasks.splice(index, 1)
        },
        addTaskCA(state, action: PayloadAction<{ data: TaskType }>) {
            state[action.payload.data.todoListId].unshift(action.payload.data)
        },
        updateTaskCA(state, action: PayloadAction<{ task: TaskType }>) {
            const index = state[action.payload.task.todoListId].findIndex(t => action.payload.task.id === t.id)
            if (index !== -1) {
                state[action.payload.task.todoListId][index] = {...action.payload.task}
            }
        },
        getTasksCA(state, action: PayloadAction<{ idTodo: string, data: TaskType[] }>) {
            state[action.payload.idTodo] = action.payload.data


        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(clearTasksAndTodolists, () => {
                return {};
            })
            .addCase(getTodolistsCA, (state, action) => {
                console.log("+++++++++++")
                action.payload.data.forEach((tl) => {
                    state[tl.id] = [];
                })
            })
            .addCase(deleteTodolistCA, (state, action) => {
                delete state[action.payload.idTodo];
            })
            .addCase(addTodolistCA, (state, action) => {
                state[action.payload.data.id] = []
            })

    }
})

export const tasksReducer = tasksSlice.reducer

export const {deleteTaskCA, getTasksCA, addTaskCA, updateTaskCA} = tasksSlice.actions


export const getTasksTC = (id: string): AppThunkResult => async (dispatch) => {
    dispatch(changeStatusLoadingAC({ statusLoading: StatusLoading.loading }))
    try {
        const result = await tasksAPI.getTasks(id)
        dispatch(getTasksCA({idTodo:id, data:result.items}))
        dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.succeeded}))
    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error, dispatch)
        dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.failed}))
    }
}
export const deleteTaskTC = (idTodo: string, idTask: string): AppThunkResult => async (dispatch) => {
    dispatch(changeStatusLoadingAC({ statusLoading: StatusLoading.loading }))
    try {
        const result = await tasksAPI.deleteTask(idTodo, idTask)
        if (result.resultCode === 0) {
            dispatch(deleteTaskCA({idTodo,idTask}))
            dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.succeeded}))
            return
        }
        errorWithStatus200(result, dispatch)
    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error, dispatch)
        dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.failed}))
    }
}
export const createTaskTC = (idTodo: string, newTitle: string): AppThunkResult => async (dispatch) => {
    dispatch(changeStatusLoadingAC({ statusLoading: StatusLoading.loading }))
    try {
        const result = await tasksAPI.createTask(idTodo, newTitle)
        if (result.resultCode === 0) {
            dispatch(addTaskCA({data:result.data.item}))
            dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.succeeded}))
            return
        }
        errorWithStatus200(result, dispatch)
    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error, dispatch)
        dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.failed}))
    }
}

export type UpdateTaskType = {
    title?: string
    description?: string | null
    status?: TaskStatuses
    priority?: TaskPriorities
    startDate?: null | string
    deadline?: null | string
}
export const updateTaskTC = (idTodo: string, idTask: string, modelTask: UpdateTaskType): AppThunkResult => async (dispatch, getState) => {
    dispatch(changeStatusLoadingAC({ statusLoading: StatusLoading.loading }))
    try {
        const state = getState()
        const tasks = state.tasks[idTodo]
        const task = tasks.find(t => t.id === idTask)
        if (!task) {
            console.warn('tasks are empty')
            return
        }
        const model: UpdatePutTaskType = {
            title: task.title,

            description: task.description,
            status: task.status,
            priority: task.priority,
            startDate: task.startDate,
            deadline: task.deadline,
            ...modelTask
        }
        const result = await tasksAPI.updateTask(idTodo, idTask, model)
        if (result.resultCode === 0) {
            dispatch(updateTaskCA({task:result.data.item}))
            dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.succeeded}))
            return
        }
        errorWithStatus200(result, dispatch)
    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error, dispatch)
        dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.failed}))
    }
}





