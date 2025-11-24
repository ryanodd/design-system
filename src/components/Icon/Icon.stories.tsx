import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconMap, IconProps, iconSizes } from "./Icon"

export type IconStoryProps = IconProps & {
    icon: keyof typeof IconMap
    color: string
}

const renderIconStory = ({ icon, color, ...props }: IconStoryProps) => {
    const IconComponent = IconMap[icon]
    if (!IconComponent) {
        return <p>Icon not found</p>
    }
    return (
        <div style={{ color }}>
            <IconComponent {...props} />
        </div>
    )
}

const meta = {
    title: "Design system/Icon",
    render: renderIconStory,
    parameters: {
        layout: "centered",
    },
    args: {
        color: "var(--color-text-secondary)",
    },
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        icon: {
            control: { type: "select" },
            options: Object.keys(IconMap),
            description: 'The icon to display',
        },
        size: {
            control: { type: "select" },
            options: iconSizes,
            description: 'The size of the icon',
        },
        color: {
            control: { type: "color" },
            description: 'The color of the icon',
        }
    },
} satisfies Meta<IconStoryProps>

export default meta
type Story = StoryObj<IconStoryProps>;

export const Playground: Story = {
    args: {
        icon: "ExternalLink",
    },
}

export const AllIcons: Story = {
    parameters: {
        layout: 'padded',
    },
    render: ({ icon, color, ...props }) => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '20px', padding: '20px', width: '100%', color }}>
            {Object.entries(IconMap).map(([name, IconComponent]) => {
                if (!IconComponent) return null
                return (
                    <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                        <IconComponent {...props} />
                        <span style={{ fontSize: '12px', fontFamily: 'sans-serif', color: '#666' }}>{name}</span>
                    </div>
                )
            })}
        </div>
    )
}
