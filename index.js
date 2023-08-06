module.exports = {
  extends: ["prettier"],
  plugins: [
    "@typescript-eslint",
    "import",
    "n",
    "promise",
    "unused-imports",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  env: {
    es2022: true,
    node: true,
  },
  rules: {
    "accessor-pairs": [
      "error",
      {
        setWithoutGet: true,
        enforceForClassMembers: true,
      },
    ],
    "array-callback-return": [
      "error",
      {
        allowImplicit: false,
        checkForEach: false,
      },
    ],
    "constructor-super": "error",
    curly: ["error", "multi-line"],
    "default-case-last": "error",
    "dot-location": ["error", "property"],
    eqeqeq: [
      "error",
      "always",
      {
        null: "ignore",
      },
    ],
    "multiline-ternary": ["error", "always-multiline"],
    "new-parens": "error",
    "no-async-promise-executor": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-constant-condition": [
      "error",
      {
        checkLoops: false,
      },
    ],
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-implied-eval": "error",
    "no-import-assign": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-iterator": "error",
    "no-labels": [
      "error",
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    "no-lone-blocks": "error",
    "no-misleading-character-class": "error",
    "no-mixed-operators": [
      "error",
      {
        groups: [
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"],
        ],
        allowSamePrecedence: true,
      },
    ],
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-symbol": "error",
    "no-new-wrappers": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "error",
    "no-return-assign": ["error", "except-parens"],
    "no-self-assign": [
      "error",
      {
        props: true,
      },
    ],
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-this-before-super": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": [
      "error",
      {
        defaultAssignment: false,
      },
    ],
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-useless-backreference": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-computed-key": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "warn",
    "no-void": [
      "error",
      {
        allowAsStatement: true,
      },
    ],
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "object-curly-newline": [
      "error",
      {
        multiline: true,
        consistent: true,
      },
    ],
    "object-property-newline": [
      "error",
      {
        allowMultiplePropertiesPerLine: true,
      },
    ],
    "object-shorthand": ["warn", "properties"],
    "one-var": [
      "error",
      {
        initialized: "never",
      },
    ],
    "operator-linebreak": [
      "error",
      "after",
      {
        overrides: {
          "?": "before",
          ":": "before",
          "|>": "before",
        },
      },
    ],
    "padded-blocks": [
      "error",
      {
        blocks: "never",
        switches: "never",
        classes: "never",
      },
    ],
    "prefer-const": [
      "error",
      {
        destructuring: "all",
      },
    ],
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": [
      "error",
      {
        disallowRedundantWrapping: true,
      },
    ],
    "quote-props": ["error", "as-needed"],
    "symbol-description": "error",
    "unicode-bom": ["error", "never"],
    "use-isnan": [
      "error",
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true,
      },
    ],
    "valid-typeof": [
      "error",
      {
        requireStringLiterals: true,
      },
    ],
    "wrap-iife": [
      "error",
      "any",
      {
        functionPrototypeMethods: true,
      },
    ],
    yoda: ["error", "never"],
    "import/export": "error",
    "import/first": "error",
    "import/no-absolute-path": [
      "error",
      {
        esmodule: true,
        commonjs: true,
        amd: false,
      },
    ],
    "import/no-duplicates": "error",
    "import/no-named-default": "error",
    "import/no-unused-modules": "error",
    "import/no-webpack-loader-syntax": "error",
    "n/handle-callback-err": ["error", "^(err|error)$"],
    "n/no-callback-literal": "error",
    "n/no-deprecated-api": "error",
    "n/no-exports-assign": "error",
    "n/no-new-require": "error",
    "n/process-exit-as-throw": "error",
    "new-cap": [
      "error",
      {
        newIsCap: true,
        capIsNew: false,
        properties: true,
      },
    ],
    "promise/param-names": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array-simple",
      },
    ],
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description",
        "ts-ignore": true,
        "ts-nocheck": true,
        "ts-check": false,
        minimumDescriptionLength: 3,
      },
    ],
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: false,
        types: {
          String: {
            message: "Use string instead",
            fixWith: "string",
          },
          Boolean: {
            message: "Use boolean instead",
            fixWith: "boolean",
          },
          Number: {
            message: "Use number instead",
            fixWith: "number",
          },
          Symbol: {
            message: "Use symbol instead",
            fixWith: "symbol",
          },
          BigInt: {
            message: "Use bigint instead",
            fixWith: "bigint",
          },
          Function: {
            message:
              "Use specific callable interface instead, e.g. `() => void`",
          },
        },
      },
    ],
    "@typescript-eslint/consistent-generic-constructors": [
      "error",
      "constructor",
    ],
    "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "never",
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/consistent-type-exports": [
      "error",
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        disallowTypeAnnotations: true,
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/dot-notation": [
      "error",
      {
        allowKeywords: true,
      },
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "none",
        },
        singleline: {
          delimiter: "comma",
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "variableLike",
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        filter: {
          regex: "^([a-z]+-)*[a-z]+$",
          match: false,
        },
      },
    ],
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-confusing-void-expression": [
      "error",
      {
        ignoreArrowShorthand: false,
        ignoreVoidOperator: false,
      },
    ],
    "@typescript-eslint/no-dupe-class-members": "error",
    "@typescript-eslint/no-dynamic-delete": "error",
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: true,
      },
    ],
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-extra-parens": ["error", "functions"],
    "@typescript-eslint/no-extraneous-class": [
      "error",
      {
        allowWithDecorator: true,
      },
    ],
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-implied-eval": "error",
    "@typescript-eslint/no-invalid-void-type": "error",
    "@typescript-eslint/no-loss-of-precision": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-redeclare": [
      "error",
      {
        builtinGlobals: false,
      },
    ],
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        allowDestructuring: true,
      },
    ],
    "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: false,
        classes: false,
        enums: false,
        variables: false,
        typedefs: false,
      },
    ],
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-nullish-coalescing": [
      "error",
      {
        ignoreConditionalTests: false,
        ignoreMixedLogicalExpressions: false,
      },
    ],
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/quotes": [
      "error",
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],
    "@typescript-eslint/require-array-sort-compare": [
      "error",
      {
        ignoreStringArrays: true,
      },
    ],
    "@typescript-eslint/restrict-plus-operands": [
      "error",
      {
        skipCompoundAssignments: false,
      },
    ],
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowNumber: true,
      },
    ],
    "@typescript-eslint/triple-slash-reference": [
      "error",
      {
        lib: "never",
        path: "never",
        types: "never",
      },
    ],
  },
};
