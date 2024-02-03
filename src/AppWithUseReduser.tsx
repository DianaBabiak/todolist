import "./app/App.css";
import { v1 } from "uuid";
import { Todolist } from "./features/todolist/Todolist.tsx";
import { useReducer } from "react";
import { AddField } from "./components/addField/AddField.tsx";
import { AppBarComponent } from "./components/appBarComponent/AppBarComponent.tsx";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {
  addTodolistCA,
  deleteTodolistCA,
  editTodolistCA,
  todolistReducer,
} from "./state/todolists/todolistReducer.ts";
import {
  addTaskCA,
  addTodoCA,
  changeCheckedTaskCA,
  deleteTaskCA,
  deleteTodoCA,
  editTitleTask,
  tasksReducer,
} from "./state/tasks/tasksReduser.ts";

function App() {
  const idTodoOne = v1();
  const idTodoTwo = v1();

  const [todo, dispatchTodo] = useReducer(todolistReducer, [
    {
      title: "Programming",
      id: idTodoOne,
    },
    {
      title: "Drinks",
      id: idTodoTwo,
    },
  ]);

  const [tasks, dispatchTasks] = useReducer(tasksReducer, {
    [idTodoOne]: [
      { id: v1(), label: "JS", checked: true },
      { id: v1(), label: "CSS", checked: false },
      { id: v1(), label: "React", checked: true },
    ],
    [idTodoTwo]: [
      { id: v1(), label: "Water", checked: false },
      { id: v1(), label: "Coffee", checked: false },
      { id: v1(), label: "Tea", checked: true },
    ],
  });

  const handlerDeleteTodolist = (idTodo: string) => {
    dispatchTodo(deleteTodolistCA(idTodo));
    dispatchTasks(deleteTodoCA(idTodo));
  };

  const handlerDeleteTodoTask = (idTodo: string, idTask: string) => {
    dispatchTasks(deleteTaskCA(idTodo, idTask));
  };

  const handlerAddTodo = (newTitle: string) => {
    const newIdTodo = v1();

    dispatchTasks(addTodoCA(newIdTodo));

    dispatchTodo(addTodolistCA(newIdTodo, newTitle));
  };

  const handlerAddTodoTask = (idTodo: string, newTitle: string) => {
    dispatchTasks(addTaskCA(idTodo, newTitle));
  };

  const onChangeCheckedHandler = (idTodo: string, idTask: string) => {
    dispatchTasks(changeCheckedTaskCA(idTodo, idTask));
  };
  const onEditTodo = (idTodo: string, newTitle: string) => {
    dispatchTodo(editTodolistCA(idTodo, newTitle));
  };
  const onEditTodoItem = (idTodo: string, idTask: string, newTitle: string) => {
    dispatchTasks(editTitleTask(idTodo, idTask, newTitle));
  };

  return (
    <div className="App">
      <AppBarComponent />
      <Container maxWidth="lg" style={{ padding: "20px 0 0" }}>
        <AddField handlerAdd={handlerAddTodo} />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {todo.map((todo) => {
            return (
              <Grid item style={{ margin: "40px 0 0" }} xs={4}>
                <Paper elevation={3}>
                  <Todolist
                    key={todo.id}
                    title={todo.title}
                    id={todo.id}
                    tasks={tasks[todo.id]}
                    handlerAddTodoTask={handlerAddTodoTask}
                    handlerDeleteTodolist={handlerDeleteTodolist}
                    handlerDeleteTodoTask={handlerDeleteTodoTask}
                    onChangeCheckedHandler={onChangeCheckedHandler}
                    onEditTodo={onEditTodo}
                    onEditTodoItem={onEditTodoItem}
                  />
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
