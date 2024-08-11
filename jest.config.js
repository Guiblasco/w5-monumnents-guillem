/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  testFilePath: ["src/**/*.{js,jsx,ts,tsx}"],
  coverage: { path: "src/**/*" },
  resolver: "jest-ts-webcompat-resolver",
};
