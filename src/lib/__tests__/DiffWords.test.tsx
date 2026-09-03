import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { DiffWords } from '../components/DiffWords';

describe('DiffWords', () => {
  it('renders word diffs correctly', () => {
    const { container } = render(
      <DiffWords from="Hello brave world" to="Hello wonderful world" />
    );

    const del = container.querySelector('del');
    const ins = container.querySelector('ins');

    expect(del).toHaveTextContent('brave');
    expect(ins).toHaveTextContent('wonderful');
  });

  it('handles ignoreSpaces', () => {
    const { container } = render(
      <DiffWords from="hello world" to="hello   world" ignoreSpaces />
    );

    expect(container.querySelector('del')).toBeNull();
    expect(container.querySelector('ins')).toBeNull();
  });
});
