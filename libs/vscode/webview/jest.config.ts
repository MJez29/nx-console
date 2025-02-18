/* eslint-disable */
export default {
  displayName: 'vscode-webview',

  globals: {},
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/vscode/webview',
  testEnvironment: 'node',
  preset: '../../../jest.preset.js',
};
