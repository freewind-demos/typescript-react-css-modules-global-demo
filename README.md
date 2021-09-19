TypeScript React "css-modules" ":global" Demo
=================================

1. 要么使用`import from './???.module.pcss'`语法
1. 要么使用`import styles from './???.module.pcss'`语法，且在内部使用至少一次`styles.someClass`；否则不会生成对应的style，导致`:global`中定义的也无效

注意：
1. 当与`postcss-loader`使用时，必须使用低版本的`css-loader`（如`css-loader`），否则`postcss-loader`不能正常工作，不知道为什么，不太能相信

```
npm install
npm run demo
```

It will open page on browser automatically.
