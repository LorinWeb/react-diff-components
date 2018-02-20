# React Diff Components

A set of intuitive components to render differences between two strings.

## Install
```bash
yarn add react-diff-components
```
or
```bash
npm i --save react-diff-components
```

## Sample code

```jsx
import { React } from 'react';

// use the Diff component that best suits your needs
import { DiffChars } from 'react-diff-components';
import { DiffWords } from 'react-diff-components';
import { DiffSentences } from 'react-diff-components';
import { DiffLines } from 'react-diff-components';

export default () => (
  <div>
    <DiffChars from="chars" to="Cars"/>
    <hr />
    <DiffWords
      from="A world changes the word"
      to="A word changes the world"
      hideAdded={false}
      hideRemoved={false}
    />
    <hr />
    <DiffSentences
      from="This sentence got removed. This one stayed."
      to="This one stayed. This was added!"
    />
    <hr />
    <DiffLines from="a line was this" to="now is that" />
  </div>
);
```

### Available props
- __from__: type = string, isRequired = true;
- __to__: type = string, isRequired = true;
- __ignoreCase__: type = bool, default = false;
- __hideRemoved__: type = bool, default = false;
- __hideAdded__: type: bool default = false;

__ignoreCase is only availbale for DiffChars and DiffWords__
