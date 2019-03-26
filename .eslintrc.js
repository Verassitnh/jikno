const never = [ 'warn', 'never' ]
const always = [ 'warn', 'always' ]
const asNeeded = [ 'error', 'as-needed' ]

module.exports = {
	plugins: [
		'html',
	],
	parserOptions: {
		ecmaVersion: 10,
		sourceType: 'module',
	},
	env: {
		browser: true,
		commonjs: true,
		es6: true,
	},
	rules: {
		'no-unused-vars': [ 'warn' ],

		'no-extra-boolean-cast': 1,
		'array-bracket-spacing': always.concat({
			objectsInArrays: false,
		}),
		'block-spacing': always,
		'brace-style': 1,
		'comma-dangle': [ 'warn', 'always-multiline' ],
		'comma-spacing': [ 'error', { before: false, after: true }],
		'comma-style': 1,
		'curly': 1,
		'computed-property-spacing': never,
		'func-call-spacing': never,
		'indent': [ 'warn', 'tab' ],
		'key-spacing': 1,
		'keyword-spacing': 1,
		'no-whitespace-before-property': 1,
		'no-trailing-spaces': 1,
		'object-curly-spacing': always,
		'padded-blocks': [ 'error', 'never' ],
		'semi': never,
		'space-before-function-paren': never,
		'space-in-parens': never,
		'space-infix-ops': 1,
		'space-unary-ops': [ 'error', {
			words: true,
			nonwords: false,
		}],
		'no-regex-spaces': 1,
		'no-unsafe-negation': 1,
		'dot-location': [ 'error', 'property' ],
		'dot-notation': 1,
		'no-extra-label': 1,
		'no-multi-spaces': [ 'error', { exceptions: { Property: false } }],
		'no-useless-return': 1,
		'eol-last': always,
		'linebreak-style': 1,
		'no-lonely-if': 1,
		'no-unneeded-ternary': 1,
		'object-curly-newline': [ 'error', { consistent: true }],
		'operator-linebreak': [ 'error', 'before' ],
		'quote-props': asNeeded,
		'quotes': [ 'error', 'backtick' ],
		'space-before-blocks': always,
		'spaced-comment': always,
		'template-tag-spacing': 1,
		'unicode-bom': 1,
		'arrow-body-style': asNeeded,
		'arrow-parens': asNeeded,
		'arrow-spacing': 1,
		'generator-star-spacing': 1,
		'no-useless-computed-key': 1,
		'no-useless-rename': 1,
		'no-var': 1,
		'object-shorthand': 1,
		'prefer-arrow-callback': [ 'error', { allowNamedFunctions: true }],
		'prefer-const': 1,
		'prefer-numeric-literals': 1,
		'prefer-spread': 1,
		'rest-spread-spacing': 1,
		'template-curly-spacing': always,
		'yield-star-spacing': [ 'error', 'both' ],
		'no-debugger': 0,
	},
}