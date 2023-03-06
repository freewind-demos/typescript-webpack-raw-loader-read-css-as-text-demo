TypeScript Webpack "raw-loader" Read Css as Text Demo
=================================

需要对css对应的rule增加`resourceQuery: { not: /raw/ },`以排除，还挺麻烦的。

还有一种是用 `oneOf`

详见：https://webpack.js.org/guides/asset-modules/#replacing-inline-loader-syntax

```
npm install
npm start
```

It will open page on browser automatically.
