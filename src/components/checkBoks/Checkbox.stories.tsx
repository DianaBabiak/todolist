import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {CheckBox} from "./CheckBox.tsx";



const meta: Meta<typeof CheckBox> = {
    component:CheckBox,
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const CheckBoxBasicExample:Story = {
    args:{
        checked: true,
        onChange: action('click checkbox')

    }
}
