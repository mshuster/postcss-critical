# PostCSS Critical [![Build Status][ci-img]][ci]

[PostCSS] plugin to compile critical path css from marked-up css output..

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/mshuster/postcss-critical.svg
[ci]:      https://travis-ci.org/mshuster/postcss-critical

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-critical') ])
```

See [PostCSS] docs for examples for your environment.
