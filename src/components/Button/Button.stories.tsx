import type { Meta, StoryObj } from "@storybook/react-vite"
import { ReactNode } from "react";

import { Button, ButtonProps } from "./Button"
import { IconMap } from "../Icon/Icon";

const renderButtonWithIcon = (args: ButtonProps & { leftIconName: keyof typeof IconMap, rightIconName: keyof typeof IconMap }) => {
  const { children, leftIconName, rightIconName, ...rest } = args;

  const LeftIconComponent = IconMap[leftIconName]
  const RightIconComponent = IconMap[rightIconName]
  const finalChildren: ReactNode[] = [];

  if (LeftIconComponent) {
    finalChildren.push(<LeftIconComponent />);
  }
  if (children) {
    finalChildren.push(children);
  }
  if (RightIconComponent) {
    finalChildren.push(<RightIconComponent />);
  }

  return (
    <Button {...rest}>
      {finalChildren}
    </Button>
  );
};



// Extend ButtonProps type for Storybook controls
type ButtonStoryArgs = ButtonProps & {
  leftIconName: keyof typeof IconMap;
  rightIconName: keyof typeof IconMap;
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  render: renderButtonWithIcon,
  parameters: {
    layout: "centered",
  },
  args: {
    children: 'Click Me', // Default children as a string
    leftIconName: 'None' as keyof typeof IconMap, // New default icon name
    rightIconName: 'None' as keyof typeof IconMap, // New default icon name
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: {
      control: { type: 'text' as const },
      description: 'The content inside the button (text, icon, or mixed)',
    },
    leftIconName: {
      control: { type: 'select' as const },
      options: Object.keys(IconMap) as Array<keyof typeof IconMap>, // Automatically uses all keys from the IconMap
      description: 'Select an optional icon component to be prepended to the children.',
    },
    rightIconName: {
      control: { type: 'select' as const },
      options: Object.keys(IconMap) as Array<keyof typeof IconMap>, // Automatically uses all keys from the IconMap
      description: 'Select an optional icon component to be appended to the children.',
    },
  },
} satisfies Meta<ButtonStoryArgs>

export default meta
// Defines the type for a Story using the extended args
type Story = StoryObj<ButtonStoryArgs>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
}

// export const Secondary: Story = {
//   args: {
//     label: "Button",
//   },
// }

// export const Large: Story = {
//   args: {
//     size: "large",
//     label: "Button",
//   },
// }

// export const Small: Story = {
//   args: {
//     size: "small",
//     label: "Button",
//   },
// }
