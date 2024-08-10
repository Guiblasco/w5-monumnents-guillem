/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  resolver: "jest-ts-webcompat-resolver",
};
