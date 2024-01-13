import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {todolistReducer, TodolistsActionType} from "./todolists/todolistReducer.ts";
import {ActionTasksType, tasksReducer} from "./tasks/tasksReduser.ts";
import {ThunkAction, thunk, ThunkDispatch} from "redux-thunk"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppActionType, appReducer} from "./app/appReducer.ts";

const rootReducer = combineReducers({
    todolist:todolistReducer,
    tasks:tasksReducer,
    app: appReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
export type RootState=ReturnType<typeof store.getState>

export type AppThunkResult<T = void> = ThunkAction<T, RootState, unknown, AppDispatchType>

export type AppDispatchType = ActionTasksType | TodolistsActionType | AppActionType
export type AppDispatch = ThunkDispatch<RootState, unknown,AppDispatchType>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootReducerType> = useSelector;
