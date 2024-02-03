import { AddField } from "../../components/addField/AddField.tsx";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Todolist } from "../todolist/Todolist.tsx";
import { useAppDispatch, useAppSelector } from "../../state/store.ts";
import { useCallback, useEffect } from "react";
import {
  createTodolistTC,
  getTodolistsTC,
} from "../../state/todolists/todolistReducer.ts";
import { Navigate } from "react-router-dom";

interface TodolistsPageProps {
  demo?: boolean;
}

export const TodolistsPage = ({ demo }: TodolistsPageProps) => {
  const stateTodolists = useAppSelector(({ todolist }) => todolist);
  const isAuth = useAppSelector((s) => s.app.isAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (demo) {
      return;
    }
    dispatch(getTodolistsTC());
  }, [dispatch, demo]);

  const handlerAddTodo = useCallback(
    (newTitle: string) => {
      dispatch(createTodolistTC(newTitle));
    },
    [dispatch],
  );

  return !isAuth ? (
    <Navigate to="/login" />
  ) : (
    <>
      <AddField handlerAdd={handlerAddTodo} />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {stateTodolists.map((todo) => {
          return (
            <Grid key={todo.id} item style={{ margin: "40px 0 0" }} xs={4}>
              <Paper elevation={3}>
                <Todolist key={todo.id} todo={todo} demo={demo} />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
