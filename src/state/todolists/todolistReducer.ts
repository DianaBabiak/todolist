import {todolistsApi} from "../../api/todolistsApi.ts";
import {AppThunkResult} from "../store.ts";
import {addTodoCA, deleteTodoCA} from "../tasks/tasksReduser.ts";
import {changeStatusLoadingAC} from "../app/appReducer.ts";
import {errorMessageOnDataRetrieval} from "../../api/errorMessageOnDataRetrieval.ts";
import {StatusLoading, TodolistStateType} from "../type.ts";
import {TodolistType} from "../../api/commonAPI.ts";
import {errorWithStatus200} from "../../api/errorWithStatus200.ts";

export type GetTodolistsCAType = ReturnType<typeof getTodolistsCA>
export type TodolistsActionType = GetTodolistsCAType
    | ReturnType<typeof addTodolistCA>
    | ReturnType<typeof deleteTodolistCA>
    | ReturnType<typeof editTodolistCA>
    | ReturnType<typeof changeStatusTodolistCA>


const initialState: TodolistStateType[] = []
export const todolistReducer = (state: TodolistStateType[] = initialState, action: TodolistsActionType): TodolistStateType[] => {
    switch (action.type) {
        case "ADD TODO": {
            const newTodo = {
                ...action.payload.data,
                entityStatus: StatusLoading.idle
            }
            return [newTodo, ...state]
        }
        case "DELETE TODO": {
            return state.filter(todo => todo.id !== action.payload.idTodo);
        }
        case "EDIT TODO TITLE": {
            return state.map(todo => todo.id === action.payload.idTodo ? {
                ...todo,
                title: action.payload.newTitle
            } : todo)
        }
        case "CHANGE STATUS TODOLIST":{
            return state.map(todo => todo.id === action.payload.idTodo ? {
                ...todo,
                entityStatus: action.payload.status
            } : todo)
        }
        case "GET TODOLISTS FROM API": {

            return action.payload.data.map(todo => ({...todo, entityStatus: StatusLoading.idle}))
        }
        default:
            return state
    }
}
export const deleteTodolistCA = (idTodo: string) => ({type: "DELETE TODO", payload: {idTodo}} as const)
export const addTodolistCA = (data: TodolistType) => ({type: "ADD TODO", payload: {data}} as const)
export const editTodolistCA = (idTodo: string, newTitle: string) => ({
    type: "EDIT TODO TITLE",
    payload: {idTodo, newTitle}
} as const)
export const changeStatusTodolistCA = (idTodo: string, status: StatusLoading) => ({
    type: "CHANGE STATUS TODOLIST",
    payload: {idTodo, status}
} as const)
export const getTodolistsCA = (data: TodolistType[]) => ({
    type: "GET TODOLISTS FROM API",
    payload: {
        data
    }
} as const)

export const getTodolistsTC = (): AppThunkResult => async (dispatch) => {
    dispatch(changeStatusLoadingAC(StatusLoading.loading))
    try {
        const result = await todolistsApi.getTodolists()
        dispatch(getTodolistsCA(result))
        dispatch(changeStatusLoadingAC(StatusLoading.succeeded))
    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error, dispatch)
        dispatch(changeStatusLoadingAC(StatusLoading.failed))
    }
}
export const createTodolistTC = (newTitle: string): AppThunkResult => async (dispatch) => {
    dispatch(changeStatusLoadingAC(StatusLoading.loading))
    try {
        const result = await todolistsApi.createTodolist(newTitle)
        if (result.resultCode === 0) {
            dispatch(addTodolistCA(result.data.item))
            dispatch(addTodoCA(result.data.item.id))
            dispatch(changeStatusLoadingAC(StatusLoading.succeeded))
            return
        }
        errorWithStatus200(result,dispatch)

    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error, dispatch)
        dispatch(changeStatusLoadingAC(StatusLoading.failed))
    }
}
export const deleteTodolistTC = (id: string): AppThunkResult => async (dispatch) => {
    dispatch(changeStatusLoadingAC(StatusLoading.loading))
    dispatch(changeStatusTodolistCA(id,StatusLoading.loading))
    try {
        const result = await todolistsApi.deleteTodolist(id)
        if (result.resultCode === 0) {
            dispatch(deleteTodolistCA(id))
            dispatch(deleteTodoCA(id))
            dispatch(changeStatusLoadingAC(StatusLoading.succeeded))
            return
        }
        errorWithStatus200(result,dispatch)
    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error, dispatch)
        dispatch(changeStatusLoadingAC(StatusLoading.failed))
    }
}
export const editTitleTodolistTC = (id: string, newTitle: string): AppThunkResult => async (dispatch) => {
    dispatch(changeStatusLoadingAC(StatusLoading.loading))
    try {
        const result = await todolistsApi.updateTodolist(id, newTitle)
        if (result.resultCode === 0) {
            dispatch(editTodolistCA(id, newTitle))
            dispatch(changeStatusLoadingAC(StatusLoading.succeeded))
            return
        }
        errorWithStatus200(result,dispatch)
    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error, dispatch)
        dispatch(changeStatusLoadingAC(StatusLoading.failed))
    }
}



