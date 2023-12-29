import './App.css';
import {Todolist} from "./components/todolist/Todolist.tsx";
import {AddField} from "./components/addField/AddField.tsx";
import {AppBarComponent} from "./components/appBarComponent/AppBarComponent.tsx";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {addTodolistCA} from "./state/todolistReducer.ts";
import {addTodoCA,} from "./state/tasksReduser.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "./state/store.ts";
import {v1} from "uuid";
import {useCallback} from "react";
import {TodolistType} from "./api/commonAPI.ts";

function App() {

    const stateTodolists = useSelector<RootReducerType,TodolistType[] >(store => store.todolist)
    const dispatch = useDispatch()

    const handlerAddTodo = useCallback((newTitle: string) => {
        const newTodoId = v1()
        dispatch(addTodolistCA(newTodoId, newTitle))
        dispatch(addTodoCA(newTodoId))
    },[dispatch])

    return (
        <div className="App">
            <AppBarComponent/>
            <Container maxWidth='lg' style={{padding: '20px 0 0'}}>
                <AddField handlerAdd={handlerAddTodo}/>
                <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                    {stateTodolists.map((todo) => {
                        return (
                            <Grid item style={{margin: '40px 0 0'}} xs={4}>
                                <Paper elevation={3}>
                                    <Todolist key={todo.id}
                                              todo={todo}/>
                                </Paper>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>

        </div>
    );
}

export default App;
