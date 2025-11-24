import { type ComponentPropsWithoutRef, forwardRef } from "react"
import styles from "./Spinner.module.css"

import { iconSizes } from "../Icon/Icon"

export type SpinnerSize = typeof iconSizes[number]

export type SpinnerProps = ComponentPropsWithoutRef<"div"> & {
  /**
   * Indicates the diameter (height/width) of the `Spinner`'s container
   */
  size?: SpinnerSize
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  // eslint-disable-next-line @typescript-eslint/no-shadow
  ({ className, size = "lg", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={styles.spinnerWrapper}
        data-size={size}
        {...props}
      >
        <div className={styles.spinner} />
      </div>
    )
  },
)

Spinner.displayName = "Spinner"
