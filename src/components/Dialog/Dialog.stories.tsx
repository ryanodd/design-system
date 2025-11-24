import type { Meta, StoryObj } from "@storybook/react-vite"
import { Dialog } from "./Dialog"
import { Button } from "../Button"

export type DialogStoryProps = {
}

const renderDialogStory = ({ }: DialogStoryProps) => {
    return (
        <Dialog title="Dialog title" trigger={<Button>Open Dialog</Button>} content={<p>Dialog content</p>} />

    )
}

const meta = {
    title: "Design system/Dialog",
    render: renderDialogStory,
    parameters: {
        layout: "centered",
    },
    args: {},
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        children: {
            control: { type: 'text' as const },
            description: 'The content inside the text element',
        },
    },
} satisfies Meta<DialogStoryProps>

export default meta
type Story = StoryObj<DialogStoryProps>;

export const Playground: Story = {
    args: {},
}

