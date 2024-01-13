import type {Meta, StoryObj} from '@storybook/react';
import App from "./App.tsx";
import {ReduxStoreProviderDecorator} from "../state/decorators/ReduxStoreProviderDecorator.tsx";



const meta: Meta<typeof App> = {
    component: App,
    decorators: [ReduxStoreProviderDecorator]
};

export default meta;

type Story = StoryObj<typeof App>;

export const AppBasicExample: Story = {

    args: {
        demo:true

    }
}