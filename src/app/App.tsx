import './App.css';
import {Todolist} from "../features/todolist/Todolist.tsx";
import {AddField} from "../components/addField/AddField.tsx";
import {AppBarComponent} from "../components/appBarComponent/AppBarComponent.tsx";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {createTodolistTC, getTodolistsTC} from "../state/todolists/todolistReducer.ts";
import {useAppDispatch, useAppSelector} from "../state/store.ts";
import {useCallback, useEffect} from "react";
import {ErrorMessage} from "../components/errorMessage/ErrorMessage.tsx";
import {StatusLoading} from "../state/type.ts";
import {LinearIndeterminate} from "../components/loading/Loading.tsx";


interface AppProps {
    demo?: boolean
}
function App({demo=false}:AppProps) {

    const stateTodolists = useAppSelector(({todolist}) => todolist)
    const statusLoading = useAppSelector(({app})=>app.statusLoading)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        if (demo){
            return
        }
       dispatch(getTodolistsTC())
    },[dispatch])

    const handlerAddTodo = useCallback((newTitle: string) => {
        dispatch(createTodolistTC(newTitle))
    },[dispatch])

    return (
        <div className="App">
            <AppBarComponent/>
            {statusLoading === StatusLoading.loading && <LinearIndeterminate/>}
            <ErrorMessage/>
            <Container maxWidth='lg' style={{padding: '20px 0 0'}}>
                <AddField handlerAdd={handlerAddTodo}/>
                <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                    {stateTodolists.map((todo) => {
                        return (
                            <Grid item style={{margin: '40px 0 0'}} xs={4}>
                                <Paper elevation={3}>
                                    <Todolist key={todo.id}
                                              todo={todo}
                                    demo={demo}/>
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
