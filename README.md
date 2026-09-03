# React Diff Components

A set of modern, intuitive, and accessible React components to render differences between two strings. Built with **TypeScript**, compatible with **React 16.8 through React 19+**, and supporting **ESM** and **CommonJS**.

## Features

- ⚡ **Zero-config & Lightweight**: Works immediately upon install with subtle, polished default styling.
- ♿ **Built-in Accessibility (a11y)**: Uses semantic `<ins>` and `<del>` elements with screen-reader announcements by default.
- 🎨 **Flexible Theming**: Supports CSS Custom Properties (CSS variables) for effortless dark mode and custom palette integration.
- 🛠️ **Granular Customization**: Custom render functions (`renderAdded`, `renderRemoved`, `renderPart`) and headless hooks (`useDiffWords`, `useDiffChars`, etc.).
- 📦 **Modern Dual Package**: Shipped with complete TypeScript declaration files (`.d.ts`), sourcemaps, ESM (`.mjs`), and CJS (`.cjs`).
- 🔄 **Broad React Support**: Compatible with React 16.8, 17, 18, and 19.

---

## Installation

```bash
npm install react-diff-components
# or
yarn add react-diff-components
# or
pnpm add react-diff-components
```

---

## Quick Start

```tsx
import React from 'react';
import { DiffChars, DiffWords, DiffLines, DiffSentences } from 'react-diff-components';

export function Example() {
  return (
    <div>
      {/* Word diff */}
      <DiffWords
        from="The quick brown fox jumps"
        to="The fast brown dog jumps"
      />

      {/* Character diff */}
      <DiffChars
        from="https://example.com/a"
        to="https://example.com/A"
        ignoreCase
      />

      {/* Sentence diff */}
      <DiffSentences
        from="Sentence one. Sentence two."
        to="Sentence one. Sentence three."
      />

      {/* Multi-line code diff */}
      <DiffLines
        from={`const x = 1;\nconst y = 2;`}
        to={`const x = 1;\nconst y = 3;`}
      />
    </div>
  );
}
```

---

## Available Components & Props

All components inherit from `DiffBaseProps`:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `from` | `string` | *(Required)* | The original text before changes. |
| `to` | `string` | *(Required)* | The modified text after changes. |
| `hideAdded` | `boolean` | `false` | If `true`, hides added text. |
| `hideRemoved` | `boolean` | `false` | If `true`, hides removed text. |
| `hideEqual` | `boolean` | `false` | If `true`, hides unchanged text. |
| `className` | `string` | `undefined` | CSS class name applied to the root element. |
| `style` | `React.CSSProperties` | `undefined` | Inline styles applied to the root element. |
| `classNames` | `DiffClassNames` | `undefined` | Granular classes: `{ root?, added?, removed?, equal? }`. |
| `styles` | `DiffStyles` | `undefined` | Granular styles: `{ root?, added?, removed?, equal? }`. |
| `unstyled` | `boolean` | `false` | If `true`, skips automatic style injection. |
| `srLabelAdded` | `string \| false` | `" [added: ]"` | Screen reader label for additions (`false` to disable). |
| `srLabelRemoved` | `string \| false` | `" [removed: ]"` | Screen reader label for removals (`false` to disable). |
| `renderAdded` | `(value, part) => ReactNode` | `undefined` | Custom renderer function for additions. |
| `renderRemoved` | `(value, part) => ReactNode` | `undefined` | Custom renderer function for removals. |
| `renderEqual` | `(value, part) => ReactNode` | `undefined` | Custom renderer function for unchanged parts. |
| `renderPart` | `(part, defaultNode) => ReactNode` | `undefined` | Unified custom renderer for all parts. |
| `children` | `(parts: DiffPart[]) => ReactNode` | `undefined` | Children as a render prop for headless custom rendering. |

### Specific Component Options

- `<DiffChars />` & `<DiffWords />`:
  - `ignoreCase?: boolean` (default: `false`): Perform case-insensitive diffing.
- `<DiffWords />`:
  - `ignoreSpaces?: boolean` (default: `false`): Disregard whitespace differences between words.

---

## Styling & Theming

### Automatic Style Injection (Default)
By default, styles are automatically and safely injected into the document head on the client side with zero setup required.

### CSS Custom Properties (Theming / Dark Mode)
Customize colors and typography easily using CSS variables:

```css
:root {
  --rdc-bg: transparent;
  --rdc-font-size: 1em;
  --rdc-font-family: monospace;
  --rdc-line-height: 1.4em;

  --rdc-added-color: #285000;
  --rdc-added-bg: rgba(40, 100, 0, 0.12);

  --rdc-removed-color: #c81414;
  --rdc-removed-bg: rgba(200, 0, 0, 0.12);

  --rdc-equal-color: inherit;
}

/* Dark Mode Example */
[data-theme='dark'] {
  --rdc-added-color: #4ade80;
  --rdc-added-bg: rgba(74, 222, 128, 0.2);
  --rdc-removed-color: #f87171;
  --rdc-removed-bg: rgba(248, 113, 113, 0.2);
  --rdc-equal-color: #94a3b8;
}
```

### Static Stylesheet Import
If you prefer static CSS imports or are disabling auto-injection via `unstyled`:

```ts
import 'react-diff-components/style.css';
```

---

## Custom Renderers

Supply custom functions to render semantic tags, tooltips, or custom badges:

```tsx
<DiffWords
  from="Old status: Pending"
  to="New status: Approved"
  renderAdded={(val) => <span className="badge badge-success">+{val}</span>}
  renderRemoved={(val) => <span className="badge badge-danger">-{val}</span>}
/>
```

---

## Headless Hooks

For advanced use cases (e.g. split diff views, side-by-side tables), use the exported hooks directly:

```tsx
import { useDiffWords } from 'react-diff-components';

function SplitDiff({ from, to }: { from: string; to: string }) {
  const parts = useDiffWords(from, to);

  return (
    <div>
      {parts.map((part) => (
        <span
          key={part.key}
          style={{ color: part.added ? 'green' : part.removed ? 'red' : 'inherit' }}
        >
          {part.value}
        </span>
      ))}
    </div>
  );
}
```

Available hooks:
- `useDiffChars(from, to, options?)`
- `useDiffWords(from, to, options?)`
- `useDiffLines(from, to)`
- `useDiffSentences(from, to)`

---

## License

[MIT](LICENSE)
