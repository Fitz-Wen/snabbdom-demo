import { init } from 'snabbdom/build/package/init';
import { h } from 'snabbdom/build/package/h';
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners'
import { classModule } from 'snabbdom/build/package/modules/class'
// const patch = init([])
const patch = init([
  eventListenersModule,
  classModule
])

const app = document.querySelector('#app');

const vNode = h('div#container.wrap', 'hello world');

patch(app, vNode);

// function testClick() {
//   console.log(11111111);
// }
// const newVnode = h('div#box', {
//   on: {
//     click: testClick
//   },
    // class: {
    //   active: true
    // },
//   hook: {
//     insert: (vnode) => {
//       console.log('insert', vnode)
//     },
//     init: (vnode) => {
//       console.log('init', vnode)
//     }
//   }
// }, [
//   h('span', 'text')
// ])

// setTimeout(() => {
//   patch(vNode, newVnode);
// }, 2000);