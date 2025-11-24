import type { Meta, StoryObj } from "@storybook/react-vite"
import { Toast, ToastViewport } from "./Toast"
import { Button } from "../Button"
import { ToastProvider } from "@radix-ui/react-toast"
import { useState } from "react"

export type ToastStoryProps = {
}

const renderToastStory = ({ }: ToastStoryProps) => {
    const [showToast, setShowToast] = useState(false)
    return (
        <ToastProvider duration={8000}>
            <Button onClick={() => { setShowToast(true) }}>Show Toast</Button>
            <ToastViewport>
                {showToast &&
                    <Toast toastTitle="Toast Title" toastDescription="Toast Description" onOpenChange={setShowToast} />
                }
            </ToastViewport>
        </ToastProvider>

    )
}

const meta = {
    title: "Design system/Toast",
    render: renderToastStory,
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
} satisfies Meta<ToastStoryProps>

export default meta
type Story = StoryObj<ToastStoryProps>;

export const Playground: Story = {
    args: {},
}

