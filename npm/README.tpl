# ReX React UI Components Library
## ReX React UI Component: __COMPONENT_NAME__

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
npm install __COMPONENT_NAME__@__VERSION__ --save
```

## What you can do

ReX Icons take balance between functionality and friendliness, to be understandable yet inviting.

### Live examples

For a complete guide of properties for React and HTML classes please visit the Storybook site:  

https://rakuten-rex.github.io/__COMPONENT_NAME__/

### JavaScript modules

#### React component (JavaScript + CSS Styles)

For plug and play components integration.   

Example: 

```js
import 'rex-core'; // ReX Core dependency
import Icon from '__COMPONENT_NAME__';

function MyComponent() {
  return <Icon name='cart-f' />;
}
```

#### CSS Styles only

For your own JavaScript integration (React, Vue, Angular, etc.) or Static HTML.

Example: 

```js
import 'rex-core/css'; // ReX Core dependency
import '__COMPONENT_NAME__/css';

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
<!-- __COMPONENT_NAME__ -->
<link href="https://r.r10s.jp/com/rex/__COMPONENT_NAME__/__VERSION__/__COMPONENT_NAME__.development.css" rel="stylesheet">
```

For production mode:

```markdown
<!-- ReX Core -->
<link href="https://r.r10s.jp/com/rex/rex-core/__REX_CORE_VERSION__/rex-core.production.min.css" rel="stylesheet">
<!-- __COMPONENT_NAME__ -->
<link href="https://r.r10s.jp/com/rex/__COMPONENT_NAME__/__VERSION__/__COMPONENT_NAME__.production.min.css" rel="stylesheet">
```

Example: 

```markdown
<div class="rex-css-style my-component">
  <span aria-hidden="true" class="rex-icon cart-f"></span> Add to Cart
</div>
```

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

