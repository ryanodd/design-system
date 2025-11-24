import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button, ButtonProps } from "./Button"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Design system/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: 'Click Me', // Default children as a string
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: {
      control: { type: 'text' as const },
      description: 'The content inside the button (text, icon, or mixed)',
    },
  },
} satisfies Meta<ButtonProps>

export default meta
// Defines the type for a Story using the extended args
type Story = StoryObj<ButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {
  args: {
  },
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Primary: Story = {
//   args: {
//     variant: "primary",
//   },
// }

