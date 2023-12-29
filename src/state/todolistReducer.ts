import {v1} from "uuid";
import {TodolistType} from "../api/commonAPI.ts";


export type ActionType = AddTodolistCAType | DeleteTodolistCAType | EditTodolistCAType

export const idTodoOne = v1()
export const idTodoTwo = v1()
const initialState= [
    {
        title: 'Programming',
        id: idTodoOne,
        addedDate: '',
        order: 0
    },
    {
        title: 'Drinks',
        id: idTodoTwo,
        addedDate: '',
        order: 0
    }]
export const todolistReducer = (state: TodolistType[]=initialState, action: ActionType): TodolistType[] => {
    switch (action.type) {
        case "ADD TODO": {
            const newTodo = {
                id: action.payload.newTodoId,
                title: action.payload.newTitle,
                addedDate: '',
                order: 0
            }
            return [...state, newTodo]
        }
        case "DELETE TODO": {
            return state.filter(todo => todo.id !== action.payload.idTodo);
        }
        case "EDIT TODO TITLE": {
            return state.map(todo => todo.id === action.payload.idTodo ? {...todo, title: action.payload.newTitle} : todo)
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
export const addTodolistCA = (newTodoId: string, newTitle: string,) => {
    return {
        type: "ADD TODO",
        payload: {
            newTodoId,
            newTitle,
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

