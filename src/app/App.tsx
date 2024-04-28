import "./App.css";
import { AppBarComponent } from "../components/appBarComponent/AppBarComponent.tsx";
import Container from "@mui/material/Container";
import { useAppDispatch, useAppSelector } from "../state/store.ts";
import { ErrorMessage } from "../components/errorMessage/ErrorMessage.tsx";
import { StatusLoading } from "../state/type.ts";
import { LinearIndeterminate } from "../components/loading/LinearIndeterminate.tsx";
import { Login } from "../components/login/Login.tsx";
import { Routes, Route } from "react-router-dom";
import { TodolistsPage } from "../features/todolistsPage/TodolistsPage.tsx";
import { useEffect } from "react";
import { getAuthTC } from "../state/app/appReducer.ts";

interface AppProps {
  demo?: boolean;
}

function App({ demo = false }: AppProps) {
  const statusLoading = useAppSelector(({ app }) => app.statusLoading);
  const initialization = useAppSelector(({ app }) => app.initialization);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!demo) {
      dispatch(getAuthTC());
    }
  }, [dispatch, demo]);

  if (!initialization) {
    return <LinearIndeterminate />;
  }

  return (
    <div className="App">
      <AppBarComponent />
      {statusLoading === StatusLoading.loading && <LinearIndeterminate />}
      <ErrorMessage />
      <Container maxWidth="lg" style={{ padding: "20px 0 0" }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<TodolistsPage demo={demo} />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
