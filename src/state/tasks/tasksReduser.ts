import {StatusLoading, TaskPriorities, TaskStatuses, TodoTasksType} from "../type.ts";
import {TasksType, TaskType, UpdatePutTaskType} from "../../api/commonAPI.ts";
import {GetTodolistsCAType} from "../todolists/todolistReducer.ts";
import {AppThunkResult} from "../store.ts";
import {tasksAPI} from "../../api/tasksAPI.ts";
import {changeStatusLoadingAC} from "../app/appReducer.ts";
import {errorMessageOnDataRetrieval} from "../../api/errorMessageOnDataRetrieval.ts";
import {errorWithStatus200} from "../../api/errorWithStatus200.ts";

export type ActionTasksType =
    | DeleteTodolistCAType
    | DeleteTaskCAType
    | AddTodoCAType
    | AddTaskCAType
    | UpdateTaskCAType
    | GetTasksCAType
    | GetTodolistsCAType

const initialState: TodoTasksType = {}
export const tasksReducer = (state: TodoTasksType = initialState, action: ActionTasksType): TodoTasksType => {
    switch (action.type) {
        case "DELETE TODO": {
            const updatedTasks = {...state};
            delete updatedTasks[action.payload.idTodo];
            return updatedTasks
        }
        case "DELETE TASK": {
            const {idTodo, idTask} = action.payload as DeleteTaskCAType['payload']
            return {...state, [idTodo]: state[idTodo].filter(item => item.id !== idTask)}
        }
        case "ADD EMPTY ARRAY TASK": {
            return {...state, [action.payload.idTodo]: []}
        }
        case "ADD TASK": {
            const {data} = action.payload as AddTaskCAType['payload']
            return {...state, [data.todoListId]: [...state[data.todoListId], data]}
        }
        case "UPDATE_TASK": {
            const {task} = action.payload as UpdateTaskCAType['payload']
            return {
                ...state,
                [task.todoListId]: state[task.todoListId].map(t => task.id === t.id
                    ? {...task}
                    : t)
            }
        }
        case "GET TASKS FROM API": {
            const {payload} = action as GetTasksCAType
            return {
                ...state,
                [payload.idTodo]: payload.data.items
            }
        }
        case "GET TODOLISTS FROM API": {
            const {payload} = action as GetTodolistsCAType
            return payload.data.reduce<TodoTasksType>((acc, todo) => {
                return {...acc, [todo.id]: []}
            }, state)
        }
        default:
            return state
    }
}

type DeleteTodolistCAType = ReturnType<typeof deleteTodoCA>
export const deleteTodoCA = (idTodo: string) => ({
        type: "DELETE TODO",
        payload: {
            idTodo
        }
    } as const)
type DeleteTaskCAType = ReturnType<typeof deleteTaskCA>
export const deleteTaskCA = (idTodo: string, idTask: string) => ({
        type: "DELETE TASK",
        payload: {
            idTodo,
            idTask
        }
    } as const)
type AddTodoCAType = ReturnType<typeof addTodoCA>
export const addTodoCA = (idTodo: string) => ({
        type: "ADD EMPTY ARRAY TASK",
        payload: {
            idTodo
        }
    } as const)
type AddTaskCAType = ReturnType<typeof addTaskCA>
export const addTaskCA = (data: TaskType) => ({
        type: "ADD TASK",
        payload: {
            data
        }
    } as const)
type UpdateTaskCAType = ReturnType<typeof updateTaskCA>
export const updateTaskCA = (task:TaskType) => ({
        type: "UPDATE_TASK",
        payload: {
            task
        }
    } as const)
type GetTasksCAType = ReturnType<typeof getTasksCA>
export const getTasksCA = (idTodo: string, data: TasksType) => ({
        type: "GET TASKS FROM API",
        payload: {
            idTodo,
            data
        }
    } as const)

export const getTasksTC = (id: string): AppThunkResult => async (dispatch) => {
    dispatch(changeStatusLoadingAC(StatusLoading.loading))
    try{
        const result= await tasksAPI.getTasks(id)
        dispatch(getTasksCA(id, result))
        dispatch(changeStatusLoadingAC(StatusLoading.succeeded))
    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error,dispatch)
        dispatch(changeStatusLoadingAC(StatusLoading.failed))
        }
}
export const deleteTaskTC = (idTodo: string, idTask: string): AppThunkResult => async (dispatch) => {
    dispatch(changeStatusLoadingAC(StatusLoading.loading))
    try {
        const result = await tasksAPI.deleteTask(idTodo, idTask)
        if (result.resultCode === 0) {
            dispatch(deleteTaskCA(idTodo, idTask))
            dispatch(changeStatusLoadingAC(StatusLoading.succeeded))
        }
        errorWithStatus200(result,dispatch)
    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error,dispatch)
        dispatch(changeStatusLoadingAC(StatusLoading.failed))
    }
}
export const createTaskTC = (idTodo: string, newTitle: string): AppThunkResult => async (dispatch) => {
    dispatch(changeStatusLoadingAC(StatusLoading.loading))
    try {
        const result = await tasksAPI.createTask(idTodo, newTitle)
        if (result.resultCode === 0) {
            dispatch(addTaskCA(result.data.item))
            dispatch(changeStatusLoadingAC(StatusLoading.succeeded))
        }
        errorWithStatus200(result,dispatch)
    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error,dispatch)
        dispatch(changeStatusLoadingAC(StatusLoading.failed))
    }
}

export type UpdateTaskType = {
    title?: string
    description?: string | null
    status?: TaskStatuses
    priority?: TaskPriorities
    startDate?: null | string
    deadline?: null | string
}
export const updateTaskTC = (idTodo: string, idTask: string, modelTask: UpdateTaskType): AppThunkResult => async (dispatch, getState) => {
    dispatch(changeStatusLoadingAC(StatusLoading.loading))
    try {
        const state = getState()
        const tasks = state.tasks[idTodo]
        const task = tasks.find(t => t.id === idTask)
        if (!task) {
            console.warn('tasks are empty')
            return
        }
        const model: UpdatePutTaskType = {
            title: task.title,

            description: task.description,
            status: task.status,
            priority: task.priority,
            startDate: task.startDate,
            deadline: task.deadline,
            ...modelTask
        }
        const result = await tasksAPI.updateTask(idTodo, idTask, model)
        if (result.resultCode === 0) {
            dispatch(updateTaskCA(result.data.item))
            dispatch(changeStatusLoadingAC(StatusLoading.succeeded))
        }
        errorWithStatus200(result,dispatch)
    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error,dispatch)
        dispatch(changeStatusLoadingAC(StatusLoading.failed))
    }
}





