import {v1} from "uuid";
import {TodolistType} from "../api/commonAPI.ts";
import {todolistsApi} from "../api/todolistsApi.ts";
import {AppThunkResult} from "./store.ts";
import {addTodoCA, deleteTodoCA} from "./tasksReduser.ts";


export type ActionType = AddTodolistCAType | DeleteTodolistCAType | EditTodolistCAType | GetTodolistsCAType

export const idTodoOne = v1()
export const idTodoTwo = v1()
const initialState: TodolistType[] = []
export const todolistReducer = (state: TodolistType[] = initialState, action: ActionType): TodolistType[] => {
    switch (action.type) {
        case "ADD TODO": {
            return [action.payload.data, ...state]
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
        case "GET TODOLISTS FROM API": {
            return action.payload.data
        }

        default:
            return state
    }


}

export type DeleteTodolistCAType = ReturnType<typeof deleteTodolistCA>
export const deleteTodolistCA = (idTodo: string) => {
    return {
        type: "DELETE TODO",
        payload: {
            idTodo
        }
    } as const
}

type AddTodolistCAType = ReturnType<typeof addTodolistCA>
export const addTodolistCA = (data:TodolistType) => {
    return {
        type: "ADD TODO",
        payload: {
            data
        }
    } as const
}

type EditTodolistCAType = ReturnType<typeof editTodolistCA>
export const editTodolistCA = (idTodo: string, newTitle: string) => {
    return {
        type: "EDIT TODO TITLE",
        payload: {
            idTodo,
            newTitle
        }
    } as const
}

export type GetTodolistsCAType = ReturnType<typeof getTodolistsCA>
export const getTodolistsCA = (data: TodolistType[]) => {
    return {
        type: "GET TODOLISTS FROM API",
        payload: {
            data
        }
    } as const
}


export const getTodolistsTC = (): AppThunkResult => (dispatch) => {
    todolistsApi.getTodolists().then(data => {
        dispatch(getTodolistsCA(data))
    }).catch((err) => console.log('err getTodo', err))
}

export const createTodolistTC = (newTitle:string): AppThunkResult => (dispatch) => {
    todolistsApi.createTodolist(newTitle).then(data=>{
        if(data.resultCode===0){
            dispatch(addTodolistCA(data.data.item))
            dispatch(addTodoCA(data.data.item.id))
        }
    }).catch(err=>console.log('create todo', err))

}

export const deleteTodolistTC =  (id:string): AppThunkResult => async (dispatch) => {
    try{
       const result= await todolistsApi.deleteTodolist(id)
        if(result.resultCode===0){
            dispatch(deleteTodolistCA(id))
            dispatch(deleteTodoCA(id))
        }
    } catch (error){
        console.log('delete todo', error)
    }
}

export const editTitleTodolistTC =  (id:string,newTitle:string): AppThunkResult => async (dispatch) => {
    try{
        const result= await todolistsApi.updateTodolist(id, newTitle)
        if(result.resultCode===0){
            dispatch(editTodolistCA(id, newTitle))
        }
    } catch (error){
        console.log('editTitleTodolist', error)
    }
}



