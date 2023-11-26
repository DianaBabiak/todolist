import {v1} from "uuid";
import {TodoTasksType} from "../propsType.ts";
import {
    addTaskCA,
    addTodoCA,
    changeCheckedTaskCA,
    deleteTaskCA,
    deleteTodoCA,
    editTitleTask,
    tasksReducer
} from "./tasksReduser.ts";

const idTodoOne = v1()
const idTodoTwo = v1()
let state: TodoTasksType

beforeEach(() => {
    state = {
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
})
test('correct task should be removed when was removed todolist', () => {
    const res = tasksReducer(state, deleteTodoCA(idTodoOne))

    expect(Object.keys(res).length).toBe(1)
})

test('correct task should be add when was add todolist', () => {
    const idTodoThree = v1()
    const res = tasksReducer(state, addTodoCA(idTodoThree))
    expect(Object.keys(res).length).toBe(3)
    expect(res[idTodoThree]).toStrictEqual([])
})

test('delete task', () => {
    const res = tasksReducer(state, deleteTaskCA(idTodoOne, state[idTodoOne][0].id ))
    expect(res[idTodoOne].length).toBe(2)
    expect(res[idTodoOne][0].label).toBe('CSS')
})

test('add task', ()=>{
    const res = tasksReducer(state, addTaskCA(idTodoOne, 'Jest'))
    expect(res[idTodoOne].length).toBe(4)
    expect(res[idTodoOne][3].label).toBe('Jest')
})

test('change checked', ()=>{
    const res = tasksReducer(state, changeCheckedTaskCA(idTodoOne, state[idTodoOne][1].id))
    expect(res[idTodoOne][1].checked).toBe(true)
})

test('edit title task', ()=>{
    const res = tasksReducer(state, editTitleTask(idTodoOne,state[idTodoOne][1].id,'HTML' ))
    expect(res[idTodoOne][1].label).toBe('HTML')
})

