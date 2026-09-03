import React, { useState, useEffect } from 'react';
import {
  DiffChars,
  DiffLines,
  DiffSentences,
  DiffWords,
  useDiffWords,
} from '../lib';
import './App.css';

const fromString =
  "toast /testABC  / a toast testABC.  This sentence didn't change.   This sentence was removed.";
const toString =
  "taste /testBCD /b toast TestABC. This sentence didn't change.";

const codeFrom = `function greet(name) {
  console.log("Hello, " + name);
  return true;
}`;

const codeTo = `function greet(name: string): boolean {
  console.info(\`Hello, \${name}!\`);
  return true;
}`;

const CustomHookDemo: React.FC<{ from: string; to: string }> = ({ from, to }) => {
  const parts = useDiffWords(from, to);
  const additions = parts.filter((p) => p.added).length;
  const deletions = parts.filter((p) => p.removed).length;

  return (
    <div style={{ marginTop: '12px', fontSize: '0.9rem', color: '#64748b' }}>
      <strong>Hook stats:</strong> {additions} additions, {deletions} deletions across {parts.length} segments.
    </div>
  );
};

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="demo-container">
      <header className="demo-header">
        <div>
          <h1 className="demo-title">React Diff Components</h1>
          <span style={{ fontSize: '0.9rem', color: '#64748b' }}>
            Modernized, TypeScript-first, accessible diff components
          </span>
        </div>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark 🌙' : 'Light ☀️'}
        </button>
      </header>

      <section className="demo-section">
        <h2>1. DiffChars</h2>
        <p>Character-level differences with automatic green additions and red deletions.</p>
        <div className="diff-box">
          <DiffChars from={fromString} to={toString} />
        </div>
        <p style={{ marginTop: '12px' }}>Case insensitive (`ignoreCase = true`):</p>
        <div className="diff-box">
          <DiffChars from={fromString} to={toString} ignoreCase />
        </div>
      </section>

      <section className="demo-section">
        <h2>2. DiffWords</h2>
        <p>Word-level differences, the most human-friendly diff in most scenarios.</p>
        <div className="diff-box">
          <DiffWords from={fromString} to={toString} />
        </div>
        <CustomHookDemo from={fromString} to={toString} />
      </section>

      <section className="demo-section">
        <h2>3. Built-in Screen Reader Accessibility</h2>
        <p>
          Renders semantic <code>&lt;ins&gt;</code> and <code>&lt;del&gt;</code> with hidden screen-reader tags (e.g., <code>[added: ]</code>).
        </p>
        <div className="diff-box">
          <DiffWords
            from="The old algorithm was slow."
            to="The new algorithm is blazing fast!"
          />
        </div>
      </section>

      <section className="demo-section">
        <h2>4. Custom Renderers (Ad-hoc UI components)</h2>
        <p>Supply custom render functions for additions and removals.</p>
        <div className="diff-box">
          <DiffWords
            from="Old status: Pending approval"
            to="New status: Approved and deployed"
            renderAdded={(val) => <span className="custom-badge-add">+{val}</span>}
            renderRemoved={(val) => <span className="custom-badge-del">-{val}</span>}
          />
        </div>
      </section>

      <section className="demo-section">
        <h2>5. DiffSentences</h2>
        <p>Sentence-level differences, ideal for document reviews and prose.</p>
        <div className="diff-box">
          <DiffSentences from={fromString} to={toString} />
        </div>
      </section>

      <section className="demo-section">
        <h2>6. DiffLines</h2>
        <p>Line-level differences rendered inside a preformatted block for code.</p>
        <div className="diff-box">
          <DiffLines from={codeFrom} to={codeTo} />
        </div>
      </section>
    </div>
  );
};

export default App;
