import {combineReducers, legacy_createStore} from "redux";
import {todolistReducer} from "./todolistReducer.ts";
import {tasksReducer} from "./tasksReduser.ts";

const rootReducer = combineReducers({
    todolist:todolistReducer,
    tasks:tasksReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)