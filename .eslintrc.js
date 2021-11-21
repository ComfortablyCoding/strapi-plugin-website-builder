const frontendESLint = require('./.eslintrc.frontend.js');
const backendESLint = require('./.eslintrc.backend.js');

module.exports = {
	$schema: 'https://json.schemastore.org/eslintrc',
	// parser: '@babel/eslint-parser',
	parserOptions: {
		ecmaVersion: 2018,
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	},
	globals: {
		strapi: 'readonly',
	},
	overrides: [
		{
			files: ['/**/*'],
			excludedFiles: ['/admin/**/*'],
			...backendESLint,
		},
		{
			files: ['/admin/**/*'],
			...frontendESLint,
		},
	],
};
