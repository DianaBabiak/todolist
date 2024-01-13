import {v1} from "uuid";
import {TaskPriorities, TaskStatuses, TodoTasksType} from "../type.ts";
import {
    addTaskCA,
    addTodoCA,
    deleteTaskCA,
    deleteTodoCA, getTasksCA,
    tasksReducer, updateTaskCA
} from "./tasksReduser.ts";
import {TasksType,} from "../../api/commonAPI.ts";
import {getTodolistsCA} from "../todolists/todolistReducer.ts";

const idTodoOne = v1()
const idTodoTwo = v1()
const idTodoThree = v1()
const idTask = v1()
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
                id: idTask,
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
    const res = tasksReducer(state, addTaskCA({addedDate: '',
        deadline: '',
        description: '',
        id: v1(),
        order: 0,
        priority: TaskPriorities.Low,
        startDate: '',
        status: TaskStatuses.Completed,
        title: 'Jest',
        todoListId: idTodoOne}))
    expect(res[idTodoOne].length).toBe(4)
    expect(res[idTodoOne][3].title).toBe('Jest')
})
test('change checked', ()=>{
    const res = tasksReducer(state, updateTaskCA({
        addedDate: '',
        deadline: '',
        description: '',
        id: idTask,
        order: 0,
        priority: TaskPriorities.Low,
        startDate: '',
        status: TaskStatuses.New,
        title: 'Milk',
        todoListId: idTodoTwo
    }))
    expect(res[idTodoTwo][0].status).toBe(TaskStatuses.New)
    expect(state[idTodoTwo][0].status).toBe(TaskStatuses.Completed)
})
test('edit title task', ()=>{
    const res = tasksReducer(state, updateTaskCA({
        addedDate: '',
        deadline: '',
        description: '',
        id: idTask,
        order: 0,
        priority: TaskPriorities.Low,
        startDate: '',
        status: TaskStatuses.Completed,
        title: 'Tea',
        todoListId: idTodoTwo
    } ))
    expect(res[idTodoTwo][0].title).toBe('Tea')
    expect(state[idTodoTwo][0].title).toBe('Milk')
})
test('get tasks from API', ()=>{
    const data:TasksType= {
        items: [{
            addedDate: '',
            deadline: '',
            description: '',
            id: v1(),
            order: 0,
            priority: TaskPriorities.Later,
            startDate: '',
            status: TaskStatuses.New,
            title: "Get  Task",
            todoListId: idTodoThree
        }],
        totalCount: 1,
        error: ''
    }
    const res = tasksReducer(state,getTasksCA(idTodoThree,data) )
    expect(res[idTodoThree][0].title).toBe('Get  Task')
    expect(res[idTodoTwo][0].title).toBe("Milk")
    expect(Object.keys(state).length).toBe(2)
    expect(Object.keys(res).length).toBe(3)
})
test('get todolists from API', ()=>{

    const res = tasksReducer(state,getTodolistsCA([
        {
            title: 'Books',
            id: idTodoThree,
            addedDate: '',
            order: 0
        }]) )

    expect(Object.keys(state).length).toBe(2)
    expect(Object.keys(res).length).toBe(3)
})