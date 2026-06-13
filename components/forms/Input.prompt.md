Text input with an optional label / hint / error scaffold; renders bare (no wrapper) when none are passed.

```jsx
<Input label="Email" type="email" placeholder="you@studio.com" required />
<Input label="Project" hint="Visible to your team" />
<Input label="Slug" error="Already taken" defaultValue="loom" />
<Input leadingIcon={<i data-lucide="search"></i>} placeholder="Search…" />
```

Sizes: `sm`/`md`/`lg`. Pass `error` to flip to the invalid style.
