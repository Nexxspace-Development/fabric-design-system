import * as React from 'react';

export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Tooltip text. */
  label: React.ReactNode;
  /** Side the bubble appears on. @default "top" */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /** Hover delay before showing, ms. @default 120 */
  delay?: number;
  /** The trigger element. */
  children?: React.ReactNode;
}

/** Hover/focus tooltip. Wraps a trigger and shows a small dark bubble. */
export function Tooltip(props: TooltipProps): JSX.Element;
