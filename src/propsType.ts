export interface TodoItemType {
    id: string
    label: string
    checked: boolean

}

export interface TodolistType {
    title: string
    id: string
    items: TodoItemType []

}

export enum TodoItemStatus {
    All = 'All',
    Active = 'Active',
    Completed = 'Completed'
}