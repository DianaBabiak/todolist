import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {AddField} from "./AddField.tsx";


const meta: Meta<typeof AddField> = {
    component:AddField,
};

export default meta;

type Story = StoryObj<typeof AddField>;

export const AddFieldBasicExample:Story = {
    args:{
        handlerAdd:action('Add Field')

    }
}
