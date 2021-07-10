import type { InitialOptionsTsJest } from 'ts-jest/dist/types';


const config: InitialOptionsTsJest = {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/**/?(*.)+(test).[jt]s?(x)', '<rootDir>/src/**/__tests__/**/*.[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
};

export default config;
