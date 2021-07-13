# vue 源码

## 根实例

```js
const main = new Vue({
  router,
  render: (h) => h(App),
});

main.$mount("#app") ||
  mountComponent(this, query("#app")) ||
  callHook(vm, "beforeMount");
updateComponent = function() {
  vm._update(vm._render(), hydrating);
};

new Watcher(
  vm,
  updateComponent,
  noop,
  {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, "beforeUpdate");
      }
    },
  },
  true /* isRenderWatcher */
);

updateComponent()

```
