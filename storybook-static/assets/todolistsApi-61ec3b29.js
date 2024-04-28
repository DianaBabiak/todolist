import { i as e } from "./commonAPI-9afb705d.js";
const l = {
  getTodolists() {
    return e.get("todo-lists").then((t) => (console.log("res", t), t.data));
  },
  createTodolist(t) {
    return e
      .post("todo-lists", { title: t })
      .then((o) => (console.log("res", o), o.data));
  },
  deleteTodolist(t) {
    return e
      .delete(`todo-lists/${t}`)
      .then((o) => (console.log("res", o), o.data));
  },
  updateTodolist(t, o) {
    return e
      .put(`todo-lists/${t}`, { title: o })
      .then((s) => (console.log("res", s), s.data));
  },
};
export { l as t };
