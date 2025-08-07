import { baseConfig } from '@torian12321/eslint-config';

export default [
  ...baseConfig,
  {
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  },
];
