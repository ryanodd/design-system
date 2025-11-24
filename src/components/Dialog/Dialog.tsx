import * as RadixDialog from "@radix-ui/react-dialog"
import styles from "./Dialog.module.css"
import { ReactNode } from "react"
import { Close } from "../Icon"
import { Button } from "../Button"
export type DialogProps = RadixDialog.DialogProps & {
  title: ReactNode
  trigger: ReactNode
  content: ReactNode
}

export const Dialog = ({ trigger, content, title, ...props }: DialogProps) => {
  return (
    <RadixDialog.Root {...props}>
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={`${styles.dialogOverlay}`} />
        <RadixDialog.Content
          className={styles.dialogContent}
          onPointerDownOutside={(event) => {
            event?.preventDefault()
          }}
          data-size="md"
        >
          <RadixDialog.Close asChild>
            <Button className={`${styles.dialogCloseButton}`} variant="tertiary" iconOnly>
              <Close />
            </Button>
          </RadixDialog.Close>
          <RadixDialog.Title className={styles.dialogTitle}>{title}</RadixDialog.Title>
          {content}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}
