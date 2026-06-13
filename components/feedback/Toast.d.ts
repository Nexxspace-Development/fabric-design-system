import * as React from 'react';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Status tone. @default "info" */
  tone?: 'info' | 'success' | 'warning' | 'danger';
  /** Bold title line. */
  title?: string;
  /** Optional dismiss handler; renders a × button when provided. */
  onClose?: () => void;
  /** Secondary message body. */
  children?: React.ReactNode;
}

/** A single notification surface. Presentational — position it in your own toast region. */
export function Toast(props: ToastProps): JSX.Element;
