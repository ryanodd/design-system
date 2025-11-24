import type { Meta, StoryObj } from "@storybook/react-vite"
import { ReactNode } from "react"

import "./text.css"

export type TextStoryProps = {
    children: ReactNode
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Design system/Text",
    parameters: {
        layout: "centered",
    },
    args: {
        children: 'Lorem ipsum dolor sit amet',
    },
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        children: {
            control: { type: 'text' as const },
            description: 'The content inside the text element',
        },
    },
} satisfies Meta<TextStoryProps>

export default meta
type Story = StoryObj<TextStoryProps>;

export const Text: Story = {
    render: ({ children }) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                    <span className="label-2 text-color-tertiary">Header 1</span>
                    <h1 className="header-1">{children}</h1>
                </div>

                <div>
                    <span className="label-2 text-color-tertiary">Header 2</span>
                    <h2 className="header-2">{children}</h2>
                </div>

                <div>
                    <span className="label-2 text-color-tertiary">Header 3</span>
                    <h3 className="header-3">{children}</h3>
                </div>

                <div>
                    <span className="label-2 text-color-tertiary">Header 4</span>
                    <h4 className="header-4">{children}</h4>
                </div>

                <div>
                    <span className="label-2 text-color-tertiary">Header 5</span>
                    <h5 className="header-5">{children}</h5>
                </div>

                <div>
                    <span className="label-2 text-color-tertiary">Header 6</span>
                    <h6 className="header-6">{children}</h6>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                    <span className="label-2 text-color-tertiary">Body 1</span>
                    <p className="body-1">{children}</p>
                </div>
                <div>
                    <span className="label-2 text-color-tertiary">Body 2</span>
                    <p className="body-2">{children}</p>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                    <span className="label-2 text-color-tertiary">Body 1 Semibold</span>
                    <p className="body-1-semibold">{children}</p>
                </div>
                <div>
                    <span className="label-2 text-color-tertiary">Body 2 Semibold</span>
                    <p className="body-2-semibold">{children}</p>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                    <span className="label-2 text-color-tertiary">Subtitle 1</span>
                    <div className="subtitle-1">{children}</div>
                </div>
                <div>
                    <span className="label-2 text-color-tertiary">Subtitle 2</span>
                    <div className="subtitle-2">{children}</div>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                    <span className="label-2 text-color-tertiary">Caption 1</span>
                    <div className="caption-1">{children}</div>
                </div>
                <div>
                    <span className="label-2 text-color-tertiary">Caption 2</span>
                    <div className="caption-2">{children}</div>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                    <span className="label-2 text-color-tertiary">Label 1</span>
                    <div className="label-1">{children}</div>
                </div>
                <div>
                    <span className="label-2 text-color-tertiary">Label 2</span>
                    <div className="label-2">{children}</div>
                </div>
            </div>
        </div>
    )
}

export const TextColors: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span className="label-1 text-color-primary">Text color: Primary</span>
            <span className="label-1 text-color-secondary">Text color: Secondary</span>
            <span className="label-1 text-color-tertiary">Text color: Tertiary</span>
            <span className="label-1 text-color-inverted" style={{ backgroundColor: 'black' }}>Text color: Inverted</span>
            <span className="label-1 text-color-brand">Text color: Brand</span>
            <span className="label-1 text-color-error">Text color: Error</span>
            <span className="label-1 text-color-success">Text color: Success</span>
            <span className="label-1 text-color-warning">Text color: Warning</span>
            <span className="label-1 text-color-disabled">Text color: Disabled</span>
        </div>
    ),
    args: {
        children: 'Color preview',
    },
}

