import { v1 } from "uuid";
import { TaskPriorities, TaskStatuses, TodoTasksType } from "../type.ts";
import {
  createTaskTC,
  deleteTaskTC,
  getTasksTC,
  tasksReducer,
  updateTaskTC,
} from "./tasksReduser.ts";
import { TaskType } from "../../api/commonAPI.ts";
import {
  createTodolistTC,
  deleteTodolistTC,
  getTodolistsTC,
} from "../todolists/todolistReducer.ts";

const idTodoOne = v1();
const idTodoTwo = v1();
const idTodoThree = v1();
const idTask = v1();
let state: TodoTasksType;

beforeEach(() => {
  state = {
    [idTodoOne]: [
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
        todoListId: idTodoOne,
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
        todoListId: idTodoOne,
      },
      {
        addedDate: "",
        deadline: "",
        description: "",
        id: v1(),
        order: 0,
        priority: TaskPriorities.Low,
        startDate: "",
        status: TaskStatuses.Completed,
        title: "React",
        todoListId: idTodoOne,
      },
    ],
    [idTodoTwo]: [
      {
        addedDate: "",
        deadline: "",
        description: "",
        id: idTask,
        order: 0,
        priority: TaskPriorities.Low,
        startDate: "",
        status: TaskStatuses.Completed,
        title: "Milk",
        todoListId: idTodoTwo,
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
        todoListId: idTodoTwo,
      },
      {
        addedDate: "",
        deadline: "",
        description: "",
        id: v1(),
        order: 0,
        priority: TaskPriorities.Low,
        startDate: "",
        status: TaskStatuses.Completed,
        title: "Tea",
        todoListId: idTodoTwo,
      },
    ],
  };
});
test("correct task should be removed when was removed todolist", () => {
  const res = tasksReducer(
    state,
    deleteTodolistTC.fulfilled({ idTodo: idTodoOne }, "", idTodoOne),
  );

  expect(Object.keys(res).length).toBe(1);
});
test("correct task should be add when was add todolist", () => {
  const idTodoThree = v1();
  const res = tasksReducer(
    state,
    createTodolistTC.fulfilled(
      { data: { id: idTodoThree, title: "Test", order: 1, addedDate: "" } },
      "",
      "Test",
    ),
  );
  expect(Object.keys(res).length).toBe(3);
  expect(res[idTodoThree]).toStrictEqual([]);
});
test("delete task", () => {
  const res = tasksReducer(
    state,
    deleteTaskTC.fulfilled(
      { idTodo: idTodoOne, idTask: state[idTodoOne][0].id },
      "",
      { idTodo: idTodoOne, idTask: state[idTodoOne][0].id },
    ),
  );
  expect(res[idTodoOne].length).toBe(2);
  expect(res[idTodoOne][0].title).toBe("HTML");
});
test("add task", () => {
  const res = tasksReducer(
    state,
    createTaskTC.fulfilled(
      {
        data: {
          addedDate: "",
          deadline: "",
          description: "",
          id: v1(),
          order: 0,
          priority: TaskPriorities.Low,
          startDate: "",
          status: TaskStatuses.Completed,
          title: "Jest",
          todoListId: idTodoOne,
        },
      },
      "",
      { idTodo: idTodoOne, newTitle: "Jest" },
    ),
  );
  expect(res[idTodoOne].length).toBe(4);
  expect(res[idTodoOne][0].title).toBe("Jest");
});
test("change checked", () => {
  const res = tasksReducer(
    state,
    updateTaskTC.fulfilled(
      {
        task: {
          addedDate: "",
          deadline: "",
          description: "",
          id: idTask,
          order: 0,
          priority: TaskPriorities.Low,
          startDate: "",
          status: TaskStatuses.New,
          title: "Milk",
          todoListId: idTodoTwo,
        },
      },
      "",
      { idTodo: idTodoTwo, idTask, modelTask: { status: TaskStatuses.New } },
    ),
  );
  expect(res[idTodoTwo][0].status).toBe(TaskStatuses.New);
  expect(state[idTodoTwo][0].status).toBe(TaskStatuses.Completed);
});
test("edit title task", () => {
  const res = tasksReducer(
    state,
    updateTaskTC.fulfilled(
      {
        task: {
          addedDate: "",
          deadline: "",
          description: "",
          id: idTask,
          order: 0,
          priority: TaskPriorities.Low,
          startDate: "",
          status: TaskStatuses.Completed,
          title: "Tea",
          todoListId: idTodoTwo,
        },
      },
      "",
      { idTodo: idTodoTwo, idTask, modelTask: { title: "Tea" } },
    ),
  );
  expect(res[idTodoTwo][0].title).toBe("Tea");
  expect(state[idTodoTwo][0].title).toBe("Milk");
});
test("get tasks from API", () => {
  const data: TaskType[] = [
    {
      addedDate: "",
      deadline: "",
      description: "",
      id: v1(),
      order: 0,
      priority: TaskPriorities.Later,
      startDate: "",
      status: TaskStatuses.New,
      title: "Get  Task",
      todoListId: idTodoThree,
    },
  ];

  const res = tasksReducer(
    state,
    getTasksTC.fulfilled({ idTodo: idTodoThree, data }, "", idTodoThree),
  );
  expect(res[idTodoThree][0].title).toBe("Get  Task");
  expect(res[idTodoTwo][0].title).toBe("Milk");
  expect(Object.keys(state).length).toBe(2);
  expect(Object.keys(res).length).toBe(3);
});
test("get todolists from API", () => {
  const res = tasksReducer(
    state,
    getTodolistsTC.fulfilled(
      [
        {
          title: "Books",
          id: idTodoThree,
          addedDate: "",
          order: 0,
        },
      ],
      "",
    ),
  );

  expect(Object.keys(state).length).toBe(2);
  expect(Object.keys(res).length).toBe(3);
});
