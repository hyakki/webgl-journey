import posts from '~/content/posts';

export const state = () => ({
  posts: [],
})

export const mutations = {
  addPosts (state, payload) {
    state.posts = payload;
  }
}

export const actions = {
	async nuxtServerInit({ commit }) {

    const promises = posts.map(p => getContent(p));

    commit('addPosts', await Promise.all(promises));
	}
}

async function getContent(slug) {
  const content = await import(`~/content/experiments/${slug}.md`);

  return content;
}
