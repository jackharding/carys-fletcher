module.exports = {
	"root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
		"prettier",
		"@typescript-eslint",
		"better-styled-components"
    ],
    "extends": [
		"airbnb", "prettier", "prettier/react",
      	"plugin:@typescript-eslint/eslint-recommended",
      	"plugin:@typescript-eslint/recommended",
	],
	"rules": {
		"no-unused-vars": "warn",
		"no-console": "off",
		"no-shadow": "off",
		"no-underscore-dangle": 0,
		"camelcase": "off",
		"consistent-return": 0,
		"global-require": 0,
		"jsx-a11y/label-has-associated-control": [
			2,
			{
				"labelComponents": [
					"CustomInputLabel"
				],
				"labelAttributes": [
					"label"
				],
				"controlComponents": [
					"CustomInput"
				],
				"depth": 3
			}
		],
		"import/no-extraneous-dependencies": "off",
		"import/no-named-as-default": "off",
		"import/no-named-as-default-member": "off",
		"import/prefer-default-export": 0,
		"react/no-unescaped-entities": ["warn"],
		"prettier/prettier": [
			"error",
			{
				"singleQuote": true,
				"tabWidth": 4,
				"useTabs": true,
				"arrowParens": "always",
				"bracketSpacing": true,
				"jsxBracketSameLine": false,
				"printWidth": 110,
				"trailingComma": "es5"
			}
		],
		"indent": [
			"error",
			"tab",
			{
				"ignoredNodes": [
					"JSXElement",
					"JSXElement > *",
					"JSXAttribute",
					"JSXIdentifier",
					"JSXNamespacedName",
					"JSXMemberExpression",
					"JSXSpreadAttribute",
					"JSXExpressionContainer",
					"JSXOpeningElement",
					"JSXClosingElement",
					"JSXText",
					"JSXEmptyExpression",
					"JSXSpreadChild"
				]
			}
		],
		"@typescript-eslint/interface-name-prefix": 0,
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
		"better-styled-components/sort-declarations-alphabetically": 2
	}
}