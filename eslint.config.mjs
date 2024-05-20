import * as regexpPlugin from "eslint-plugin-regexp";
import eslintPluginJsonc from "eslint-plugin-jsonc";
import eslintPluginYml from "eslint-plugin-yml";
import jsdoc from "eslint-plugin-jsdoc";
import markdown from "eslint-plugin-markdown";
import nodePlugin from "eslint-plugin-n";
import packageJson from "eslint-plugin-package-json/configs/recommended";
import perfectionist from "eslint-plugin-perfectionist";

import typescriptParser from "@typescript-eslint/parser";

export default [
	jsdoc.configs["flat/recommended"],
	...eslintPluginJsonc.configs["flat/recommended-with-jsonc"],
	...markdown.configs.recommended,
	nodePlugin.configs["flat/recommended"],
	packageJson,
	regexpPlugin.configs["flat/recommended"],
	...eslintPluginYml.configs["flat/recommended"],
	{
		files: ["**/*.js"],
		plugins: {
			jsdoc,
		},
		rules: {
			"jsdoc/require-description": "warn",
		},
	},
	{
		files: ["**/*.ts"],
		languageOptions: {
			parser: typescriptParser,
		},
		rules: {
			"n/no-missing-import": ["error", { allowModules: ["mealie-hellofresh"] }],
		},
	},
	{
		plugins: {
			perfectionist,
		},
		rules: {
			"perfectionist/sort-objects": [
				"error",
				{
					order: "asc",
					type: "natural",
				},
			],
		},
	},
];
