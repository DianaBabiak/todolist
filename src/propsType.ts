export interface TodoTaskType {
    id: string
    label: string
    checked: boolean

}

export type TodoTasksType = Record<string, TodoTaskType[]>


export interface TodolistType {
    title: string
    id: string

}

export enum TodoItemStatus {
    All = 'All',
    Active = 'Active',
    Completed = 'Completed'
}