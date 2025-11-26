import * as RadixMenuButton from "@radix-ui/react-dropdown-menu"
import { Button } from "../Button"
import styles from "./MenuButton.module.css"

import { ReactNode } from "react"

export type MenuButtonProps = React.ComponentPropsWithoutRef<typeof RadixMenuButton.Root> & {
    children: ReactNode
}

export const MenuButton = ({ children, ...props }: MenuButtonProps) => {
    return (
        <RadixMenuButton.Root modal={false} {...props}>
            <RadixMenuButton.Trigger asChild>
                <Button data-variant="tertiary" iconOnly icon="Menu" />
            </RadixMenuButton.Trigger>
            <RadixMenuButton.Portal>
                <RadixMenuButton.Content align="end" className={styles.menuButtonContent} sideOffset={5}>
                    {children}
                    <RadixMenuButton.Arrow className={styles.menuButtonArrow} />
                </RadixMenuButton.Content>
            </RadixMenuButton.Portal>
        </RadixMenuButton.Root >
    )
}

export type MenuButtonItemProps = React.ComponentPropsWithoutRef<typeof RadixMenuButton.Item> & {
    children: ReactNode;
}

export const MenuButtonItem = ({ children, ...props }: MenuButtonItemProps) => {
    return (
        <RadixMenuButton.Item className={styles.menuButtonItem} {...props}>
            {children}
        </RadixMenuButton.Item>
    )
}
