import { useMemo } from 'react';
import {
  diffChars,
  diffWords,
  diffWordsWithSpace,
  diffLines,
  diffSentences,
  type Change,
} from 'diff';
import type { DiffPart } from './types';

/**
 * Normalizes diff changes into DiffPart objects with consistent keys and properties.
 */
export function normalizeDiffParts(changes: (Change | any)[]): DiffPart[] {
  return changes.map((part, index) => {
    // Handle both standard jsdiff Change objects and legacy tuple/object formats
    const added = Boolean(part[0] === 1 || part.added);
    const removed = Boolean(part[0] === -1 || part.removed);
    const value = String(part[1] ?? part.value ?? '');
    const count = typeof part.count === 'number' ? part.count : undefined;

    return {
      key: index,
      value,
      added: added ? true : undefined,
      removed: removed ? true : undefined,
      count,
    };
  });
}

/**
 * Calculates character-level differences between two strings.
 */
export function useDiffChars(
  from: string,
  to: string,
  options?: { ignoreCase?: boolean }
): DiffPart[] {
  const ignoreCase = Boolean(options?.ignoreCase);
  return useMemo(() => {
    const changes = diffChars(from, to, { ignoreCase });
    return normalizeDiffParts(changes);
  }, [from, to, ignoreCase]);
}

/**
 * Calculates word-level differences between two strings.
 */
export function useDiffWords(
  from: string,
  to: string,
  options?: { ignoreCase?: boolean; ignoreSpaces?: boolean }
): DiffPart[] {
  const ignoreCase = Boolean(options?.ignoreCase);
  const ignoreSpaces = Boolean(options?.ignoreSpaces);

  return useMemo(() => {
    const diffOptions = { ignoreCase };
    const changes = ignoreSpaces
      ? diffWords(from, to, diffOptions)
      : diffWordsWithSpace(from, to, diffOptions);
    return normalizeDiffParts(changes);
  }, [from, to, ignoreCase, ignoreSpaces]);
}

/**
 * Calculates line-level differences between two strings.
 */
export function useDiffLines(from: string, to: string): DiffPart[] {
  return useMemo(() => {
    const changes = diffLines(from, to);
    return normalizeDiffParts(changes);
  }, [from, to]);
}

/**
 * Calculates sentence-level differences between two strings.
 */
export function useDiffSentences(from: string, to: string): DiffPart[] {
  return useMemo(() => {
    const changes = diffSentences(from, to);
    return normalizeDiffParts(changes);
  }, [from, to]);
}
