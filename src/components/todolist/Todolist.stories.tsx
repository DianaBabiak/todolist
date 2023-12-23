import type {Meta, StoryObj} from '@storybook/react';
import {Todolist} from "./Todolist.tsx";
import {initialGlobalState, ReduxStoreProviderDecorator} from "../../state/decorators/ReduxStoreProviderDecorator.tsx";






const meta: Meta<typeof Todolist> = {
    component:Todolist,
    decorators: [ReduxStoreProviderDecorator]
};

export default meta;

type Story = StoryObj<typeof Todolist>;

export const TodolistBasicExample:Story = {
    args:{
        ...initialGlobalState.todolist[0]
    }
}