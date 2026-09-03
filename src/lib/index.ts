// Components
export { Diff, type DiffProps } from './components/Diff';
export { DiffChars } from './components/DiffChars';
export { DiffLines } from './components/DiffLines';
export { DiffSentences } from './components/DiffSentences';
export { DiffWords } from './components/DiffWords';

// Hooks
export {
  useDiffChars,
  useDiffWords,
  useDiffLines,
  useDiffSentences,
  normalizeDiffParts,
} from './hooks';

// Styling & Utilities
export { injectStyles, DEFAULT_CSS, STYLE_ELEMENT_ID } from './styles';

// Types
export type {
  DiffPart,
  DiffBaseProps,
  DiffCharsProps,
  DiffLinesProps,
  DiffSentencesProps,
  DiffWordsProps,
  DiffClassNames,
  DiffStyles,
} from './types';
