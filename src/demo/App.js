import React from 'react';
import { DiffChars, DiffLines, DiffSentences, DiffWords } from '../lib';
import './App.scss';

const fromString =
  "toast /testABC  / a toast testABC.  This sentence didn't change.   This sentence was removed.";
const toString =
  "taste /testBCD /b toast TestABC. This sentence didn't change.";

const fromUrl = 'https://github.com/kpdecker/jsdiff';
const toUrl = 'https://github.com/LorinWeb/react-diff-components';

const App = () => (
  <div>
    <h1>React Diff Components</h1>
    <h2>DiffChars</h2>

    <DiffChars from={fromString} to={toString} />

    <h3>ignoreCase = true</h3>
    <DiffChars ignoreCase from={fromString} to={toString} />

    <hr />

    <h2>DiffLines</h2>

    <DiffLines from={'LorinK\nGitHub'} to={'LorinWeb\nGitHub'} />

    <hr />

    <h2>DiffSentences</h2>

    <DiffSentences from={fromString} to={toString} />

    <h3>hideAdded = true</h3>
    <DiffSentences from={fromString} to={toString} hideAdded />

    <h3>hideRemoved = true</h3>
    <DiffSentences from={fromString} to={toString} hideRemoved />

    <hr />

    <h2>DiffWords</h2>

    <DiffWords from={fromString} to={toString} />

    <h3>ignoreSpaces = true</h3>
    <DiffWords ignoreSpaces from={fromString} to={toString} />

    <h3>hideAdded = true</h3>
    <DiffWords from={fromUrl} to={toUrl} hideAdded />

    <h3>hideRemoved = true</h3>
    <DiffWords from={fromUrl} to={toUrl} hideRemoved />
  </div>
);

export default App;
