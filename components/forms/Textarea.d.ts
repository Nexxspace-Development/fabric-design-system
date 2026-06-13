import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Field label rendered above the control. */
  label?: string;
  /** Helper text below the control. */
  hint?: string;
  /** Error message; switches to the invalid style. */
  error?: string;
}

/** Multi-line text field. Vertically resizable, shares the Fabric field look. */
export function Textarea(props: TextareaProps): JSX.Element;
