import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { DiffLines } from '../components/DiffLines';
import { DiffSentences } from '../components/DiffSentences';

describe('DiffLines', () => {
  it('renders lines wrapped in pre element', () => {
    const { container } = render(
      <DiffLines from="line 1\nline 2" to="line 1\nline 3" />
    );

    const pre = container.querySelector('pre');
    expect(pre).toBeInTheDocument();

    const del = container.querySelector('del');
    const ins = container.querySelector('ins');

    expect(del).toHaveTextContent('line 2');
    expect(ins).toHaveTextContent('line 3');
  });
});

describe('DiffSentences', () => {
  it('renders sentence diffs', () => {
    const { container } = render(
      <DiffSentences
        from="This is sentence one. This is sentence two."
        to="This is sentence one. This is sentence three."
      />
    );

    const del = container.querySelector('del');
    const ins = container.querySelector('ins');

    expect(del).toHaveTextContent('This is sentence two.');
    expect(ins).toHaveTextContent('This is sentence three.');
  });
});
