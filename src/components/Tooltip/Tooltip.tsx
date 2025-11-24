import * as RadixTooltip from "@radix-ui/react-tooltip"
import { ReactNode } from "react"
import styles from "./Tooltip.module.css"

export type TooltipProviderProps = RadixTooltip.TooltipProviderProps

export const TooltipProvider = ({ ...props }: TooltipProviderProps) => {
  return <RadixTooltip.Provider {...props} />
}

export type TooltipProps = Omit<RadixTooltip.TooltipContentProps, "content"> & {
  children: ReactNode
  content: ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Tooltip({ children, content, open, defaultOpen, onOpenChange, ...props }: TooltipProps) {
  if (content === undefined) {
    return <>{children}</>
  }

  return (
    <RadixTooltip.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={(open) => {
        onOpenChange?.(open)
      }}
      disableHoverableContent
      delayDuration={200}
    >
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content className={styles.tooltipContent} {...props} sideOffset={4}>
          {content}
          <RadixTooltip.Arrow className={styles.tooltipArrow} />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  )
}
