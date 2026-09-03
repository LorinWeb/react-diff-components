import { defineConfig } from 'tsup';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  entry: ['src/lib/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  minify: false,
  treeshake: true,
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : '.mjs',
    };
  },
  async onSuccess() {
    // Generate static dist/style.css for consumers who prefer manual CSS import
    const { DEFAULT_CSS } = await import('./src/lib/styles');
    const outDir = path.resolve(__dirname, 'dist');
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    fs.writeFileSync(path.join(outDir, 'style.css'), DEFAULT_CSS, 'utf-8');

    // Ensure both index.d.cts and index.d.ts exist for CJS type resolution
    if (fs.existsSync(path.join(outDir, 'index.d.ts'))) {
      fs.copyFileSync(
        path.join(outDir, 'index.d.ts'),
        path.join(outDir, 'index.d.cts')
      );
    }
  },
});
