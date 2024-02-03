import type { Meta, StoryObj } from "@storybook/react";
import {
  idTodoOne,
  initialGlobalState,
  ReduxStoreProviderDecorator,
} from "../../../state/decorators/ReduxStoreProviderDecorator.tsx";
import { TodoTask } from "./TodoTask.tsx";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof TodoTask> = {
  component: TodoTask,
  decorators: [ReduxStoreProviderDecorator],
};

export default meta;

type Story = StoryObj<typeof TodoTask>;

export const TodoTaskBasicExample: Story = {
  args: {
    task: { ...initialGlobalState.tasks[idTodoOne][0] },
    handlerDeleteTodoTask: action("Delete todoTask"),
    onChangeCheckedHandler: action("change checked task"),
    onEditTodoItem: action("edite title"),
  },
};
