import axios from "axios";
import {TaskPriorities, TaskStatuses} from "../type.ts";

export const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "d9b8b59f-7383-4494-9d96-4769d9f357f7"
    }
}

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    ...settings
})

export interface TodolistType {
    id: string;
    title: string;
    addedDate: string;
    order: number;
}

export interface TaskType {
    addedDate: string
    deadline: null | string
    description: null | string
    id: string
    order: number
    priority: TaskPriorities
    startDate: null | string
    status: TaskStatuses
    title: string
    todoListId: string
}

export interface TasksType  {
    items: TaskType[],
    totalCount: number,
    error: null|string
}

export type CommonAPIType<Data=object> = {
    resultCode: number
    messages: string[],
    data: Data,
    fieldsErrors:[]
}

export type UpdatePutTaskType = {
    title?: string
    description?: string | null
    status?: TaskStatuses
    priority?: TaskPriorities
    startDate?: null | string
    deadline?: null | string
}