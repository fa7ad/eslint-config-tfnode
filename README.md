# eslint-config-tfnode
An eslint config for TS+Node (with prettier)

## Usage

Install the config
```bash
pnpm add @fa7ad/eslint-config-tfnode
```

Create a `.eslintrc.js` file with the following content:

```javascript
require('@fa7ad/eslint-config-tfnode/patch')
module.exports = {
  extends: '@fa7ad/eslint-config-tfnode',
  parserOptions: {
    project: './tsconfig.json'
  }
}
```
