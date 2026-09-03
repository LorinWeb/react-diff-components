import React from 'react';
import type { DiffLinesProps } from '../types';
import { useDiffLines } from '../hooks';
import { Diff } from './Diff';

export const DiffLines: React.FC<DiffLinesProps> = ({
  from,
  to,
  children,
  ...diffProps
}) => {
  const parts = useDiffLines(from, to);

  if (typeof children === 'function') {
    return <>{children(parts)}</>;
  }

  return (
    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
      <Diff parts={parts} {...diffProps} />
    </pre>
  );
};
