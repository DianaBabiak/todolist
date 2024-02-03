import {
  StatusLoading,
  TaskPriorities,
  TaskStatuses,
  TodoTasksType,
} from "../type.ts";
import { UpdatePutTaskType } from "../../api/commonAPI.ts";
import { tasksAPI } from "../../api/tasksAPI.ts";
import { changeStatusLoadingAC } from "../app/appReducer.ts";
import { errorMessageOnDataRetrieval } from "../../api/errorMessageOnDataRetrieval.ts";
import { errorWithStatus200 } from "../../api/errorWithStatus200.ts";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clearTasksAndTodolists } from "../commonActions.ts";
import {
  createTodolistTC,
  deleteTodolistTC,
  getTodolistsTC,
} from "../todolists/todolistReducer.ts";
import { RootState } from "../store.ts";

const initialState: TodoTasksType = {};

export const getTasksTC = createAsyncThunk(
  "task/getTasksTC",
  async (id: string, thunkAPI) => {
    thunkAPI.dispatch(
      changeStatusLoadingAC({ statusLoading: StatusLoading.loading }),
    );
    try {
      const result = await tasksAPI.getTasks(id);
      thunkAPI.dispatch(
        changeStatusLoadingAC({ statusLoading: StatusLoading.succeeded }),
      );
      return { idTodo: id, data: result.items };
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

export const deleteTaskTC = createAsyncThunk(
  "task/deleteTaskTC",
  async (data: { idTodo: string; idTask: string }, thunkAPI) => {
    thunkAPI.dispatch(
      changeStatusLoadingAC({ statusLoading: StatusLoading.loading }),
    );
    try {
      const result = await tasksAPI.deleteTask(data.idTodo, data.idTask);
      if (result.resultCode === 0) {
        thunkAPI.dispatch(
          changeStatusLoadingAC({ statusLoading: StatusLoading.succeeded }),
        );
        return { idTodo: data.idTodo, idTask: data.idTask };
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

export const createTaskTC = createAsyncThunk(
  "task/createTaskTC",
  async (data: { idTodo: string; newTitle: string }, thunkAPI) => {
    thunkAPI.dispatch(
      changeStatusLoadingAC({ statusLoading: StatusLoading.loading }),
    );
    try {
      const result = await tasksAPI.createTask(data.idTodo, data.newTitle);
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

export type UpdateTaskType = {
  title?: string;
  description?: string | null;
  status?: TaskStatuses;
  priority?: TaskPriorities;
  startDate?: null | string;
  deadline?: null | string;
};

export const updateTaskTC = createAsyncThunk(
  "task/updateTaskTC",
  async (
    data: { idTodo: string; idTask: string; modelTask: UpdateTaskType },
    thunkAPI,
  ) => {
    thunkAPI.dispatch(
      changeStatusLoadingAC({ statusLoading: StatusLoading.loading }),
    );
    try {
      const state = thunkAPI.getState() as RootState;
      const tasks = state.tasks[data.idTodo];
      const task = tasks.find((t) => t.id === data.idTask);
      if (!task) {
        console.warn("tasks are empty");
        return;
      }
      const model: UpdatePutTaskType = {
        title: task.title,

        description: task.description,
        status: task.status,
        priority: task.priority,
        startDate: task.startDate,
        deadline: task.deadline,
        ...data.modelTask,
      };
      const result = await tasksAPI.updateTask(data.idTodo, data.idTask, model);
      if (result.resultCode === 0) {
        thunkAPI.dispatch(
          changeStatusLoadingAC({ statusLoading: StatusLoading.succeeded }),
        );
        return { task: result.data.item };
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

const tasksSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(clearTasksAndTodolists, () => {
        return {};
      })
      .addCase(getTodolistsTC.fulfilled, (state, action) => {
        action.payload?.forEach((tl) => {
          state[tl.id] = [];
        });
      })
      .addCase(deleteTodolistTC.fulfilled, (state, action) => {
        if (action.payload) {
          delete state[action.payload.idTodo];
        }
      })
      .addCase(createTodolistTC.fulfilled, (state, action) => {
        if (action.payload) {
          state[action.payload.data.id] = [];
        }
      })
      .addCase(getTasksTC.fulfilled, (state, action) => {
        if (action.payload) {
          state[action.payload.idTodo] = action.payload.data;
        }
      })
      .addCase(createTaskTC.fulfilled, (state, action) => {
        if (action.payload) {
          state[action.payload.data.todoListId].unshift(action.payload.data);
        }
      })
      .addCase(deleteTaskTC.fulfilled, (state, action) => {
        if (action.payload) {
          const tasks = state[action.payload.idTodo];
          const index = tasks.findIndex((t) => t.id === action.payload?.idTask);
          if (index !== -1) tasks.splice(index, 1);
        }
      })
      .addCase(updateTaskTC.fulfilled, (state, action) => {
        if (action.payload) {
          const index = state[action.payload.task.todoListId].findIndex(
            (t) => action.payload?.task.id === t.id,
          );
          if (index !== -1) {
            state[action.payload.task.todoListId][index] = {
              ...action.payload.task,
            };
          }
        }
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
