# Fabric — Landing (Website UI kit)

The Fabric marketing site: a calm, paper-warm landing page that sells the product's central promise — *calm tools for focused work*. Recreated to show the design system in a marketing context.

## Run
Open `index.html`. Single scrolling page: sticky nav → hero (with a live product preview built from real components) → features → a dark philosophy band → email CTA → footer.

## Files
- `index.html` — page CSS + script loader + mount.
- `icons.jsx` — inline-SVG Lucide `<Icon>` helper.
- `Site.jsx` — `Nav`, `Hero`, `HeroPreview`, `Features`, `Philosophy`, `CTA`, `Footer`.

## Composition
Uses `window.FabricDesignSystem_7bb975` primitives: `Button`, `Badge`, `Card`, `Checkbox`, `Tag`, `Input`, `Avatar`. The hero preview is assembled from the same `Card` / `Checkbox` / `Tag` used in the app — so the marketing shot is pixel-true to the product. Two background tones only: warm canvas and the inverse (bark) philosophy band.
