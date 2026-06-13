import * as React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text beside the box. */
  label?: string;
  /** Secondary description under the label. */
  description?: string;
  /** Disabled state. @default false */
  disabled?: boolean;
}

/** Checkbox with custom check glyph, optional label and description. */
export function Checkbox(props: CheckboxProps): JSX.Element;
