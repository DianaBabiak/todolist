import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { FilterButton } from "./FilterButton.tsx";
import { TodoItemFilter } from "../../state/type.ts";

const meta: Meta<typeof FilterButton> = {
  component: FilterButton,
};

export default meta;

type Story = StoryObj<typeof FilterButton>;

export const FilterButtonBasicExample: Story = {
  args: {
    status: TodoItemFilter.Completed,
    onClickHandler: action("change filter"),
    isSelected: true,
  },
};
