import * as React from 'react';

export interface TabItem {
  value: string;
  label: React.ReactNode;
  /** Optional count shown after the label. */
  count?: number;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Tab definitions. */
  items: TabItem[];
  /** Controlled active value. */
  value?: string;
  /** Uncontrolled initial value. */
  defaultValue?: string;
  /** Fires with the newly-selected value. */
  onChange?: (value: string) => void;
  /** Visual style. @default "line" */
  variant?: 'line' | 'pill';
}

/** Tab strip for switching views — `line` (underline) or `pill` (segmented). */
export function Tabs(props: TabsProps): JSX.Element;
