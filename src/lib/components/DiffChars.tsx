import React from 'react';
import type { DiffCharsProps } from '../types';
import { useDiffChars } from '../hooks';
import { Diff } from './Diff';

export const DiffChars: React.FC<DiffCharsProps> = ({
  from,
  to,
  ignoreCase,
  ...diffProps
}) => {
  const parts = useDiffChars(from, to, { ignoreCase });
  return <Diff parts={parts} {...diffProps} />;
};
