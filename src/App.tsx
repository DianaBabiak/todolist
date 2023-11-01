import {v1} from "uuid";
import './App.css';
import {Todolist} from "./components/todolist/Todolist.tsx";
import {useState} from "react";
import {TodolistType, TodoTasksType} from "./propsType.ts";
import {AddField} from "./components/addField/AddField.tsx";

function App() {

    const idTodoOne = v1()
    const idTodoTwo = v1()

    const [todo, setTodo] = useState<TodolistType[]>([
        {
            title: 'Programing',
            id: idTodoOne
        },
        {
            title: 'Drinks',
            id: idTodoTwo
        }])

    const [tasks, setTasks] = useState<TodoTasksType>({
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


    })

    const handlerDeleteTodolist = (idTodo: string) => {
        const updatedTodo = todo.filter(todoItem => todoItem.id !== idTodo);
        setTodo(updatedTodo);

        const updatedTasks = { ...tasks };
        delete updatedTasks[idTodo];

        setTasks(updatedTasks);
    }

    const handlerDeleteTodoTask = (idTodo: string, idTask: string) => {
        const updatedTasks = { ...tasks };
        const needTasks = updatedTasks[idTodo];
            updatedTasks[idTodo] = needTasks.filter((item) => item.id !== idTask);

            setTasks(updatedTasks);

    }



    const handlerAddTodo = (newTitle: string) => {
        const newIdTodo = v1()
        const newTodo = {
            title: newTitle,
            id: newIdTodo
        }
        const updatedTodo = [...todo, newTodo]
        setTodo(updatedTodo)

        const updateTasks = {
            ...tasks,
            [newIdTodo]:[]
        }
        setTasks(updateTasks)
    }

    const handlerAddTodoTask = (idTodo: string, newTitle: string) => {
        const newTask = {
            id: v1(),
            label: newTitle,
            checked: false
        };
        const updatedTasks = { ...tasks };
        const todoTasks = updatedTasks[idTodo];
        updatedTasks[idTodo] = [...todoTasks, newTask];

        setTasks(updatedTasks);
    }



    const onChangeCheckedHandler = (idTodo: string, idTask: string) => {
       const updatedTasks = {...tasks}
        const todoTasks = updatedTasks[idTodo];
        const copyTasks = [...todoTasks]
        const task = copyTasks.find((task)=>idTask===task.id)
        if (task){
            task.checked = !task.checked
        }

        updatedTasks[idTodo] = copyTasks;
        setTasks(updatedTasks);

    }

    return (
        <div className="App">
            <AddField handlerAdd={handlerAddTodo} label={'Add'}/>
            {todo.map((todo) => {
                return (
                    <Todolist key={todo.id}
                              title={todo.title}
                              id={todo.id}
                              tasks={tasks[todo.id]}
                              handlerAddTodoTask={handlerAddTodoTask}
                              handlerDeleteTodolist={handlerDeleteTodolist}
                              handlerDeleteTodoTask={handlerDeleteTodoTask}
                              onChangeCheckedHandler={onChangeCheckedHandler}/>
                )
            })}
        </div>
    );
}

export default App;
