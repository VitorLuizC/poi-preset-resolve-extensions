# poi-preset-resolve-extensions

Resolve extensions on Poi.

## Installation

Install using NPM or Yarn.

```sh
npm install poi-preset-resolve-extensions --save-dev

# With Yarn use the command below
yarn add poi-preset-resolve-extensions -D
```

## Usage

Add to poi presets with you desired extensions.

```js
// ./poi.config.js
module.exports = {
  presets: [
    require('poi-preset-resolve-extensions')(['.sss', '.graphql'])
  ]
};
```

Then imported file's will be resolved without say it's extensions.

```js
import './style/theme'; // Automatically resolved to './style/theme.sss'
```

## License

Released under MIT license. You can see it [here][license].

<!-- Links -->

[license]: ./LICENSE
