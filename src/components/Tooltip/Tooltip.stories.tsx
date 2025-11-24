import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tooltip, TooltipProvider } from "./Tooltip"
import { Button } from "../Button"

export type TooltipStoryProps = {
    content: string
}

const renderTooltipStory = ({ content }: TooltipStoryProps) => {
    return (
        <TooltipProvider>
            <Tooltip
                content={content}
            >
                <Button iconOnly variant="tertiary" icon="ArrowRight" />
            </Tooltip>
        </TooltipProvider>
    )
}

const meta = {
    title: "Design system/Tooltip",
    render: renderTooltipStory,
    parameters: {
        layout: "centered",
    },
    args: {
        content: "The content of the tooltip.",
    },
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        content: {
            control: { type: 'text' as const },
            description: 'The content of the tooltip',
        },
    },
} satisfies Meta<TooltipStoryProps>

export default meta
type Story = StoryObj<TooltipStoryProps>;

export const Playground: Story = {
    args: {},
}

