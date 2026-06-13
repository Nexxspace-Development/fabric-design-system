import * as React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  /** Line direction. @default "horizontal" */
  orientation?: 'horizontal' | 'vertical';
  /** Line texture — solid hairline or a dashed running-stitch thread. @default "solid" */
  variant?: 'solid' | 'stitch';
  /** Optional centered label (renders a text-in-rule divider). */
  label?: string;
}

/** A hairline rule. Pass `label` for a centered "OR"-style divider, or `variant="stitch"` for a textile running-stitch line. */
export function Divider(props: DividerProps): JSX.Element;
