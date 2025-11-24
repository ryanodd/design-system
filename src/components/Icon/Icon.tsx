import { ComponentPropsWithoutRef, ComponentType, forwardRef, HTMLAttributes } from "react"

import ArrowLeftSvg from "./icons/arrowLeft.svg"
import ArrowRightSvg from "./icons/arrowRight.svg"
import CheckSvg from "./icons/check.svg"
import CircleSvg from "./icons/circle.svg"
import CloseSvg from "./icons/close.svg"
import ExternalLinkSvg from "./icons/externalLink.svg"
import GearSvg from "./icons/gear.svg"
import HammerSvg from "./icons/hammer.svg"
import HeartSvg from "./icons/heart-solid.svg"
import KebabSvg from "./icons/kebab.svg"
import LightningSvg from "./icons/lightning.svg"
import MailSvg from "./icons/mail.svg"
import MenuSvg from "./icons/menu.svg"
import NoMobileSvg from "./icons/noMobile.svg"
import PencilSvg from "./icons/pencil.svg"

import iconStyles from "./icon.module.css"

export const iconSizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] as const

export type IconProps = ComponentPropsWithoutRef<"svg"> & {
  size?: typeof iconSizes[number]
}

export const createIcon = (SVG: ComponentType<HTMLAttributes<SVGSVGElement>>, label: string) => {
  const iconComponent = forwardRef<SVGSVGElement, IconProps>(({ size = "lg", className, ...props }, ref) => {
    return (
      <SVG
        className={`${className} ${iconStyles.icon}`}
        data-size={size}
        // @ts-ignore
        ref={ref}
        alt={label}
        {...props}
      />
    )
  })
  iconComponent.displayName = label
  return iconComponent
}


export const ArrowLeft = createIcon(ArrowLeftSvg, "Left")
export const ArrowRight = createIcon(ArrowRightSvg, "Right")
export const Check = createIcon(CheckSvg, "Check")
export const Circle = createIcon(CircleSvg, "Circle")
export const Close = createIcon(CloseSvg, "Close")
export const ExternalLink = createIcon(ExternalLinkSvg, "External Link")

export const Gear = createIcon(GearSvg, "Gear")

export const Hammer = createIcon(HammerSvg, "Hammer")
export const Heart = createIcon(HeartSvg, "Heart")
export const Kebab = createIcon(KebabSvg, "Kebab")
export const Lightning = createIcon(LightningSvg, "Lightning")
export const Mail = createIcon(MailSvg, "Mail")
export const Menu = createIcon(MenuSvg, "Menu")
export const NoMobile = createIcon(NoMobileSvg, "No Mobile Devices")
export const Pencil = createIcon(PencilSvg, "Pencil")


/*
* A centralized map of all icon components.
* This is what we will import in the Storybook file for dynamic access.
*/
export const IconMap: Record<string, ComponentType<IconProps> | null> = {
  ArrowLeft,
  ArrowRight,
  Check,
  Circle,
  Close,
  ExternalLink,
  Gear,
  Hammer,
  Heart,
  Kebab,
  Lightning,
  Mail,
  Menu,
  NoMobile,
  Pencil,
  None: null
}
