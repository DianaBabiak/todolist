import {v1} from 'uuid'
import {TodolistType} from "../propsType.ts";
import {todolistReducer} from "./todolistReducer.ts";


test('correct todolist should be removed', () => {
    const todolistId1 = v1()
    const todolistId2 = v1()

    const startState: TodolistType[] = [
        {id: todolistId1, title: 'What to learn'},
        {id: todolistId2, title: 'What to buy'}
    ]

    const endState = todolistReducer(startState, {type: "DELETE TODO", payload: {idTodo: todolistId1}})

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolistId2)
})

test('correct todolist should be added', () => {
    const todolistId1 = v1()
    const todolistId2 = v1()

    const newTodolistTitle = 'New Todolist'

    const startState: TodolistType[] = [
        {id: todolistId1, title: 'What to learn'},
        {id: todolistId2, title: 'What to buy'}
    ]

    const stateTasks = {
        [todolistId1]: [
            {id: v1(), label: 'JS', checked: true},
            {id: v1(), label: 'CSS', checked: false},
            {id: v1(), label: 'React', checked: true}
        ],
        [todolistId2]: [
            {id: v1(), label: 'Water', checked: false},
            {id: v1(), label: 'Coffee', checked: false},
            {id: v1(), label: 'Tea', checked: true}
        ]
    }
    const callBackTodo = (newTodoId: string) => {
        stateTasks[newTodoId] = []
    }

    const endState = todolistReducer(startState, {
        type: "ADD TODO",
        payload: {newTitle: newTodolistTitle, callback: callBackTodo}
    })

    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe(newTodolistTitle)
    expect(Object.keys(stateTasks)).toHaveLength(3)
})
test('correct todolist should change its name', () => {
    const todolistId1 = v1()
    const todolistId2 = v1()

    const newTodolistTitle = 'New Todolist'

    const startState: TodolistType[] = [
        {id: todolistId1, title: 'What to learn'},
        {id: todolistId2, title: 'What to buy'}
    ]

    const action = {
        type: "EDIT TODO TITLE",
        payload:{
            idTodo: todolistId2,
            newTitle: newTodolistTitle
        }
    }

    const endState = todolistReducer(startState, action)

    expect(endState[0].title).toBe('What to learn')
    expect(endState[1].title).toBe(newTodolistTitle)
})




