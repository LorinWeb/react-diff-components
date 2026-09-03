# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-09-03

### Added
- **TypeScript Support**: Full TypeScript migration with generated `.d.ts` and `.d.mts` declaration files and comprehensive JSDoc comments.
- **Dual ESM & CJS Distribution**: Modern conditional `exports` map in `package.json` supporting both ECMAScript Modules (`dist/index.mjs`) and CommonJS (`dist/index.cjs`).
- **Broad React Compatibility**: Peer dependency support for React 16.8 through React 19 (`>=16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0`).
- **Built-in Screen Reader Accessibility (a11y)**:
  - Render added segments as semantic `<ins>` and removed segments as `<del>`.
  - Injected `.Diff__sr-only` announcements (`[added: ]`, `[removed: ]`) by default for screen readers.
  - Configurable/toggleable via `srLabelAdded` and `srLabelRemoved` props.
- **Modern Styling & Theming**:
  - Safe client-side auto-injection into `<head>` (SSR-safe, no errors in Next.js/Remix).
  - Theming via CSS Custom Properties (`--rdc-added-color`, `--rdc-added-bg`, `--rdc-removed-color`, `--rdc-removed-bg`, `--rdc-equal-color`, `--rdc-bg`, `--rdc-font-family`).
  - Dark mode support easily toggled via CSS variables.
  - Static stylesheet export at `react-diff-components/style.css` for consumers using `unstyled` mode or manual bundling.
- **Custom Render Functions & Headless Modes**:
  - `renderAdded`, `renderRemoved`, `renderEqual`, and `renderPart` callback props for rendering custom badges, tooltips, or UI components.
  - Render prop support via `children={(parts) => ...}`.
  - Headless hooks: `useDiffChars`, `useDiffWords`, `useDiffLines`, and `useDiffSentences`.
- **Modern Toolchain**:
  - Replaced legacy ejected Webpack 3 / Babel 6 with `tsup` (esbuild-based library builder).
  - Modern dev server using Vite for `src/demo`.
  - Fast ESM testing using Vitest and `@testing-library/react`.

### Changed
- Refactored all class components into modern, strongly-typed React functional components with `useMemo` and `useEffect`.
- Updated dependency `diff` to `^5.2.0`.
- Overhauled documentation in `README.md` with complete API reference and interactive examples.

### Removed
- Removed deprecated Create React App scripts (`scripts/start.js`, `scripts/build.js`, `scripts/test.js`) and config files (`config/`).
- Removed obsolete dependencies: `node-sass`, `webpack 3`, `babel-core 6`, `autoprefixer 7`.

---

## [0.0.4] - 2017-09-06
- Initial release with Webpack 3 and basic diff components (`DiffChars`, `DiffLines`, `DiffSentences`, `DiffWords`).
