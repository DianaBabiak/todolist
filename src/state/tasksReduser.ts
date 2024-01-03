import {TaskPriorities, TaskStatuses, TodoTasksType} from "../type.ts";
import {v1} from "uuid";
import {TasksType, UpdatePutTaskType} from "../api/commonAPI.ts";
import {GetTodolistsCAType} from "./todolistReducer.ts";
import {AppThunkResult} from "./store.ts";
import {tasksAPI} from "../api/tasksAPI.ts";


export type ActionTasksType =
    | DeleteTodolistCAType
    | DeleteTaskCAType
    | AddTodoCAType
    | AddTaskCAType
    | ChangeCheckedTaskCAType
    | EditTitleTaskCAType | GetTasksCAType | GetTodolistsCAType


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
            const {idTodo, newTitle} = action.payload as AddTaskCAType['payload']
            const newTask = {
                addedDate: '',
                deadline: '',
                description: '',
                id: v1(),
                order: 0,
                priority: TaskPriorities.Later,
                startDate: '',
                status: TaskStatuses.New,
                title: newTitle,
                todoListId: idTodo
            };
            return {...state, [idTodo]: [...state[idTodo], newTask]}
        }
        case "CHANGE STATUS": {
            const {idTodo, idTask, status} = action.payload as ChangeCheckedTaskCAType['payload']
            return {
                ...state, [idTodo]: state[idTodo].map(task => idTask === task.id
                    ? {...task, status}
                    : task)
            }
        }
        case "EDIT TITLE TASK": {
            const {idTodo, idTask, newTitle} = action.payload as EditTitleTaskCAType['payload']
            return {
                ...state,
                [idTodo]: state[idTodo].map(task => idTask === task.id
                    ? {...task, title: newTitle}
                    : task)
            }
        }
        case "GET TASKS FROM API": {
            console.log("GET TASKS FROM API")
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
export const deleteTodoCA = (idTodo: string) => {
    return {
        type: "DELETE TODO",
        payload: {
            idTodo
        } as const
    }
}

type DeleteTaskCAType = ReturnType<typeof deleteTaskCA>
export const deleteTaskCA = (idTodo: string, idTask: string) => {
    return {
        type: "DELETE TASK",
        payload: {
            idTodo,
            idTask
        }
    } as const
}

type AddTodoCAType = ReturnType<typeof addTodoCA>
export const addTodoCA = (idTodo: string) => {
    return {
        type: "ADD EMPTY ARRAY TASK",
        payload: {
            idTodo
        }
    } as const
}

type AddTaskCAType = ReturnType<typeof addTaskCA>
export const addTaskCA = (idTodo: string, newTitle: string) => {
    return {
        type: "ADD TASK",
        payload: {
            idTodo,
            newTitle
        }
    } as const
}

type ChangeCheckedTaskCAType = ReturnType<typeof changeCheckedTaskCA>
export const changeCheckedTaskCA = (idTodo: string, idTask: string, status: TaskStatuses) => {
    return {
        type: "CHANGE STATUS",
        payload: {
            idTodo,
            idTask,
            status
        }
    } as const
}

type EditTitleTaskCAType = ReturnType<typeof editTitleTask>
export const editTitleTask = (idTodo: string, idTask: string, newTitle: string) => {
    return {
        type: "EDIT TITLE TASK",
        payload: {
            idTodo,
            idTask,
            newTitle
        }
    } as const
}

type GetTasksCAType = ReturnType<typeof getTasksCA>
export const getTasksCA = (idTodo: string, data: TasksType) => {
    return {
        type: "GET TASKS FROM API",
        payload: {
            idTodo,
            data
        }
    } as const
}


export const getTasksTC = (id: string): AppThunkResult => (dispatch) => {
    tasksAPI.getTasks(id)
        .then((data) => dispatch(getTasksCA(id, data)))
        .catch((err) => console.log('err getTask', err))
}

export const deleteTaskTC = (idTodo: string, idTask: string): AppThunkResult => async (dispatch) => {
    try {
        const result = await tasksAPI.deleteTask(idTodo, idTask)
        if (result.resultCode === 0) {
            dispatch(deleteTaskCA(idTodo, idTask))
        }
    } catch (error) {
        console.log('delete task', error)
    }
}

export const createTaskTC = (idTodo: string, newTitle: string): AppThunkResult => async (dispatch) => {
    try {
        const result = await tasksAPI.createTask(idTodo, newTitle)
        if (result.resultCode === 0) {
            dispatch(addTaskCA(idTodo, newTitle))
        }
    } catch (error) {
        console.log('add task', error)
    }
}

export const editTitleTaskTC = (idTodo: string, idTask: string, newTitle: string): AppThunkResult => async (dispatch, getState) => {
    try {
        const state = getState()
        const tasks = state.tasks[idTodo]
        const task = tasks.find(t => t.id === idTask)
        const model:UpdatePutTaskType = {
            title: newTitle,
            description: task?.description,
            status: task?.status,
            priority: task?.priority,
            startDate: task?.startDate,
            deadline: task?.deadline
        }
        const result = await tasksAPI.updateTask(idTodo, idTask, model)
        if (result.resultCode === 0) {
            dispatch(editTitleTask(idTodo, idTask, newTitle))
        }
    } catch (error) {
        console.log('edit title task', error)
    }
}

export const changeCheckedTaskTC = (idTodo: string, idTask: string, status:TaskStatuses ): AppThunkResult => async (dispatch, getState) => {
    try {
        const state = getState()
        const tasks = state.tasks[idTodo]
        const task = tasks.find(t => t.id === idTask)
        const model:UpdatePutTaskType = {
            title: task?.title,
            description: task?.description,
            status: status,
            priority: task?.priority,
            startDate: task?.startDate,
            deadline: task?.deadline
        }
        const result = await tasksAPI.updateTask(idTodo, idTask, model)
        if (result.resultCode === 0) {
            dispatch(changeCheckedTaskCA(idTodo, idTask, status))
        }
    } catch (error) {
        console.log('edit title task', error)
    }
}



