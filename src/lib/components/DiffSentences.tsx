import React from 'react';
import type { DiffSentencesProps } from '../types';
import { useDiffSentences } from '../hooks';
import { Diff } from './Diff';

export const DiffSentences: React.FC<DiffSentencesProps> = ({
  from,
  to,
  ...diffProps
}) => {
  const parts = useDiffSentences(from, to);
  return <Diff parts={parts} {...diffProps} />;
};
