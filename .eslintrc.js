module.exports = {
  env: {
    browser: true,
    es2020: true, // This line is fine as it sets the environment
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/essential"],
  parserOptions: {
    ecmaVersion: "2020", // Adjusted from 12 to "2020"
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "no-unused-vars": "warn",
    // Add other rules here
  },
};
