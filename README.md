# Simple Treemap

A simple app display tree map base on predefined data structure.


## Commands

```sh
# start server
yarn build
yarn start

# start dev server
yarn dev

# lint source code
yarn lint

# test
yarn start
yarn test

# ci
yarn ci
```

## Libraries

This project uses a number of libraries to speed up development and provide better DX, development speed and eventually UX.


### Material UI

`@material-ui/core` and `@material/lab` provides variety of components out of the box which adheres material design for better UX and a11y.
For example:

- Theming
- Feedback on interaction
- Feedback on loading (loading screen with skeleton)
- Basic keyboard navigation


### Nextjs Image Component

Nextjs provides an `Image` component which does heavy lifting of image handling, including, lazyloading off screen image, image optimization, responsive images, image placeholder, preloading.


### Lodash

`lodash` provides sets of utility functions and save the hassle of writing our own.

`babel-plugin-lodash` transpiles named lodash import to cherry pick import to slim down bundle size.
It allows using named import to import `lodash` so in the future when lodash natively support es module, there could be less migration effort.

`eslint-plugin-you-dont-need-lodash-underscore` warns against the use of some lodash functions which has native implementation like `String.prototype.startsWith`.


### Eslint Plugins

Other eslint plugin are added to scan for problematic pattern / readability issue.
They help against bad code and provides better DX.

`eslint-config-airbnb-typescript` is based on `eslint-config-airbnb` and provides a list of best practices and recommendations from airbnb engineering.
This save developers effort on figuring out the rules and setting the rules.
