import mainConfig from "../../eslint.config.js";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [...mainConfig, { files: ["**/*.{js,ts}"] }];
