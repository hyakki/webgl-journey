<template>
  <div class="posts">
    <template v-for="post in posts">
      <nuxt-link class="post"
                 :to="`experiment/${post.attributes.slug}`">
        <img class="post__picture"
             :src="require(`../assets/images/covers/${post.attributes.slug}.png`)" />
      </nuxt-link>
    </template>
  </div>
</template>

<script>
  export default {
		computed: {
			posts () {
				return this.$store.state.posts;
			}
		},
  };
</script>

<style>
  .posts {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding: 20px;
    max-width: 900px;
    margin: 0 auto;
  }

  .post {
    text-decoration: none; 
    display: block;
  }

  .post__picture {
    display: block;
    width: 100%;  
  }
</style>

