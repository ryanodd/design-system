// This file tells TypeScript how to handle imports of CSS Modules.
// Without this declaration, TypeScript throws the error 'Cannot find module './name.module.css''.

/**
 * Declares a module for all files ending in .module.css.
 * It tells TypeScript that when a CSS module is imported, it should be treated
 * as an object (classes) mapping strings (class names) to strings (hashed names).
 */
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.svg' {
    import { ComponentType, HTMLAttributes } from 'react';
    const SVG: ComponentType<HTMLAttributes<SVGSVGElement>>;
    export default SVG;
}
