Tab strip for switching views — `line` (underline) for primary nav, `pill` (segmented) for compact filters.

```jsx
<Tabs
  variant="line"
  defaultValue="today"
  items={[
    { value: 'today', label: 'Today', count: 6 },
    { value: 'later', label: 'Later' },
    { value: 'done', label: 'Done', count: 24 },
  ]}
  onChange={setView}
/>
```

Works controlled (`value` + `onChange`) or uncontrolled (`defaultValue`).
