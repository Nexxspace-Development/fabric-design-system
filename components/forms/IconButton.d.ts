import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "ghost" */
  variant?: 'ghost' | 'soft' | 'outline';
  /** Square dimension. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label (also used as tooltip). Required. */
  label: string;
  /** The icon element. */
  children?: React.ReactNode;
}

/**
 * A square, icon-only button for toolbars and dense controls. Always pass
 * `label` for accessibility. Pair with Lucide icons sized 18–20px.
 */
export function IconButton(props: IconButtonProps): JSX.Element;
