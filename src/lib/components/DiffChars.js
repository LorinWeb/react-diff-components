import { diffChars } from 'diff';
import { Diff } from './Diff';

class DiffChars extends Diff {
  render() {
    const { from, to, ignoreCase = false } = this.props;

    const options = {
      ignoreCase: ignoreCase
    };

    this.diff = diffChars(from, to, options);

    return this.printDiff();
  }
}

export { DiffChars };
