# wdio-babel-plugin-istanbul-service

## How to use

1. Install: `npm install wdio-babel-plugin-istanbul-service@git+ssh://git@github.com/ofk/wdio-babel-plugin-istanbul-service.git --save-dev`
1. Setup [babel-plugin-istanbul](https://github.com/istanbuljs/babel-plugin-istanbul)
1. Update `wdio.conf.js`:

``` js
exports.config = {
    :
  services: [..., 'babel-plugin-istanbul'],
  babelPluginIstanbulOpts: {
    includeDir: './src',
    reportDir: './coverage',
    reporter: ['text', 'html'],
  },
    :
};
```
