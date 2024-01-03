import {useEffect, useState} from "react";
import {todolistsApi} from "../api/todolistsApi.ts";
import {CommonAPIType, TodolistType} from "../api/commonAPI.ts";


export default {
    title: 'API TODOLIST'
}

export const GetTodolists = () => {
    const [date, setDate] = useState<TodolistType[] | null>(null)
    useEffect(() => {
        todolistsApi.getTodolists()
            .then((data) => {
                console.log('data', data)
                setDate(data)
            })
            .catch((error) => {
                console.log('error', error.message)
            })
    }, [])

    return <div>{JSON.stringify(date)}</div>
}
export const CreateTodolist = () => {
    const [date, setDate] = useState<CommonAPIType<{ item: TodolistType }> | null>(null)
    const [title, setTitle] = useState('')
    const onClick = () => {
        todolistsApi.createTodolist(title)
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
            <button onClick={onClick}>create todolist</button>
        </div>
    </div>
}
export const DeleteTodolist = () => {
    const [date, setDate] = useState<CommonAPIType<object> | null>(null)
    const [idTodo, setIdTodo] = useState('')
    const onClick = () => {
        todolistsApi.deleteTodolist(idTodo)
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
            <input value={idTodo} placeholder={'idTodo'} onChange={(e) => {
                setIdTodo(e.currentTarget.value)
            }}/>
            <button onClick={onClick}>delete todolist</button>
        </div>
    </div>


}
export const UpdateTodolist = () => {
    const [date, setDate] = useState<null | CommonAPIType<object>>(null)
    const [title, setTitle] = useState('')
    const [idTodo, setIdTodo] = useState('')
    const onClick = () => {
        todolistsApi.updateTodolist(idTodo, title)
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
            <input value={idTodo} placeholder={'idTodo'} onChange={(e) => {
                setIdTodo(e.currentTarget.value)
            }}/>

            <button onClick={onClick}>update todolist</button>
        </div>
    </div>


}



