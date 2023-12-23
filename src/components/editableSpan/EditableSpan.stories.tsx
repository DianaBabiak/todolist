import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {EditableSpan} from "./EditableSpan.tsx";




const meta: Meta<typeof EditableSpan> = {
    component:EditableSpan,
};

export default meta;

type Story = StoryObj<typeof EditableSpan>;

export const EditableSpanBasicExample:Story = {
    args:{
        label: 'HTML',
        onEditHandler: action('Add new title'),
        variantTypography:"h4"

    }
}