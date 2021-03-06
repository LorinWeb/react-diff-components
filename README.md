# React Diff Components

A set of intuitive components to render differences between two strings.

## Install

```bash
yarn add react-diff-components
```

or

```bash
npm i react-diff-components --save
```

## Available props

- __from:__ string, required;
- __to:__ string, required;
- __ignoreCase:__ bool, false by default;
- __hideRemoved:__ bool, false by default;
- __hideAdded:__ bool, false by default.

__Note:__ ignoreCase is available only for `<DiffChars />` and `<DiffWords />`

## Examples and use-cases

### `<DiffChars />`:

As the name suggests, `<DiffChars />` will render differences at character level. Take the following as an example:

```jsx
import { React } from 'react';
import { DiffChars } from 'react-diff-components';

export default () => {
    const A = 'http://www.example.com/a';
    const B = 'https://www.example.com/A';
    return (
        <div>
            <DiffChars from={A} to={B} />
            <p>
                Case insensitive:<br />
                <DiffChars from={A} to={B} ignoreCase />
            </p>
            <ul>
                <li>
                    Old string:<br />
                    <DiffChars from={A} to={B} hideAdded />
                </li>
                <li>
                    New string:<br />
                    <DiffChars from={A} to={B} hideRemoved />
                </li>
            </ul>
        </div>
    );
}
```

### `<DiffWords />`:

With `<DiffWords />`, if a single character has changed the whole word gets highlighted. It displays the most human-friendly result in the majority of cases:


```jsx
import { React } from 'react';
import { DiffWords } from 'react-diff-components';

export default () => (
  <div>
    <DiffWords
      from="Worlds change the word"
      to="Words change the world"
    />
  </div>
);
```

### `<DiffSentences />`:

Using `<DiffSentences />`, differences get highlighted at a sentence level. That proves useful if users are supposed to read a full sentence to contextualise a change and approve it. Take the following as an example:

```jsx
import { React } from 'react';
import { DiffSentences } from 'react-diff-components';

export default () => (
  <div>
    <DiffSentences
      from="This sentence got removed. This one stayed almost the same."
      to="This one stayed almost the same, but there's a catch!"
    />
  </div>
);
```

### `<DiffLines />`:

The use-case for `<DiffLines />` is mainly to highlight differences in `code`:

```jsx
import { React } from 'react';
import { DiffLines } from 'react-diff-components';

export default () => (
  <div>
    <DiffLines 
        from="let a = 2;\nconst b = 3;"
        to="let a= 4;\nconst b = 3;"
    />
  </div>
);
```
