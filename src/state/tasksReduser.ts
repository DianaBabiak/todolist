import {TodoTasksType} from "../propsType.ts";
import {v1} from "uuid";
import {idTodoOne, idTodoTwo} from "./todolistReducer.ts";


export type ActionTasksType =
    DeleteTodolistCAType
    | DeleteTaskCAType
    | AddTodoCAType
    | AddTaskCAType
    | ChangeCheckedTaskCAType
    | EditTitleTaskCAType

const initialState = {
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





export const tasksReducer = (state: TodoTasksType=initialState, action: ActionTasksType): TodoTasksType => {
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
                id: v1(),
                label: newTitle,
                checked: false
            };
            return {...state, [idTodo]: [...state[idTodo], newTask]}
        }
        case "CHANGE CHECKED": {
            const {idTodo, idTask} = action.payload as ChangeCheckedTaskCAType['payload']
            return {
                ...state, [idTodo]: state[idTodo].map(task => idTask === task.id
                    ? {...task, checked: !task.checked}
                    : task)
            }
        }
        case "EDIT TITLE TASK": {
            const {idTodo, idTask, newTitle} = action.payload as EditTitleTaskCAType['payload']
            return {
                ...state,
                [idTodo]: state[idTodo].map(task => idTask === task.id
                    ? {...task, label: newTitle}
                    : task)
            }
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
export const changeCheckedTaskCA = (idTodo: string, idTask: string) => {
    return {
        type: "CHANGE CHECKED",
        payload: {
            idTodo,
            idTask
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

