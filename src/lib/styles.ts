/**
 * Default CSS rules for react-diff-components.
 * Supports CSS custom properties for theming and dark mode.
 */
export const DEFAULT_CSS = `.Diff {
  display: inline;
  background-color: var(--rdc-bg, transparent);
  font-size: var(--rdc-font-size, 1em);
  font-family: var(--rdc-font-family, monospace);
  line-height: var(--rdc-line-height, 1.4em);
}

.Diff__text--added {
  text-decoration: none;
  color: var(--rdc-added-color, #285000);
  background-color: var(--rdc-added-bg, rgba(40, 100, 0, 0.12));
}

.Diff__text--removed {
  text-decoration: none;
  color: var(--rdc-removed-color, #c81414);
  background-color: var(--rdc-removed-bg, rgba(200, 0, 0, 0.12));
}

.Diff__text--equal {
  color: var(--rdc-equal-color, inherit);
}

.Diff__sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
`;

export const STYLE_ELEMENT_ID = 'react-diff-components-style';

/**
 * Injects default CSS into the document head if not already present.
 * Safe for server-side rendering (no-op when window/document is undefined).
 */
export function injectStyles(): void {
  if (typeof document === 'undefined') {
    return;
  }
  if (document.getElementById(STYLE_ELEMENT_ID)) {
    return;
  }

  const style = document.createElement('style');
  style.id = STYLE_ELEMENT_ID;
  style.textContent = DEFAULT_CSS;
  document.head.appendChild(style);
}
