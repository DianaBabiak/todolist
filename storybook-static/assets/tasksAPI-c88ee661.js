import { i as o } from "./commonAPI-9afb705d.js";
const n = {
  getTasks(s) {
    return o
      .get(`todo-lists/${s}/tasks`)
      .then((t) => (console.log("res", t), t.data));
  },
  createTask(s, t) {
    return o
      .post(`todo-lists/${s}/tasks`, { title: t })
      .then((e) => (console.log("res", e), e.data));
  },
  deleteTask(s, t) {
    return o
      .delete(`todo-lists/${s}/tasks/${t}`)
      .then((e) => (console.log("res", e), e.data));
  },
  updateTask(s, t, e) {
    return o
      .put(`todo-lists/${s}/tasks/${t}`, e)
      .then((a) => (console.log("res", a), a.data));
  },
};
export { n as t };
