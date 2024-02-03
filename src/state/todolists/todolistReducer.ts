import { todolistsApi } from "../../api/todolistsApi.ts";
import { getTasksTC } from "../tasks/tasksReduser.ts";
import { changeStatusLoadingAC } from "../app/appReducer.ts";
import { errorMessageOnDataRetrieval } from "../../api/errorMessageOnDataRetrieval.ts";
import { StatusLoading, TodolistStateType } from "../type.ts";
import { errorWithStatus200 } from "../../api/errorWithStatus200.ts";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clearTasksAndTodolists } from "../commonActions.ts";

const initialState: TodolistStateType[] = [];

export const getTodolistsTC = createAsyncThunk(
  "todolist/getTodolistsTC",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(
      changeStatusLoadingAC({ statusLoading: StatusLoading.loading }),
    );
    try {
      const result = await todolistsApi.getTodolists();
      thunkAPI.dispatch(
        changeStatusLoadingAC({ statusLoading: StatusLoading.succeeded }),
      );
      result.forEach((todo) => thunkAPI.dispatch(getTasksTC(todo.id)));
      return result;
    } catch (error: unknown) {
      thunkAPI.dispatch(
        changeStatusLoadingAC({ statusLoading: StatusLoading.failed }),
      );
      return thunkAPI.rejectWithValue(
        errorMessageOnDataRetrieval(error, thunkAPI.dispatch),
      );
    }
  },
);

export const createTodolistTC = createAsyncThunk(
  "todolist/createTodolistTC",
  async (newTitle: string, thunkAPI) => {
    thunkAPI.dispatch(
      changeStatusLoadingAC({ statusLoading: StatusLoading.loading }),
    );
    try {
      const result = await todolistsApi.createTodolist(newTitle);
      if (result.resultCode === 0) {
        thunkAPI.dispatch(
          changeStatusLoadingAC({ statusLoading: StatusLoading.succeeded }),
        );
        return { data: result.data.item };
      }
      return thunkAPI.rejectWithValue(
        errorWithStatus200(result, thunkAPI.dispatch),
      );
    } catch (error: unknown) {
      thunkAPI.dispatch(
        changeStatusLoadingAC({ statusLoading: StatusLoading.failed }),
      );
      return thunkAPI.rejectWithValue(
        errorMessageOnDataRetrieval(error, thunkAPI.dispatch),
      );
    }
  },
);

export const deleteTodolistTC = createAsyncThunk(
  "todolist/deleteTodolistTC",
  async (id: string, thunkAPI) => {
    thunkAPI.dispatch(
      changeStatusLoadingAC({ statusLoading: StatusLoading.loading }),
    );
    thunkAPI.dispatch(
      changeStatusTodolistCA({ idTodo: id, status: StatusLoading.loading }),
    );
    try {
      const result = await todolistsApi.deleteTodolist(id);
      if (result.resultCode === 0) {
        thunkAPI.dispatch(
          changeStatusLoadingAC({ statusLoading: StatusLoading.succeeded }),
        );
        return { idTodo: id };
      }
      return thunkAPI.rejectWithValue(
        errorWithStatus200(result, thunkAPI.dispatch),
      );
    } catch (error: unknown) {
      thunkAPI.dispatch(
        changeStatusLoadingAC({ statusLoading: StatusLoading.failed }),
      );
      return thunkAPI.rejectWithValue(
        errorMessageOnDataRetrieval(error, thunkAPI.dispatch),
      );
    }
  },
);

export const editTitleTodolistTC = createAsyncThunk(
  "todolist/editTitleTodolistTC",
  async (data: { id: string; newTitle: string }, thunkAPI) => {
    thunkAPI.dispatch(
      changeStatusLoadingAC({ statusLoading: StatusLoading.loading }),
    );
    try {
      const result = await todolistsApi.updateTodolist(data.id, data.newTitle);
      if (result.resultCode === 0) {
        thunkAPI.dispatch(
          changeStatusLoadingAC({ statusLoading: StatusLoading.succeeded }),
        );
        return { idTodo: data.id, newTitle: data.newTitle };
      }
      return thunkAPI.rejectWithValue(
        errorWithStatus200(result, thunkAPI.dispatch),
      );
    } catch (error: unknown) {
      thunkAPI.dispatch(
        changeStatusLoadingAC({ statusLoading: StatusLoading.failed }),
      );
      return thunkAPI.rejectWithValue(
        errorMessageOnDataRetrieval(error, thunkAPI.dispatch),
      );
    }
  },
);

const todolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    changeStatusTodolistCA(
      state,
      action: PayloadAction<{ idTodo: string; status: StatusLoading }>,
    ) {
      const index = state.findIndex(
        (todo) => todo.id === action.payload.idTodo,
      );
      if (index !== -1) {
        state[index].entityStatus = action.payload.status;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(clearTasksAndTodolists, () => {
        return [];
      })
      .addCase(getTodolistsTC.fulfilled, (_, action) => {
        if (action.payload) {
          return action.payload.map((todo) => ({
            ...todo,
            entityStatus: StatusLoading.idle,
          }));
        }
      })
      .addCase(createTodolistTC.fulfilled, (state, action) => {
        if (action.payload) {
          const newTodo = {
            ...action.payload.data,
            entityStatus: StatusLoading.idle,
          };
          state.unshift(newTodo);
        }
      })
      .addCase(deleteTodolistTC.fulfilled, (state, action) => {
        const index = state.findIndex(
          (todo) => todo.id === action.payload?.idTodo,
        );
        if (index !== -1) state.splice(index, 1);
      })
      .addCase(editTitleTodolistTC.fulfilled, (state, action) => {
        const index = state.findIndex(
          (todo) => todo.id === action.payload?.idTodo,
        );
        if (index !== -1 && action.payload) {
          state[index].title = action.payload.newTitle;
        }
      });
  },
});
export const todolistReducer = todolistSlice.reducer;
export const { changeStatusTodolistCA } = todolistSlice.actions;
