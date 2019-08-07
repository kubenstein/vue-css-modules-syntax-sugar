# Vue CssModules syntax improvement

This is a Proof of Concept of vue syntax improving directive build on top of CssModules

Write:
```vue
<h1 v-class="title"></h1>
<h1 v-class.expr="condition ? 'title' : 'subtitle'"></h1>
```

Instead of:

```vue
<h1 :class="$style.title"></h1>
```

# Directive

The `v-class` directive:

```js
Vue.directive('class', {
  bind: (el, binding, vnode) => {
    const { value, expression, modifiers: { expr } } = binding
    const { context } = vnode
    const style = expr ? value : expression
    const className = context.$style[style] || ''
    el.classList.add(className)
  }
})
```

## PoC
The vue app used in this repo is bundled using `parcel`. Compared to `webpack` cssModules are enabled by providing `"modules": true` to `postcss` config.
