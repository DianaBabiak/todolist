import './App.css';
import {Todolist} from "./components/todolist/Todolist.tsx";
import {useState} from "react";
import {TodolistType} from "./propsType.ts";

function App() {
    const [data, setData] = useState<TodolistType[]>([
        {
            title: 'Programing',
            id: 1,
            items: [
                {id: 1.1, label: 'JS', checked: true}, {id: 1.2, label: 'CSS', checked: false},
                {id: 1.3, label: 'React', checked: true}
            ]
        },
        {
            title: 'Drinks',
            id: 2,
            items: [
                {id: 2.1, label: 'Water', checked: false},
                {id: 2.2, label: 'Coffee', checked: false},
                {id: 2.3, label: 'Tea', checked: true}
            ]
        },
        {
            title: 'Movies',
            id: 3,
            items: [
                {id: 3.1, label: '1+1', checked: true},
                {id: 3.2, label: 'Blond', checked: true},
                {id: 3.3, label: 'Cars', checked: true}
            ]
        },
        {
            title: 'Family',
            id: 4,
            items: [
                {id: 4.1, label: 'Dziana', checked: true},
                {id: 4.2, label: 'Kiryl', checked: true},
                {id: 4.3, label: 'Sofiya', checked: true}
            ]
        }])

    const handlerDeleteTodolist = (idTodo: number) => {
        const updatedData = data.filter(todo => todo.id !== idTodo)
        setData(updatedData)
    }

    const handlerDeleteTodoItem = (idTodo: number, idItem: number) => {
        const updatedData = data.map((todo) => {
            if (todo.id === idTodo) {
                todo.items = todo.items.filter(item=> item.id !== idItem);
            }
            return todo
        })
        setData(updatedData)

    }


    return (
        <div className="App">
            {data.map((todo) => {
                return (
                    <Todolist key={todo.id}
                              title={todo.title}
                              id={todo.id}
                              items={todo.items}
                              handlerDeleteTodoItem={handlerDeleteTodoItem}
                              handlerDeleteTodolist={handlerDeleteTodolist}/>
                )
            })}
        </div>
    );
}

export default App;
