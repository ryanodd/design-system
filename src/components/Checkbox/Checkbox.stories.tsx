import type { Meta, StoryObj } from "@storybook/react-vite"
import { Checkbox, CheckboxProps } from "./Checkbox"

const meta = {
    title: "Design system/Checkbox",
    component: Checkbox,
    parameters: {
        layout: "centered",
    },
    args: {
        labelContent: "My checkbox",
        id: "my-checkbox",
        onClick: () => { }
    },
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        labelContent: {
            control: { type: 'text' as const },
            description: 'Label text',
        },
    },
} satisfies Meta<CheckboxProps>

export default meta
type Story = StoryObj<CheckboxProps>;

export const Playground: Story = {
    args: {},
}

