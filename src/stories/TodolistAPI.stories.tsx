import {useEffect, useState} from "react";
import {todolistsApi} from "../api/todolistsApi.ts";
import {CommonAPIType, TodolistType} from "../api/commonAPI.ts";




export default {
    title: 'API TODOLIST'
}

export const GetTodolists = () => {
    const [date, setDate] = useState<TodolistType[]|null>(null)
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
    const [date, setDate] = useState<CommonAPIType<{item: TodolistType }>|null>(null)
    useEffect(() => {
        todolistsApi.createTodolist('Dziana Todolist')
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
export const DeleteTodolist = () => {
    const [date, setDate] = useState<CommonAPIType<object>|null>(null)
    useEffect(() => {
        const id = 'f115dfc9-c0e5-4ea5-8bda-70dc34e973b2'
        todolistsApi.deleteTodolist(id)
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
export const UpdateTodolist = () => {
    const [date, setDate] = useState<null|CommonAPIType<object>>(null)
    useEffect(() => {
        const id = "05bc169b-4d16-4463-bcc8-0140dbd33dac"
        todolistsApi.updateTodolist(id, 'Update Todo')
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



