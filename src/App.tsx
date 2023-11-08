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
        setTodo(todo.filter(todoItem => todoItem.id !== idTodo))

        const updatedTasks = {...tasks};
        delete updatedTasks[idTodo];

        setTasks(updatedTasks);
    }

    const handlerDeleteTodoTask = (idTodo: string, idTask: string) => {
        setTasks({...tasks, [idTodo]: tasks[idTodo].filter(item => item.id !== idTask)})
    }


    const handlerAddTodo = (newTitle: string) => {
        const newIdTodo = v1()
        const newTodo = {
            title: newTitle,
            id: newIdTodo
        }
        setTodo([...todo, newTodo])

        setTasks({
            ...tasks,
            [newIdTodo]: []
        })
    }

    const handlerAddTodoTask = (idTodo: string, newTitle: string) => {
        const newTask = {
            id: v1(),
            label: newTitle,
            checked: false
        };

        setTasks({...tasks, [idTodo]: [...tasks[idTodo], newTask]});
    }


    const onChangeCheckedHandler = (idTodo: string, idTask: string) => {

        setTasks({
            ...tasks, [idTodo]: tasks[idTodo].map(task => idTask === task.id
                ? {...task, checked: !task.checked}
                : task)
        });

    }
    const onEditTodo = (idTodo: string, newTitle: string) => {
        setTodo(todo.map(todo => todo.id === idTodo ? {...todo, title: newTitle} : todo))
    }
    const onEditTodoItem = (idTodo: string, idTask: string, newTitle: string) => {
        setTasks({
            ...tasks,
            [idTodo]: tasks[idTodo].map(task => idTask === task.id
                ? {...task, label: newTitle}
                : task)
        })

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
                              onChangeCheckedHandler={onChangeCheckedHandler}
                              onEditTodo={onEditTodo}
                              onEditTodoItem={onEditTodoItem}/>
                )
            })}
        </div>
    );
}

export default App;
