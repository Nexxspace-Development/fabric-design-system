import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Shadow depth. @default "raised" */
  elevation?: 'flat' | 'raised' | 'floating';
  /** Inner padding. @default "md" */
  padding?: 'sm' | 'md' | 'lg';
  /** Add hover lift + pointer for clickable cards. @default false */
  interactive?: boolean;
  /** Render as a different element (e.g. "a", "article"). @default "div" */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

/** The fundamental Fabric surface: warm paper, hairline border, soft shadow, generous radius. */
export function Card(props: CardProps): JSX.Element;
