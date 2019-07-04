# ReX React UI Components Library
## ReX React UI Component: rex-icons

This project is part of ReX Design Language and it can be used to create React UI Components.   
For more information visit:   

Github  
https://github.com/rakuten-rex

NPM  
https://www.npmjs.com/org/rakuten-rex

## How it was built 

1. Build tool: webpack 4
1. Codebase: Fork of Bootstrap project + ReX custom styles
1. Css engine: Sass
1. JavaScript component: React

# How to install

```
npm install rex-icons@1.3.0 --save
```

## What you can do

ReX Icons take balance between functionality and friendliness, to be understandable yet inviting.

### Live examples

For a complete guide of properties for React and HTML classes please visit the Storybook site:  

https://rakuten-rex.github.io/rex-icons/

### JavaScript modules

#### React component (JavaScript + CSS Styles)

For plug and play components integration.   

Example: 

```js
import 'rex-core'; // ReX Core dependency
import Icon from 'rex-icons';

function MyComponent() {
  return <Icon name='cart-f' />;
}
```

#### CSS Styles only

For your own JavaScript integration (React, Vue, Angular, etc.) or Static HTML.

Example: 

```js
import 'rex-core/css'; // ReX Core dependency
import 'rex-icons/css';

function MyComponent() {
  return <span aria-hidden="true" class="rex-icon cart-f"></span>;
}
```

### Static HTML

Add it from our CDN into your HTML template or HTML static page.

For development mode:

```markdown
<!-- ReX Core -->
<link href="https://r.r10s.jp/com/rex/rex-core/__REX_CORE_VERSION__/rex-core.development.css" rel="stylesheet">
<!-- rex-icons -->
<link href="https://r.r10s.jp/com/rex/rex-icons/1.3.0/rex-icons.development.css" rel="stylesheet">
```

For production mode:

```markdown
<!-- ReX Core -->
<link href="https://r.r10s.jp/com/rex/rex-core/__REX_CORE_VERSION__/rex-core.production.min.css" rel="stylesheet">
<!-- rex-icons -->
<link href="https://r.r10s.jp/com/rex/rex-icons/1.3.0/rex-icons.production.min.css" rel="stylesheet">
```

Example: 

```markdown
<div class="rex-css-style my-component">
  <span aria-hidden="true" class="rex-icon cart-f"></span> Add to Cart
</div>
```

## How to start the project

The development environment is based on Storybook, for more info visit https://storybook.js.org/ .   

```
npm start
```

## How to build

The build task will generate a NPM package ready to be published and also a static version of Storybook, one folder for NPM `./build/node_modules/rex-icons` and other one for Github pages `./docs`.   

```
npm run build
```

## How to check build version

By using Node http-server, you can check the static version of Storybook with production settings and builds.

```
npm run serve
```

## How to publish to NPM
### Build the project

```
npm run build
```

### Login into NPM

Build the project first.  
After that run the following commands:

```
cd build/node_modules/rex-icons
npm login
npm publish
```

Once the process finish, take a look to the NPM site:   

https://www.npmjs.com/package/rex-icons

## How to test

This starter kit includes `jest` and `enzyme` for unit testing.

```
# Run test once
npm test

# Watch mode
npm test -- -watch
```

### How to update snapshots

```
npm test -- -u
```

### How to report code coverage

```
npm test -- -coverage
```

and coverage report will be generated under `./coverage/` directory.

## Javascript and React related documents

Take a look to this nice documentation pages to be more familiar with React and modern Javascript:

### Official site
https://reactjs.org/docs/getting-started.html   

### Google Web Fundamentals (the whole site is a must to read)
https://developers.google.com/web/fundamentals/

### Webpack as magic bundler
https://webpack.js.org/

### Composing Software series (how to understand Funcional Programming)
https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea   

### Common React patterns
https://reactpatterns.com   

### Understanding Storybook with nice images
https://blog.hichroma.com/the-delightful-storybook-workflow-b322b76fd07   

### Some guidelines for clean code
https://americanexpress.io/clean-code-dirty-code/

