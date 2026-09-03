import React from 'react';
import type { DiffWordsProps } from '../types';
import { useDiffWords } from '../hooks';
import { Diff } from './Diff';

export const DiffWords: React.FC<DiffWordsProps> = ({
  from,
  to,
  ignoreCase,
  ignoreSpaces,
  ...diffProps
}) => {
  const parts = useDiffWords(from, to, { ignoreCase, ignoreSpaces });
  return <Diff parts={parts} {...diffProps} />;
};
