import { diffWords, diffWordsWithSpace } from 'diff';
import { Diff } from './Diff';

class DiffWords extends Diff {
  render() {
    const { from, to, ignoreCase, ignoreSpaces } = this.props;

    const options = {
      ignoreCase: !!ignoreCase
    };

    this.diff = ignoreSpaces
      ? diffWords(from, to, options)
      : diffWordsWithSpace(from, to, options);

    return this.printDiff();
  }
}

export { DiffWords };
