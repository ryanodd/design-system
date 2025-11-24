import { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner, SpinnerProps } from "./Spinner";
import { iconSizes } from "../Icon";

export type SpinnerStoryProps = SpinnerProps & {
  color: string
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Design system/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  args: {
    color: "#000000",
    size: "md",
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      control: "color",
      description: 'The color of the spinner',
    },
    size: {
      control: { type: "select" },
      options: iconSizes,
      description: 'The size of the spinner',
    },
  },
} satisfies Meta<SpinnerStoryProps>

export default meta
type Story = StoryObj<SpinnerStoryProps>;

export const Playground: Story = {
  render: ({ color, ...props }) => {
    return (
      <div style={{ color }}>
        <Spinner {...props} />
      </div>
    )
  }
}
