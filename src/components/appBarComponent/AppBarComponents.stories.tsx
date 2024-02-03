import type { Meta, StoryObj } from "@storybook/react";
import { AppBarComponent } from "./AppBarComponent.tsx";

const meta: Meta<typeof AppBarComponent> = {
  component: AppBarComponent,
};

export default meta;

type Story = StoryObj<typeof AppBarComponent>;

export const AppBarComponentBasicExample: Story = {
  args: {},
};
