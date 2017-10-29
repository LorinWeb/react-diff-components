import React from 'react';
import { diffLines } from 'diff';
import { Diff } from './Diff';

class DiffLines extends Diff {
  render() {
    const { from, to } = this.props;

    this.diff = diffLines(from, to);

    return <pre>{this.printDiff()}</pre>;
  }
}

export { DiffLines };
