import { ComponentPropsWithoutRef, ReactElement, ReactNode, forwardRef } from "react"
import styles from "./Button.module.css"
import { IconMap } from "../Icon/Icon"
import { Spinner } from "../Spinner/Spinner"

type Props = {
  children?: ReactNode
  size?: "small" | "medium" | "large"
  variant?: "primary" | "secondary" | "destructive" | "tertiary"
  loading?: boolean
  iconOnly?: boolean
  notificationDotText?: string


  /**
   * Optionally indicates which icon to use as a leading icon before the button text,
   * or the icon for an icon-only button.
   */
  icon?: keyof typeof IconMap

  /**
   * Optionally indicates which icon to use as a trailing icon after the button text.
   */
  trailingIcon?: keyof typeof IconMap
}

export type ButtonProps = ComponentPropsWithoutRef<"button"> & Props

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, notificationDotText, children, icon, trailingIcon, size = "medium", variant, loading, iconOnly, ...restProps }, ref) => {
    const IconComponent = icon ? IconMap[icon] : undefined
    const TrailingIconComponent = trailingIcon ? IconMap[trailingIcon] : undefined

    const iconSize = size === "small" ? "sm" : size === "medium" ? "md" : "lg"

    return (
      <button
        ref={ref}
        {...restProps}
        className={`${styles.button} ${className ?? ""}`}
        data-size={size}
        data-variant={variant}
        data-icon-only={iconOnly}
      >
        {IconComponent && <IconComponent size={iconSize} />}
        {loading && <Spinner size={iconSize} />}
        {children}
        {TrailingIconComponent && <TrailingIconComponent size={iconSize} />}
        {notificationDotText && <span className={styles.buttonNotificationDot}>{notificationDotText}</span>}
      </button>
    )
  }
)

Button.displayName = "Button"
