export interface TodoItemType{
    id: number
    label: string
    checked: boolean

}

export interface TodolistType {
    title: string
    id: number
    items: TodoItemType []

}

export enum TodoItemStatus {
    All = 'All',
    Active = 'Active',
    Completed='Completed'
}