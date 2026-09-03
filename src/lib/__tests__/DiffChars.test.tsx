import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { DiffChars } from '../components/DiffChars';

describe('DiffChars', () => {
  it('renders additions and deletions with semantic ins and del tags', () => {
    const { container } = render(<DiffChars from="cat" to="cot" />);

    // 'a' was removed, 'o' was added, 'c' and 't' are equal
    const del = container.querySelector('del');
    const ins = container.querySelector('ins');

    expect(del).toBeInTheDocument();
    expect(del).toHaveTextContent('a');
    expect(del).toHaveClass('Diff__text--removed');

    expect(ins).toBeInTheDocument();
    expect(ins).toHaveTextContent('o');
    expect(ins).toHaveClass('Diff__text--added');
  });

  it('respects hideAdded prop', () => {
    const { container } = render(<DiffChars from="cat" to="cot" hideAdded />);
    expect(container.querySelector('ins')).toBeNull();
    expect(container.querySelector('del')).toBeInTheDocument();
  });

  it('respects hideRemoved prop', () => {
    const { container } = render(<DiffChars from="cat" to="cot" hideRemoved />);
    expect(container.querySelector('del')).toBeNull();
    expect(container.querySelector('ins')).toBeInTheDocument();
  });

  it('respects ignoreCase prop', () => {
    const { container: withCase } = render(<DiffChars from="a" to="A" />);
    expect(withCase.querySelector('del')).toBeInTheDocument();
    expect(withCase.querySelector('ins')).toBeInTheDocument();

    const { container: withoutCase } = render(<DiffChars from="a" to="A" ignoreCase />);
    expect(withoutCase.querySelector('del')).toBeNull();
    expect(withoutCase.querySelector('ins')).toBeNull();
  });
});
