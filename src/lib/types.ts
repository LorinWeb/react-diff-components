import type React from 'react';

/**
 * Represents a single diff segment.
 */
export interface DiffPart {
  value: string;
  added?: boolean;
  removed?: boolean;
  count?: number;
  key: string | number;
}

/**
 * Class names configuration for Diff components.
 */
export interface DiffClassNames {
  root?: string;
  added?: string;
  removed?: string;
  equal?: string;
}

/**
 * Inline style configuration for Diff components.
 */
export interface DiffStyles {
  root?: React.CSSProperties;
  added?: React.CSSProperties;
  removed?: React.CSSProperties;
  equal?: React.CSSProperties;
}

/**
 * Base props shared across all Diff components.
 */
export interface DiffBaseProps {
  /** The original string before changes. */
  from: string;
  /** The modified string after changes. */
  to: string;
  /** Whether to hide parts that were added. Default: false */
  hideAdded?: boolean;
  /** Whether to hide parts that were removed. Default: false */
  hideRemoved?: boolean;
  /** Whether to hide unchanged parts. Default: false */
  hideEqual?: boolean;
  /** CSS class name applied to the root element. */
  className?: string;
  /** Inline styles applied to the root element. */
  style?: React.CSSProperties;
  /** Granular class names for root, added, removed, and equal parts. */
  classNames?: DiffClassNames;
  /** Granular inline styles for root, added, removed, and equal parts. */
  styles?: DiffStyles;
  /**
   * If true, skips automatic client-side style injection.
   * Useful when using custom styles or external stylesheets exclusively.
   * Default: false
   */
  unstyled?: boolean;
  /**
   * Text announced by screen readers for added content.
   * Pass false to disable screen reader text for additions.
   * Default: " [added: ]"
   */
  srLabelAdded?: string | false;
  /**
   * Text announced by screen readers for removed content.
   * Pass false to disable screen reader text for removals.
   * Default: " [removed: ]"
   */
  srLabelRemoved?: string | false;
  /**
   * Custom renderer for added text parts.
   */
  renderAdded?: (value: string, part: DiffPart) => React.ReactNode;
  /**
   * Custom renderer for removed text parts.
   */
  renderRemoved?: (value: string, part: DiffPart) => React.ReactNode;
  /**
   * Custom renderer for unchanged text parts.
   */
  renderEqual?: (value: string, part: DiffPart) => React.ReactNode;
  /**
   * Unified custom renderer for any diff part.
   */
  renderPart?: (part: DiffPart, defaultContent: React.ReactNode) => React.ReactNode;
  /**
   * Render prop for full headless rendering of the calculated diff parts.
   */
  children?: (parts: DiffPart[]) => React.ReactNode;
}

/**
 * Props for DiffChars component.
 */
export interface DiffCharsProps extends DiffBaseProps {
  /** Whether character comparisons are case insensitive. Default: false */
  ignoreCase?: boolean;
}

/**
 * Props for DiffWords component.
 */
export interface DiffWordsProps extends DiffBaseProps {
  /** Whether word comparisons are case insensitive. Default: false */
  ignoreCase?: boolean;
  /**
   * If true, whitespace differences are ignored.
   * If false, whitespace differences are tracked.
   * Default: false
   */
  ignoreSpaces?: boolean;
}

/**
 * Props for DiffLines component.
 */
export interface DiffLinesProps extends DiffBaseProps {}

/**
 * Props for DiffSentences component.
 */
export interface DiffSentencesProps extends DiffBaseProps {}
