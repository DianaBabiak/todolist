import {AnyAction, combineReducers,} from "redux";
import {todolistReducer} from "./todolists/todolistReducer.ts";
import {tasksReducer} from "./tasks/tasksReduser.ts";
import  { ThunkAction, ThunkDispatch,thunk } from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appReducer} from "./app/appReducer.ts";
import {configureStore,} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    todolist:todolistReducer,
    tasks:tasksReducer,
    app: appReducer
})


export type RootState = ReturnType<typeof rootReducer>
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})


export type AppThunkResult<T = void> = ThunkAction<T, RootState, unknown, AnyAction>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
