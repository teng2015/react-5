#react
>react.js的基础用法

##state and props
    * 在react中，数据是单向流动的，因而组件是容易把握的。它们只需要从父节点获取props渲染即可。因此，当顶层的
    某个props改变了，React会递归地向下遍历整颗组件树，重新渲染所有使用这个属性的组件。
      1. 从全局作用域渲染至组件中；
      'var a = 'str';'
