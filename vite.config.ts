import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@torian12321/js-library-template',
      fileName: 'js-library-template',
      formats: ['es', 'cjs'],
    },
  },
  resolve: {
    alias: [{ find: 'src', replacement: './src' }],
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      exclude: [
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/vitest.setup.ts',
        '**/vitest.setup.tsx',
      ],
    }),
    visualizer({
      filename: 'visualizer/stats.html',
      template: 'treemap',
      open: true,
    }),
  ],
  test: {
    setupFiles: ['./src/vitest.setup.ts'],
    coverage: {
      enabled: true,
      reporter: ['text', 'html'],
      include: ['src/**'],
      exclude: ['**/index.ts'],
      thresholds: {
        /** Percentage of coverage test required */
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
  },
});
