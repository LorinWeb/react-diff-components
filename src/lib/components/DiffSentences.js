import { diffSentences } from 'diff';
import { Diff } from './Diff';

class DiffSentences extends Diff {
  render() {
    const { from, to } = this.props;

    this.diff = diffSentences(from, to);

    return this.printDiff();
  }
}

export { DiffSentences };
