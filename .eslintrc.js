module.exports = {
  root: true,
  globals: {
    NodeJS: true
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    'import/extensions': ['.ts', '.tsx'],
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  plugins: ['jsx-a11y', '@typescript-eslint'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    semi: 2,
    quotes: [2, 'single'],
    'react-hooks/exhaustive-deps': 0,
    'no-console': 0, // 生成环境 自动移除 console.*  不需要eslint提示
    'react/no-danger': 0,
    // 不要求 使用 next-image
    '@next/next/no-img-element': 0,
    'max-len': ['error', 120], // 最大列数不得超过120
    'max-lines': ['error', 300], // 最大行数不得超过300
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0, // react 17 不强求jsx 必须引入 react
    'react/button-has-type': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/ban-ts-comment': 0, // 原则上不允许 使用@ts-ignore
    'react/jsx-props-no-spreading': 0, // 原则上 允许 props 透传
    '@typescript-eslint/no-explicit-any': 2,
    'react/function-component-definition': 0,
    'react/no-unused-prop-types': 0,
    'react/require-default-props': 0,
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/no-unused-vars': [2],
    'react/prop-types': 0,
    'camelcase': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'consistent-return': 0, // 箭头函数允许返回
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    "jsx-a11y/media-has-caption": [0, {
      "audio": ["Audio"],
      "video": ["Video"],
      "track": ["Track"],
    }],
  },
};
