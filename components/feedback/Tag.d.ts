import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Optional leading dot color (e.g. a list/category color). */
  color?: string;
  /** Show pointer + hover affordance for filter chips. @default false */
  selectable?: boolean;
  /** Selected state for filter chips. @default false */
  selected?: boolean;
  /** When provided, renders a remove (×) button calling this handler. */
  onRemove?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

/** A chip for labels, categories, and filters. Bordered, optionally removable or selectable. */
export function Tag(props: TagProps): JSX.Element;
