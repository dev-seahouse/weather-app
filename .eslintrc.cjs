module.exports = {
  root: true,
  env: { node: true, es2020: true },
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  extends: ["eslint:recommended", "prettier", "plugin:storybook/recommended"],
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts"],

  // typescript files
  overrides: [
    {
      files: ["**/*.ts", "**.tsx"],
      env: {
        node: true,
        browser: true,
        es2020: true,
      },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json", "./tsconfig.node.json"],
        tsconfigRootDir: __dirname,
      },
      settings: {
        react: { version: "detect" },
        tailwindcss: {
          callees: ["classnames", "clsx", "ctl", "cva", "tv", "cn",]
        }
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/jsx-runtime",
        "plugin:jsx-a11y/recommended",
        "plugin:tailwindcss/recommended",
        "prettier",
      ],
      plugins: ["react-refresh", "readable-tailwind"],
      rules: {
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/no-explicit-any": ["off"],
        "no-unused-vars": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "no-console": [
          "warn",
          {
            allow: ["error", "info", "table", "warn"],
          },
        ],
        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: true },
        ],
        'react/prop-types': 'off',
        'react/no-unknown-property': "warn",
        "readable-tailwind/multiline": ["error", {
          "printWidth": 80, callees: ["classnames", "clsx", "ctl", "cva", "tv", "cn",]
        }],
        "readable-tailwind/no-unnecessary-whitespace": ["warn"]
      },
    },
    // test files
    {
      files: ["__tests__/**", "**test.+(ts|tsx)"],
      extends: [
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended",
        "plugin:vitest/legacy-recommended",
      ],
    },
  ],
};
