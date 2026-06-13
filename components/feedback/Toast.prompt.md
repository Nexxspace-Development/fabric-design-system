A single notification surface with a tone icon. Presentational — stack these in a fixed region you position yourself.

```jsx
<Toast tone="success" title="Saved" onClose={dismiss}>Your changes are tucked away.</Toast>
<Toast tone="warning" title="Offline">We'll sync when you reconnect.</Toast>
```

Tones: `info` / `success` / `warning` / `danger`.
