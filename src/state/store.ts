import { todolistReducer } from "./todolists/todolistReducer.ts";
import { tasksReducer } from "./tasks/tasksReduser.ts";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { appReducer } from "./app/appReducer.ts";
import { configureStore, UnknownAction } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({
  reducer: {
    todolist: todolistReducer,
    tasks: tasksReducer,
    app: appReducer,
  },
});

export type AppThunkResult<T = void> = ThunkAction<
  T,
  RootState,
  unknown,
  UnknownAction
>;
export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
