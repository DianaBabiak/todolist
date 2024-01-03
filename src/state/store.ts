import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {todolistReducer} from "./todolistReducer.ts";
import {tasksReducer} from "./tasksReduser.ts";
import {ThunkAction, thunk } from "redux-thunk"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const rootReducer = combineReducers({
    todolist:todolistReducer,
    tasks:tasksReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export type AppThunkResult<T = void> = ThunkAction<T, ReturnType<typeof rootReducer>, unknown, AnyAction>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootReducerType> = useSelector;
