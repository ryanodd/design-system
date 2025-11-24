import type { Meta, StoryObj } from "@storybook/react-vite"
import { MenuButton, MenuButtonItem } from "./MenuButton"

export type MenuButtonStoryProps = {
}

const renderMenuButtonStory = ({ }: MenuButtonStoryProps) => {
    return (
        <MenuButton>
            <MenuButtonItem>Item 1</MenuButtonItem>
            <MenuButtonItem>Item 2</MenuButtonItem>
            <MenuButtonItem>Item 3</MenuButtonItem>
        </MenuButton>
    )
}

const meta = {
    title: "Design system/MenuButton",
    render: renderMenuButtonStory,
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
} satisfies Meta<MenuButtonStoryProps>

export default meta
type Story = StoryObj<MenuButtonStoryProps>;

export const Playground: Story = {
    args: {},
}

