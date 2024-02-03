import { v1 } from "uuid";
import { TodolistType } from "../../api/commonAPI.ts";
import {
  StatusLoading,
  TaskPriorities,
  TaskStatuses,
  TodolistStateType,
} from "../type.ts";
import {
  changeStatusTodolistCA,
  createTodolistTC,
  deleteTodolistTC,
  editTitleTodolistTC,
  getTodolistsTC,
  todolistReducer,
} from "./todolistReducer.ts";

const todolistId1 = v1();
const todolistId2 = v1();

let startState: TodolistStateType[];
beforeEach(() => {
  startState = [
    {
      title: "Programming",
      id: todolistId1,
      addedDate: "",
      order: 0,
      entityStatus: StatusLoading.idle,
    },
    {
      title: "Drinks",
      id: todolistId2,
      addedDate: "",
      order: 0,
      entityStatus: StatusLoading.idle,
    },
  ];
});
test("correct todolist should be removed", () => {
  const endState = todolistReducer(
    startState,
    deleteTodolistTC.fulfilled({ idTodo: todolistId1 }, "", todolistId1),
  );

  expect(endState.length).toBe(1);
  expect(endState[0].id).toBe(todolistId2);
});
test("correct todolist should be added", () => {
  const newTodolistTitle = "New Todolist";

  const stateTasks = {
    [todolistId1]: [
      {
        addedDate: "",
        deadline: "",
        description: "",
        id: v1(),
        order: 0,
        priority: TaskPriorities.Low,
        startDate: "",
        status: TaskStatuses.Completed,
        title: "JS",
        todoListId: todolistId1,
      },
      {
        addedDate: "",
        deadline: "",
        description: "",
        id: v1(),
        order: 0,
        priority: TaskPriorities.Low,
        startDate: "",
        status: TaskStatuses.New,
        title: "HTML",
        todoListId: todolistId1,
      },
    ],
    [todolistId2]: [
      {
        addedDate: "",
        deadline: "",
        description: "",
        id: v1(),
        order: 0,
        priority: TaskPriorities.Low,
        startDate: "",
        status: TaskStatuses.Completed,
        title: "Milk",
        todoListId: todolistId2,
      },
      {
        addedDate: "",
        deadline: "",
        description: "",
        id: v1(),
        order: 0,
        priority: TaskPriorities.Low,
        startDate: "",
        status: TaskStatuses.New,
        title: "Water",
        todoListId: todolistId2,
      },
    ],
  };
  const newTodoId = v1();
  stateTasks[newTodoId] = [];

  const endState = todolistReducer(
    startState,
    createTodolistTC.fulfilled(
      {
        data: {
          title: newTodolistTitle,
          id: newTodoId,
          addedDate: "",
          order: 0,
        },
      },
      "",
      newTodolistTitle,
    ),
  );

  expect(endState.length).toBe(3);
  expect(endState[0].title).toBe(newTodolistTitle);
  expect(Object.keys(stateTasks)).toHaveLength(3);
});
test("correct todolist should change its name", () => {
  const newTodolistTitle = "New Todolist";
  const endState = todolistReducer(
    startState,
    editTitleTodolistTC.fulfilled(
      {
        idTodo: todolistId2,
        newTitle: newTodolistTitle,
      },
      "",
      { id: todolistId2, newTitle: newTodolistTitle },
    ),
  );
  expect(endState[0].title).toBe("Programming");
  expect(endState[1].title).toBe(newTodolistTitle);
});
test("correct todolist should change its status", () => {
  const newStatus = StatusLoading.loading;
  const endState = todolistReducer(
    startState,
    changeStatusTodolistCA({
      idTodo: todolistId2,
      status: newStatus,
    }),
  );
  expect(endState[0].entityStatus).toBe(StatusLoading.idle);
  expect(endState[1].entityStatus).toBe(newStatus);
});
test("get todolists from API", () => {
  const data: TodolistType[] = [
    ...startState,
    {
      title: "Books",
      id: v1(),
      addedDate: "",
      order: 0,
    },
  ];
  const endState = todolistReducer(
    startState,
    getTodolistsTC.fulfilled(data, ""),
  );
  expect(endState[2].title).toBe("Books");
  expect(endState.length).toBe(3);
  expect(startState.length).toBe(2);
});
