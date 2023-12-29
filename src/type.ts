import {TaskType} from "./api/commonAPI.ts";


export type TodoTasksType = Record<string, TaskType[]>

export enum TodoItemFilter {
    All = 'All',
    Active = 'Active',
    Completed = 'Completed'
}

export enum TaskStatuses {
    New=0,
    InProgress=1,
    Completed=2,
    Draft=3
}

export enum TaskPriorities {
    Low=0,
    Middle=1,
    Hi=2,
    Urgently=3,
    Later=4
}