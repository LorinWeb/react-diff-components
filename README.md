# React Diff Components

## Install
```bash
$ yarn add react-diff-components
```
or
```bash
$ npm i react-diff-components --save
```

-------------------------------------

## DiffChars

```jsx
<DiffChars from={stringA} to={stringB} />
```
### ignoreCase = true
```jsx
<DiffChars ignoreCase from={stringA} to={stringB} />
```

-------------------------------------

## DiffLines

```jsx
<DiffLines from={'LorinK\nGitHub'} to={'LorinWeb\nGitHub'} />
```
-------------------------------------

## DiffSentences

```jsx
<DiffSentences from={stringA} to={stringB} />
```

### hideAdded = true
```jsx
<DiffSentences from={stringA} to={stringB} hideAdded />
```

### hideRemoved = true
```jsx
<DiffSentences from={stringA} to={stringB} hideRemoved />
```

-------------------------------------

## DiffWords

```jsx
<DiffWords from={stringA} to={stringB} />
```

### ignoreSpaces = true
```jsx
<DiffWords ignoreSpaces from={stringA} to={stringB} />
```

### hideAdded = true
```jsx
<DiffWords from={fromUrl} to={toUrl} hideAdded />
```

### hideRemoved = true
```jsx
<DiffWords from={fromUrl} to={toUrl} hideRemoved />
```
