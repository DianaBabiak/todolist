import {v1} from "uuid";
import './App.css';
import {Todolist} from "./components/todolist/Todolist.tsx";
import {useState} from "react";
import {TodolistType} from "./propsType.ts";
import {AddField} from "./components/addField/AddField.tsx";

function App() {
    const [data, setData] = useState<TodolistType[]>([
        {
            title: 'Programing',
            id: v1(),
            items: [
                {id: v1(), label: 'JS', checked: true}, {id: v1(), label: 'CSS', checked: false},
                {id: v1(), label: 'React', checked: true}
            ]
        },
        {
            title: 'Drinks',
            id: v1(),
            items: [
                {id: v1(), label: 'Water', checked: false},
                {id: v1(), label: 'Coffee', checked: false},
                {id: v1(), label: 'Tea', checked: true}
            ]
        },
        {
            title: 'Movies',
            id: v1(),
            items: [
                {id: v1(), label: '1+1', checked: true},
                {id: v1(), label: 'Blond', checked: true},
                {id: v1(), label: 'Cars', checked: true}
            ]
        },
        {
            title: 'Family',
            id: v1(),
            items: [
                {id: v1(), label: 'Dziana', checked: true},
                {id: v1(), label: 'Kiryl', checked: true},
                {id: v1(), label: 'Sofiya', checked: true}
            ]
        }])

    const handlerDeleteTodolist = (idTodo: string) => {
        const updatedData = data.filter(todo => todo.id !== idTodo)
        setData(updatedData)
    }

    const handlerDeleteTodoItem = (idTodo: string, idItem: string) => {
        const updatedData = data.map((todo) => {
            if (todo.id === idTodo) {
                todo.items = todo.items.filter(item => item.id !== idItem);
            }
            return todo
        })
        setData(updatedData)

    }

    const handlerAddTodo = (newTitle: string) => {
        const newTodo = {
            title: newTitle,
            id: v1(),
            items: []
        }
        const updatedData = [...data, newTodo]
        setData(updatedData)
    }

    const handlerAddTodoItem = (idTodo: string, newTitle: string) => {
        const updatedData = data.map((todo) => {
            if (todo.id === idTodo) {
                const newItem = {
                    id: v1(),
                    label: newTitle,
                    checked: false
                };
                return {
                    ...todo,
                    items: [...todo.items, newItem]
                };
            }
            return todo
        });
        setData(updatedData);
    };

    const onChangeCheckedHandler = (idTodo: string, idItem: string) => {
        const updatedData = data.map((todo) => {
                if (idTodo === todo.id) {
                    const item = todo.items.find(item => item.id === idItem)
                    if (item) {
                        item.checked = !item.checked
                    }
                    return {...todo, items: [...todo.items]}

                }
                return todo
            }
        )
        setData(updatedData)


    }

    return (
        <div className="App">
            <AddField handlerAdd={handlerAddTodo} label={'Add'}/>
            {data.map((todo) => {
                return (
                    <Todolist key={todo.id}
                              title={todo.title}
                              id={todo.id}
                              items={todo.items}
                              handlerDeleteTodoItem={handlerDeleteTodoItem}
                              handlerDeleteTodolist={handlerDeleteTodolist}
                              handlerAddTodoItem={handlerAddTodoItem}
                              onChangeCheckedHandler={onChangeCheckedHandler}/>
                )
            })}
        </div>
    );
}

export default App;
