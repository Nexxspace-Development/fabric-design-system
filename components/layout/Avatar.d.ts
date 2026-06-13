import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Person/entity name — drives initials and the fallback tone. */
  name?: string;
  /** Image URL; falls back to initials when absent. */
  src?: string;
  /** Diameter. @default "md" */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Show a soft ring around the avatar. @default false */
  ring?: boolean;
}

/** Circular avatar — image when `src` is set, else colored initials derived from `name`. */
export function Avatar(props: AvatarProps): JSX.Element;
