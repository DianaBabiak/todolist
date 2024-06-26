import { useCallback, useState } from "react";
import { TaskStatuses, TodoItemFilter } from "../state/type.ts";
import { useAppDispatch, useAppSelector } from "../state/store.ts";
import {
  deleteTodolistTC,
  editTitleTodolistTC,
} from "../state/todolists/todolistReducer.ts";
import {
  createTaskTC,
  deleteTaskTC,
  updateTaskTC,
} from "../state/tasks/tasksReduser.ts";

export const useTodolist = (id: string) => {
  const [filter, setFilter] = useState(TodoItemFilter.All);
  const stateTasks = useAppSelector(({ tasks }) => tasks);
  const dispatch = useAppDispatch();

  const filterTasks = stateTasks[id].filter((item) => {
    if (filter === TodoItemFilter.All) {
      return item;
    }
    return filter === TodoItemFilter.Completed
      ? item.status === TaskStatuses.Completed
      : item.status === TaskStatuses.New;
  });

  const handlerDeleteTodolist = useCallback(() => {
    dispatch(deleteTodolistTC(id));
  }, [dispatch, id]);

  const onDeleteTodoTask = useCallback(
    (idTask: string) => {
      dispatch(deleteTaskTC({ idTodo: id, idTask }));
    },
    [dispatch, id],
  );

  const handlerAddTodoTask = useCallback(
    (newTitle: string) => {
      dispatch(createTaskTC({ idTodo: id, newTitle }));
    },
    [dispatch, id],
  );

  const onChangeChecked = useCallback(
    (idTask: string, status: TaskStatuses) => {
      dispatch(
        updateTaskTC({ idTodo: id, idTask, modelTask: { status: status } }),
      );
    },
    [dispatch, id],
  );

  const onClickFilterButtonHandler = useCallback(
    (activeStatus: TodoItemFilter) => {
      setFilter(activeStatus);
    },
    [],
  );

  const onEditTodoHandler = useCallback(
    (newTitle: string) => {
      dispatch(editTitleTodolistTC({ id, newTitle }));
    },
    [dispatch, id],
  );

  const onEditTodoItemHandler = useCallback(
    (idTask: string, newLabel: string) => {
      dispatch(
        updateTaskTC({ idTodo: id, idTask, modelTask: { title: newLabel } }),
      );
    },
    [dispatch, id],
  );

  return {
    status: filter,
    filterTasks,
    onEditTodoHandler,
    handlerDeleteTodolist,
    handlerAddTodoTask,
    onDeleteTodoTask,
    onChangeChecked,
    onEditTodoItemHandler,
    onClickFilterButtonHandler,
  };
};
