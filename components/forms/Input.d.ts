import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Field label rendered above the control. */
  label?: string;
  /** Helper text below the control. */
  hint?: string;
  /** Error message; switches the field to its invalid style. */
  error?: string;
  /** Show a required asterisk. @default false */
  required?: boolean;
  /** Control height. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Icon rendered inside the field, leading edge. */
  leadingIcon?: React.ReactNode;
}

/** Text input with label / hint / error scaffold; renders bare when none are passed. */
export function Input(props: InputProps): JSX.Element;
