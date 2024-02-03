import React from "react";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { v1 } from "uuid";
import { tasksReducer } from "../tasks/tasksReduser.ts";

import { StatusLoading, TaskPriorities, TaskStatuses } from "../type.ts";
import { todolistReducer } from "../todolists/todolistReducer.ts";
import { appReducer } from "../app/appReducer.ts";
import { RootState } from "../store.ts";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";

export const idTodoTwo = v1();
export const idTodoOne = v1();

const rootReducer = combineReducers({
  todolist: todolistReducer,
  tasks: tasksReducer,
  app: appReducer,
});

export const initialGlobalState: RootState = {
  todolist: [
    {
      title: "Programming",
      id: idTodoOne,
      addedDate: "",
      order: 0,
      entityStatus: StatusLoading.idle,
    },
    {
      title: "Drinks",
      id: idTodoTwo,
      addedDate: "",
      order: 0,
      entityStatus: StatusLoading.loading,
    },
  ],
  tasks: {
    [idTodoOne]: [
      {
        addedDate: "",
        deadline: "",
        description: "",
        id: v1(),
        order: 0,
        priority: TaskPriorities.Low,
        startDate: "",
        status: TaskStatuses.Completed,
        title: "JS",
        todoListId: idTodoOne,
      },
      {
        addedDate: "",
        deadline: "",
        description: "",
        id: v1(),
        order: 0,
        priority: TaskPriorities.Low,
        startDate: "",
        status: TaskStatuses.New,
        title: "HTML",
        todoListId: idTodoOne,
      },
      {
        addedDate: "",
        deadline: "",
        description: "",
        id: v1(),
        order: 0,
        priority: TaskPriorities.Low,
        startDate: "",
        status: TaskStatuses.Completed,
        title: "React",
        todoListId: idTodoOne,
      },
    ],
    [idTodoTwo]: [
      {
        addedDate: "",
        deadline: "",
        description: "",
        id: v1(),
        order: 0,
        priority: TaskPriorities.Low,
        startDate: "",
        status: TaskStatuses.Completed,
        title: "Milk",
        todoListId: idTodoTwo,
      },
      {
        addedDate: "",
        deadline: "",
        description: "",
        id: v1(),
        order: 0,
        priority: TaskPriorities.Low,
        startDate: "",
        status: TaskStatuses.New,
        title: "Water",
        todoListId: idTodoTwo,
      },
      {
        addedDate: "",
        deadline: "",
        description: "",
        id: v1(),
        order: 0,
        priority: TaskPriorities.Low,
        startDate: "",
        status: TaskStatuses.Completed,
        title: "Tea",
        todoListId: idTodoTwo,
      },
    ],
  },
  app: {
    statusLoading: StatusLoading.idle,
    errorMessage: null,
    isAuth: false,
    authUser: {
      id: 2,
      email: "dibabiak@gmail.com",
      login: "Dziana",
    },
    initialization: true,
  },
};
export type RootReducerTypeRoot = ReturnType<typeof rootReducer>;
export const storyBookStore = configureStore({
  reducer: rootReducer,
  preloadedState: initialGlobalState,
});

export const ReduxStoreProviderDecorator = (storyFn: () => React.ReactNode) => {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <Provider store={storyBookStore}>{storyFn()}</Provider>
    </MemoryRouter>
  );
};
