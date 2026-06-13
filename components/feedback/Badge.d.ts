import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. @default "neutral" */
  tone?: 'neutral' | 'primary' | 'warm' | 'gold' | 'cool' | 'success' | 'warning' | 'danger' | 'solid';
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}

/** Small pill for status and metadata. Soft tinted fills drawn from the muted palette. */
export function Badge(props: BadgeProps): JSX.Element;
