Fabric's primary action control — use it for any clickable action; pick exactly one `primary` per view.

```jsx
<Button variant="primary" size="md" onClick={save}>Save changes</Button>
<Button variant="secondary" leadingIcon={<Icon name="plus" />}>New</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button variant="danger">Delete</Button>
```

Variants: `primary` (key action), `secondary` (neutral, bordered), `ghost` (low-emphasis), `soft` (tinted sage), `danger` (destructive). Sizes: `sm` 32px, `md` 40px, `lg` 48px. Use `block` to fill width, `leadingIcon`/`trailingIcon` for icons.
