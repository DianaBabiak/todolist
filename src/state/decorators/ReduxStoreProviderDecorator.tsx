import React from 'react'
import {Provider} from "react-redux";
import {combineReducers, legacy_createStore} from "redux";
import {v1} from "uuid";
import {tasksReducer} from "../tasksReduser.ts";
import {idTodoOne, idTodoTwo, todolistReducer} from "../todolistReducer.ts";
import {RootReducerType} from "../store.ts";

const rootReducer = combineReducers({
    todolist:todolistReducer,
    tasks:tasksReducer
})

export const initialGlobalState:RootReducerType = {
    todolist: [
        {
            title: 'Programming',
            id: idTodoOne
        },
        {
            title: 'Drinks',
            id: idTodoTwo
        }],
    tasks: {

        [idTodoOne]: [
            {id: v1(), label: 'JS', checked: true},
            {id: v1(), label: 'CSS', checked: false},
            {id: v1(), label: 'React', checked: true}
        ],
        [idTodoTwo]: [
            {id: v1(), label: 'Water', checked: false},
            {id: v1(), label: 'Coffee', checked: false},
            {id: v1(), label: 'Tea', checked: true}
        ]


    }
};
export type RootReducerTypeRoot = ReturnType<typeof rootReducer>
export const storyBookStore = legacy_createStore(rootReducer, initialGlobalState);


export const ReduxStoreProviderDecorator = (storyFn: () => React.ReactNode) => {
    return <Provider store={storyBookStore}>{storyFn()}</Provider>
}