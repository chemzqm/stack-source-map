# Stack-source-map

Attamp to make error stack works with source-map in browser, only Chrome supportted yet.

The code mostly from [evanw/node-source-map-support](https://github.com/evanw/node-source-map-support), but simplified to works with browser only and fixed to support all source map mode of [webpack](https://webpack.github.io/docs/configuration.html#devtool)

TODO: some test

## Install

    npm install stack-source-map

## Usage

``` js
require('stack-source-map')
```
