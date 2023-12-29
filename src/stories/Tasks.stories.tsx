import {useState} from "react";
import {tasksAPI} from "../api/tasksAPI.ts";
import {CommonAPIType, TasksType, TaskType} from "../api/commonAPI.ts";
import {TaskPriorities, TaskStatuses} from "../type.ts";


export default {
    title: 'API TASKS'
}
// const idTodo = '0af1d589-c976-4f34-9d70-33b5bcf4d660'
export const GetTask = () => {
    const [date, setDate] = useState<TasksType | null>(null)
    const [idTodo, setIdTodo] = useState('')

    const onClick = ()=>{
        tasksAPI.getTasks(idTodo)
            .then((data) => {
                console.log('data', data)
                setDate(data)
            })
            .catch((error) => {
                console.log('error', error.message)
            })
    }
    return <div>{JSON.stringify(date)}
    <div>
        <input  value={idTodo} placeholder={'idTodo'} onChange={(e) => {
            setIdTodo(e.currentTarget.value)
        }}/>
        <button onClick={onClick}>get tasks</button>
    </div>
    </div>


}
export const CreateTask = () => {
    const [date, setDate] = useState<CommonAPIType | null>(null)
    const [idTodo, setIdTodo] = useState('')
    const [title, setTitle] = useState('')
    const onClick = ()=>{
        tasksAPI.createTask(idTodo, title)
            .then((data) => {
                console.log('data', data)
                setDate(data)
            })
            .catch((error) => {
                console.log('error', error.message)
            })
    }

    return <div>{JSON.stringify(date)}
        <div>
            <input  value={idTodo} placeholder={'idTodo'} onChange={(e) => {
                setIdTodo(e.currentTarget.value)
            }}/>
            <input value={title} placeholder={'title'} onChange={(e) => {
                setTitle(e.currentTarget.value)
            }}/>
            <button onClick={onClick}>creat task</button>
        </div>

    </div>
}
export const DeleteTask = () => {
    const [date, setDate] = useState<CommonAPIType | null>(null)
    const [idTask, setIdTask] = useState('')
    const [idTodo, setIdTodo] = useState('')

    const onClick = ()=>{
        tasksAPI.deleteTask(idTodo, idTask)
            .then((data) => {
                console.log('data', data)
                setDate(data)
            })
            .catch((error) => {
                console.log('error', error.message)
            })
    }

    return <div>{JSON.stringify(date)}
        <div>
            <input value={idTask} placeholder={'idTask'} onChange={(e) => {
                setIdTask(e.currentTarget.value)
            }}/>
            <input value={idTodo} placeholder={'idTodo'} onChange={(e) => {
                setIdTodo(e.currentTarget.value)
            }}/>
            <button onClick={onClick}>delete task</button>
        </div>
    </div>


}
export const UpdateTask = () => {
    const [title, setTitle] = useState('')
    const [idTask, setIdTask] = useState('')
    const [idTodo, setIdTodo] = useState('')
    const [status, setStatus] = useState(TaskStatuses.Completed)
    const [priority, setPriority] = useState(TaskPriorities.Urgently)

    const [date, setDate] = useState<null | CommonAPIType<{ item: TaskType }>>(null)

    const onclick = () => {
        tasksAPI.updateTask(idTodo, idTask, {
            title,
            description: '',
            status,
            priority,
            startDate: null,
            deadline: null
        })
            .then((data) => {
                console.log('data', data)
                setDate(data)
            })
            .catch((error) => {
                console.log('error', error.message)
            })
    }

    return <div>{JSON.stringify(date)}
        <div>
            <input value={title} placeholder={'title'} onChange={(e) => {
                setTitle(e.currentTarget.value)
            }}/>
            <input value={idTask} placeholder={'idTask'} onChange={(e) => {
                setIdTask(e.currentTarget.value)
            }}/>
            <input value={idTodo} placeholder={'idTodo'} onChange={(e) => {
                setIdTodo(e.currentTarget.value)
            }}/>
            <input value={status} placeholder={'status'} onChange={(e) => {
                setStatus(+e.currentTarget.value)
            }}/>
            <input  value={priority} placeholder={'priority'} onChange={(e) => {
                setPriority(+e.currentTarget.value)
            }}/>
            <button onClick={onclick}>update task</button>
        </div>


    </div>


}
