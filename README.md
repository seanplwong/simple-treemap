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

# e2e test
yarn test:e2e

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
- Basic keyboard navigation


### Eslint Plugins

Other eslint plugin are added to scan for problematic pattern / readability issue.
They help against bad code and provides better DX.

`eslint-config-airbnb-typescript` is based on `eslint-config-airbnb` and provides a list of best practices and recommendations from airbnb engineering.
This save developers effort on figuring out the rules and setting the rules.
