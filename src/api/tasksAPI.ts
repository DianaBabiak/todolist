import {
  CommonAPIType,
  instance,
  TasksType,
  TaskType,
  UpdatePutTaskType,
} from "./commonAPI.ts";
export const tasksAPI = {
  getTasks(todolistId: string) {
    return instance
      .get<TasksType>(`todo-lists/${todolistId}/tasks`)
      .then((res) => {
        return res.data;
      });
  },
  createTask(todolistId: string, title: string) {
    return instance
      .post<
        CommonAPIType<{ item: TaskType }>
      >(`todo-lists/${todolistId}/tasks`, { title })
      .then((res) => {
        return res.data;
      });
  },
  deleteTask(todolistId: string, id: string) {
    return instance
      .delete<CommonAPIType>(`todo-lists/${todolistId}/tasks/${id}`)
      .then((res) => {
        return res.data;
      });
  },
  updateTask(todolistId: string, id: string, model: UpdatePutTaskType) {
    return instance
      .put<
        CommonAPIType<{ item: TaskType }>
      >(`todo-lists/${todolistId}/tasks/${id}`, model)
      .then((res) => {
        return res.data;
      });
  },
};
