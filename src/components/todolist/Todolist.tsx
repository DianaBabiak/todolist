import {TodoItemStatus, TodolistType} from "../../propsType.ts";
import {TodoItem} from "../todoItem/TodoItem.tsx";
import {useState} from "react";
import {clsx} from 'clsx';
import styles from './Todolist.module.scss'


interface TodoListProps extends TodolistType {
    handlerDeleteTodolist:(idTodo:number)=>void
    handlerDeleteTodoItem:(idTodo:number, idItem:number)=>void

}


export const Todolist = ({title, id, items,handlerDeleteTodolist, handlerDeleteTodoItem}:TodoListProps)=>{
    const [status, setStatus] = useState(TodoItemStatus.All)
    const filterItems = items.filter((item)=>{
        if (status===TodoItemStatus.All){
            return item
        } return  status===TodoItemStatus.Completed
                  ? item.checked
                  : !item.checked

    })





 const onDeleteTodoItem =(idItem:number)=>{
     handlerDeleteTodoItem(id,idItem)
 }



    return (
        <div>
            <h3>{title}</h3>
            <button onClick={()=>handlerDeleteTodolist(id)}>Delete</button>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {filterItems.map((item)=>{
                    return(
                        <TodoItem key={item.id}
                                  label={item.label}
                                  checked={item.checked}
                                  id={item.id}
                                  handlerDeleteTodoItem = {onDeleteTodoItem}/>
                    )
                })}

            </ul>
            <div>
                <button onClick={()=>{setStatus(TodoItemStatus.All)}}
                        className={clsx(styles.button, {[styles.selectedButton]: status === TodoItemStatus.All})}>All</button>
                <button onClick={()=>{setStatus(TodoItemStatus.Active)}}
                        className={clsx(styles.button, {[styles.selectedButton]: status === TodoItemStatus.Active})}>Active</button>
                <button onClick={()=>{setStatus(TodoItemStatus.Completed)}}
                        className={clsx(styles.button, {[styles.selectedButton]: status === TodoItemStatus.Completed})}>Completed</button>
            </div>
        </div>

    )
}