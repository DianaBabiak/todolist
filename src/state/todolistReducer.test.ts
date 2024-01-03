import {v1} from 'uuid'
import {TodolistType} from "../api/commonAPI.ts";
import {TaskPriorities, TaskStatuses} from "../type.ts";
import {todolistReducer} from "./todolistReducer.ts";

const todolistId1 = v1()
const todolistId2 = v1()

let startState:TodolistType[]
 beforeEach(()=>{

     startState = [
         {
             title: 'Programming',
             id: todolistId1,
             addedDate: '',
             order: 0
         },
         {
             title: 'Drinks',
             id: todolistId2,
             addedDate: '',
             order: 0
         }]
 })
test('correct todolist should be removed', () => {
    const endState = todolistReducer(startState, {type: "DELETE TODO", payload: {idTodo: todolistId1}})

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolistId2)
})
test('correct todolist should be added', () => {
    const newTodolistTitle = 'New Todolist'

    const stateTasks = {
        [todolistId1]: [
            {
                addedDate: '',
                deadline: '',
                description: '',
                id: v1(),
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                status: TaskStatuses.Completed,
                title: 'JS',
                todoListId: todolistId1
            },
            {
                addedDate: '',
                deadline: '',
                description: '',
                id: v1(),
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                status: TaskStatuses.New,
                title: 'HTML',
                todoListId: todolistId1
            }
        ],
        [todolistId2]: [
            {
                addedDate: '',
                deadline: '',
                description: '',
                id: v1(),
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                status: TaskStatuses.Completed,
                title: 'Milk',
                todoListId: todolistId2
            },
            {
                addedDate: '',
                deadline: '',
                description: '',
                id: v1(),
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                status: TaskStatuses.New,
                title: 'Water',
                todoListId: todolistId2
            }
        ]
    }
    const newTodoId = v1()
    stateTasks[newTodoId] = []

    const endState = todolistReducer(startState, {
        type: "ADD TODO",
        payload: {data: {
                title: newTodolistTitle,
                id: newTodoId,
                addedDate: '',
                order: 0
            }}
    })

    expect(endState.length).toBe(3)
    expect(endState[0].title).toBe(newTodolistTitle)
    expect(Object.keys(stateTasks)).toHaveLength(3)
})
test('correct todolist should change its name', () => {

    const newTodolistTitle = 'New Todolist'

    const endState = todolistReducer(startState, {
        type: "EDIT TODO TITLE",
        payload: {
            idTodo: todolistId2,
            newTitle: newTodolistTitle
        }
    })

    expect(endState[0].title).toBe('Programming')
    expect(endState[1].title).toBe(newTodolistTitle)
})




