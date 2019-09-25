import posts from '~/content/posts';

export const state = () => ({
  posts: [],
})

// export const mutations = {
//   increment (state) {
//     state.counter++
//   }
// }

export const actions = {
	async nuxtServerInit({ dispatch }) {

    const promises = posts.map(p => {
      return getContent(p);
    });

    Promise.all(promises).then(res => {
      this.state.posts = res;
    })

		// await dispatch('core/load')
	}
}

async function getContent(slug) {
  const content = await import(`~/content/experiments/${slug}.md`);

  return content;
}