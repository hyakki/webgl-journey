import post1 from '~/content/experiments/01-triangle.md';
import post2 from '~/content/experiments/02-rectangle.md';
import post3 from '~/content/experiments/03-cube.md';
import post4 from '~/content/experiments/04-regl.md';

export const state = () => ({
  list: [
		post1,
		post2,
		post3,
		post4,
	],
})

export const mutations = {
  add (state, text) {
    state.list.push({
      text: text,
      done: false
    })
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}
