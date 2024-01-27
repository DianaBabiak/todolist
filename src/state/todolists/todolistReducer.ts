import {todolistsApi} from "../../api/todolistsApi.ts";
import {AppThunkResult} from "../store.ts";
import {getTasksTC} from "../tasks/tasksReduser.ts";
import {changeStatusLoadingAC} from "../app/appReducer.ts";
import {errorMessageOnDataRetrieval} from "../../api/errorMessageOnDataRetrieval.ts";
import {StatusLoading, TodolistStateType} from "../type.ts";
import {TodolistType} from "../../api/commonAPI.ts";
import {errorWithStatus200} from "../../api/errorWithStatus200.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {clearTasksAndTodolists} from "../commonActions.ts";

const initialState: TodolistStateType[] = []

const todolistSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        deleteTodolistCA(state, action: PayloadAction<{ idTodo: string }>) {
            const index = state.findIndex((todo) => todo.id === action.payload.idTodo)
            if (index !== -1) state.splice(index, 1);
        },
        addTodolistCA(state, action: PayloadAction<{ data: TodolistType }>) {
            const newTodo = {
                ...action.payload.data,
                entityStatus: StatusLoading.idle
            }
            state.unshift(newTodo)
        },
        editTodolistCA(state, action: PayloadAction<{ idTodo: string, newTitle: string }>) {
            const index = state.findIndex((todo) => todo.id === action.payload.idTodo)
            if (index !== -1) {
                state[index].title = action.payload.newTitle
            }
        },
        changeStatusTodolistCA(state, action: PayloadAction<{ idTodo: string, status: StatusLoading }>) {
            const index = state.findIndex((todo) => todo.id === action.payload.idTodo)
            if (index !== -1) {
                state[index].entityStatus = action.payload.status
            }
        },
        getTodolistsCA(_, action: PayloadAction<{ data: TodolistType[] }>) {
            return action.payload.data.map(todo => ({...todo, entityStatus: StatusLoading.idle}))
        },


    },
    extraReducers: (builder) => {
        builder.addCase(clearTasksAndTodolists, () => {
            return [];
        });
    }
})
export const todolistReducer = todolistSlice.reducer
export const {
    deleteTodolistCA,
    addTodolistCA,
    editTodolistCA,
    changeStatusTodolistCA,
    getTodolistsCA
} = todolistSlice.actions

export const getTodolistsTC = (): AppThunkResult => async (dispatch) => {
    dispatch(changeStatusLoadingAC({ statusLoading: StatusLoading.loading }))
    try {
        const result = await todolistsApi.getTodolists()
        dispatch(getTodolistsCA({data:result}))
        dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.succeeded}))
        result.forEach((todo) => dispatch(getTasksTC(todo.id)))
    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error, dispatch)
        dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.failed}))
    }
}
export const createTodolistTC = (newTitle: string): AppThunkResult => async (dispatch) => {
    dispatch(changeStatusLoadingAC({ statusLoading: StatusLoading.loading }))
    try {
        const result = await todolistsApi.createTodolist(newTitle)
        if (result.resultCode === 0) {
            dispatch(addTodolistCA({data:result.data.item}))
            dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.succeeded}))
            return
        }
        errorWithStatus200(result, dispatch)

    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error, dispatch)
        dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.failed}))
    }
}
export const deleteTodolistTC = (id: string): AppThunkResult => async (dispatch) => {
    dispatch(changeStatusLoadingAC({ statusLoading: StatusLoading.loading }))
    dispatch(changeStatusTodolistCA({idTodo:id, status:StatusLoading.loading} ))
    try {
        const result = await todolistsApi.deleteTodolist(id)
        if (result.resultCode === 0) {
            dispatch(deleteTodolistCA({idTodo:id}))
            dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.succeeded}))
            return
        }
        errorWithStatus200(result, dispatch)
    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error, dispatch)
        dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.failed}))
    }
}
export const editTitleTodolistTC = (id: string, newTitle: string): AppThunkResult => async (dispatch) => {
    dispatch(changeStatusLoadingAC({ statusLoading: StatusLoading.loading }))
    try {
        const result = await todolistsApi.updateTodolist(id, newTitle)
        if (result.resultCode === 0) {
            dispatch(editTodolistCA({idTodo:id, newTitle}))
            dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.succeeded}))
            return
        }
        errorWithStatus200(result, dispatch)
    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error, dispatch)
        dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.failed}))
    }
}



