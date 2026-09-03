import React, { useEffect } from 'react';
import type { DiffBaseProps, DiffPart } from '../types';
import { injectStyles } from '../styles';

export interface DiffProps extends Omit<DiffBaseProps, 'from' | 'to'> {
  parts: DiffPart[];
}

export const Diff: React.FC<DiffProps> = ({
  parts,
  hideAdded = false,
  hideRemoved = false,
  hideEqual = false,
  className,
  style,
  classNames,
  styles,
  unstyled = false,
  srLabelAdded = ' [added: ]',
  srLabelRemoved = ' [removed: ]',
  renderAdded,
  renderRemoved,
  renderEqual,
  renderPart,
  children,
}) => {
  useEffect(() => {
    if (!unstyled) {
      injectStyles();
    }
  }, [unstyled]);

  // Headless render prop support
  if (typeof children === 'function') {
    return <>{children(parts)}</>;
  }

  const renderedElements = parts.map((part) => {
    if (part.added && hideAdded) {
      return null;
    }
    if (part.removed && hideRemoved) {
      return null;
    }
    if (!part.added && !part.removed && hideEqual) {
      return null;
    }

    let defaultNode: React.ReactNode;

    if (part.added) {
      if (renderAdded) {
        defaultNode = renderAdded(part.value, part);
      } else {
        const addedClassName = [
          'Diff__text',
          'Diff__text--added',
          classNames?.added,
        ]
          .filter(Boolean)
          .join(' ');

        defaultNode = (
          <ins
            key={part.key}
            className={addedClassName}
            style={styles?.added}
          >
            {srLabelAdded !== false && (
              <span className="Diff__sr-only">{srLabelAdded}</span>
            )}
            {part.value}
          </ins>
        );
      }
    } else if (part.removed) {
      if (renderRemoved) {
        defaultNode = renderRemoved(part.value, part);
      } else {
        const removedClassName = [
          'Diff__text',
          'Diff__text--removed',
          classNames?.removed,
        ]
          .filter(Boolean)
          .join(' ');

        defaultNode = (
          <del
            key={part.key}
            className={removedClassName}
            style={styles?.removed}
          >
            {srLabelRemoved !== false && (
              <span className="Diff__sr-only">{srLabelRemoved}</span>
            )}
            {part.value}
          </del>
        );
      }
    } else {
      if (renderEqual) {
        defaultNode = renderEqual(part.value, part);
      } else {
        const equalClassName = [
          'Diff__text',
          'Diff__text--equal',
          classNames?.equal,
        ]
          .filter(Boolean)
          .join(' ');

        defaultNode = (
          <span
            key={part.key}
            className={equalClassName}
            style={styles?.equal}
          >
            {part.value}
          </span>
        );
      }
    }

    if (renderPart) {
      return (
        <React.Fragment key={part.key}>
          {renderPart(part, defaultNode)}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment key={part.key}>
        {defaultNode}
      </React.Fragment>
    );
  });

  const rootClassName = ['Diff', className, classNames?.root]
    .filter(Boolean)
    .join(' ');

  const rootStyle = {
    ...style,
    ...styles?.root,
  };

  return (
    <span className={rootClassName} style={rootStyle}>
      {renderedElements}
    </span>
  );
};
