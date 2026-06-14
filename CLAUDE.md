# Fabric Design System — project notes

## Workflow conventions
- **CHANGELOG discipline:** whenever a feature/change is finished, add a new dated,
  versioned entry to `CHANGELOG.md` (Keep a Changelog format, loose semver pre-1.0).
  Bump the version, add the `[x.y.z]` release-link line at the bottom, and mention
  it so the user can push a checkpoint. Current latest: 0.4.0.
- **README is canonical & uppercase:** there is exactly one `README.md` (never also a
  lowercase `readme.md` — case collision breaks on case-insensitive filesystems).
- **Generated files** (`_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`)
  are compiler output — never hand-edit; edit the source tokens/components instead.
- **GitHub:** repo is https://github.com/Nexxspace-Development/fabric-design-system.git.
  No live push from here — after changes, hand the user a fresh project download to
  `git push` as a checkpoint (tag each release, e.g. `git tag v0.4.0`).

## Namespace
Components are exposed at `window.FabricDesignSystem_7bb975`.
