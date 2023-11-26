import {TodolistType} from "../propsType.ts";
import {v1} from "uuid";

export type ActionType = AddTodolistCAType | DeleteTodolistCAType | EditTodolistCAType

export const todolistReducer = (state: TodolistType[], action: ActionType): TodolistType[] => {
    switch (action.type) {
        case "ADD TODO": {
            const newIdTodo = v1()
            const newTodo = {
                title: action.payload.newTitle,
                id: newIdTodo
            }
            action.payload.callback(newIdTodo)
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
export const addTodolistCA = (newTitle: string, callback: (newTodoId: string) => void) => {
    return {
        type: "ADD TODO",
        payload: {
            newTitle,
            callback,
        }
    }as const
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

