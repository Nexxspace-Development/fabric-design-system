import * as React from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Field label rendered above the control. */
  label?: string;
  /** Options as strings or {value,label} objects. */
  options?: (string | SelectOption)[];
  /** Disabled first option shown when no value is selected. */
  placeholder?: string;
}

/** Native select styled to match Fabric fields, with a custom chevron. */
export function Select(props: SelectProps): JSX.Element;
