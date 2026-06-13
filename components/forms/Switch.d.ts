import * as React from 'react';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Optional label beside the switch. */
  label?: string;
  /** Disabled state. @default false */
  disabled?: boolean;
}

/** Toggle switch for instant on/off settings. Use for state that applies immediately. */
export function Switch(props: SwitchProps): JSX.Element;
