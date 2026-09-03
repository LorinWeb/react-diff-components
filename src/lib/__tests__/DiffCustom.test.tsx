import { describe, it, expect } from 'vitest';
import { render, screen, renderHook } from '@testing-library/react';
import { DiffWords } from '../components/DiffWords';
import { useDiffWords } from '../hooks';

describe('Diff Customization & Accessibility', () => {
  it('includes accessible screen reader announcements by default', () => {
    const { container } = render(<DiffWords from="apple" to="banana" />);

    const srElements = container.querySelectorAll('.Diff__sr-only');
    expect(srElements.length).toBe(2);
    expect(srElements[0]).toHaveTextContent('[removed: ]');
    expect(srElements[1]).toHaveTextContent('[added: ]');
  });

  it('allows disabling or customizing screen reader announcements', () => {
    const { container } = render(
      <DiffWords
        from="apple"
        to="banana"
        srLabelAdded="+ "
        srLabelRemoved={false}
      />
    );

    const srElements = container.querySelectorAll('.Diff__sr-only');
    expect(srElements.length).toBe(1);
    expect(srElements[0].textContent).toBe('+ ');
  });

  it('supports custom renderAdded and renderRemoved functions', () => {
    render(
      <DiffWords
        from="old"
        to="new"
        renderAdded={(val) => <span data-testid="custom-add">ADDED: {val}</span>}
        renderRemoved={(val) => <span data-testid="custom-del">DELETED: {val}</span>}
      />
    );

    expect(screen.getByTestId('custom-add')).toHaveTextContent('ADDED: new');
    expect(screen.getByTestId('custom-del')).toHaveTextContent('DELETED: old');
  });

  it('supports renderPart unified wrapper', () => {
    render(
      <DiffWords
        from="hello"
        to="world"
        renderPart={(part, defaultNode) => (
          <div data-testid={`part-${part.added ? 'add' : 'del'}`}>
            {defaultNode}
          </div>
        )}
      />
    );

    expect(screen.getByTestId('part-del')).toBeInTheDocument();
    expect(screen.getByTestId('part-add')).toBeInTheDocument();
  });

  it('supports headless children render prop', () => {
    render(
      <DiffWords from="alpha" to="beta">
        {(parts) => (
          <ul>
            {parts.map((p) => (
              <li key={p.key} data-testid="custom-item">
                {p.value} ({p.added ? 'add' : p.removed ? 'rem' : 'eq'})
              </li>
            ))}
          </ul>
        )}
      </DiffWords>
    );

    const items = screen.getAllByTestId('custom-item');
    expect(items.length).toBe(2);
    expect(items[0]).toHaveTextContent('alpha (rem)');
    expect(items[1]).toHaveTextContent('beta (add)');
  });

  it('applies custom classNames and styles', () => {
    const { container } = render(
      <DiffWords
        from="a"
        to="b"
        className="my-root"
        classNames={{ added: 'my-added', removed: 'my-removed' }}
        styles={{ added: { opacity: 0.8 } }}
      />
    );

    const root = container.querySelector('.my-root');
    expect(root).toBeInTheDocument();

    const added = container.querySelector('.my-added');
    expect(added).toHaveStyle({ opacity: '0.8' });
  });

  it('provides working useDiffWords hook', () => {
    const { result } = renderHook(() =>
      useDiffWords('cat and dog', 'cat and bird')
    );

    const parts = result.current;
    expect(parts.length).toBeGreaterThan(0);
    const addedPart = parts.find((p) => p.added);
    const removedPart = parts.find((p) => p.removed);

    expect(addedPart?.value).toBe('bird');
    expect(removedPart?.value).toBe('dog');
  });
});
