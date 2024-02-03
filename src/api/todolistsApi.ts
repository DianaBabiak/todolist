import { CommonAPIType, instance, TodolistType } from "./commonAPI.ts";
export const todolistsApi = {
  getTodolists() {
    return instance.get<TodolistType[]>("todo-lists").then((res) => {
      return res.data;
    });
  },
  createTodolist(title: string) {
    return instance
      .post<CommonAPIType<{ item: TodolistType }>>("todo-lists", { title })
      .then((res) => {
        return res.data;
      });
  },
  deleteTodolist(id: string) {
    return instance.delete<CommonAPIType>(`todo-lists/${id}`).then((res) => {
      return res.data;
    });
  },
  updateTodolist(id: string, title: string) {
    return instance
      .put<CommonAPIType>(`todo-lists/${id}`, { title })
      .then((res) => {
        return res.data;
      });
  },
};
