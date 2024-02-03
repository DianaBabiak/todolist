import { TaskType, TodolistType } from "../api/commonAPI.ts";

export interface TodolistStateType extends TodolistType {
  entityStatus: StatusLoading;
}

export type TodoTasksType = Record<string, TaskType[]>;

export enum TodoItemFilter {
  All = "All",
  Active = "Active",
  Completed = "Completed",
}

export enum TaskStatuses {
  New = 0,
  InProgress = 1,
  Completed = 2,
  Draft = 3,
}

export enum TaskPriorities {
  Low = 0,
  Middle = 1,
  Hi = 2,
  Urgently = 3,
  Later = 4,
}

export enum StatusLoading {
  idle = "idle",
  loading = "loading",
  succeeded = "succeeded",
  failed = "failed",
}
