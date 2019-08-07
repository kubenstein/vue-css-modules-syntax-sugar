import Vue from 'vue'
import App from './App.vue'

Vue.directive('class', {
  bind: (el, binding, vnode) => {
    const { value, expression, modifiers: { expr } } = binding
    const { context } = vnode
    const style = expr ? value : expression
    const className = context.$style[style] || ''
    el.classList.add(className)
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
