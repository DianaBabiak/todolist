import {v1} from "uuid";
import {TaskPriorities, TaskStatuses, TodoTasksType} from "../type.ts";
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
                todoListId: idTodoOne
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
                todoListId: idTodoOne
            },
            {
                addedDate: '',
                deadline: '',
                description: '',
                id: v1(),
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                status: TaskStatuses.Completed,
                title: 'React',
                todoListId: idTodoOne
            },
        ],
        [idTodoTwo]: [
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
                todoListId: idTodoTwo
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
                todoListId: idTodoTwo
            },
            {
                addedDate: '',
                deadline: '',
                description: '',
                id: v1(),
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                status: TaskStatuses.Completed,
                title: 'Tea',
                todoListId: idTodoTwo
            },

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
    expect(res[idTodoOne][0].title).toBe('HTML')
})

test('add task', ()=>{
    const res = tasksReducer(state, addTaskCA(idTodoOne, 'Jest'))
    expect(res[idTodoOne].length).toBe(4)
    expect(res[idTodoOne][3].title).toBe('Jest')
})

test('change checked', ()=>{
    const res = tasksReducer(state, changeCheckedTaskCA(idTodoOne, state[idTodoOne][1].id, TaskStatuses.Completed))
    expect(res[idTodoOne][1].status).toBe(TaskStatuses.Completed)
})

test('edit title task', ()=>{
    const res = tasksReducer(state, editTitleTask(idTodoOne,state[idTodoOne][1].id,'HTML' ))
    expect(res[idTodoOne][1].title).toBe('HTML')
})

