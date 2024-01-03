import './App.css';
import {Todolist} from "./components/todolist/Todolist.tsx";
import {AddField} from "./components/addField/AddField.tsx";
import {AppBarComponent} from "./components/appBarComponent/AppBarComponent.tsx";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {createTodolistTC, getTodolistsTC} from "./state/todolistReducer.ts";
import { useAppDispatch, useAppSelector} from "./state/store.ts";
import {useCallback, useEffect} from "react";

function App() {

    const stateTodolists = useAppSelector(({todolist}) => todolist)
    const dispatch = useAppDispatch()

    useEffect(()=>{
       dispatch(getTodolistsTC())
    },[dispatch])

    const handlerAddTodo = useCallback((newTitle: string) => {
        dispatch(createTodolistTC(newTitle))
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
