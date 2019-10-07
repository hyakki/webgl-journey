<template>
  <div class="posts">
    <template v-for="post in posts">
      <nuxt-link class="post"
                 :key="post.attributes.slug"
                 :to="`experiment/${post.attributes.slug}`">
        <div class="post__picture-outer">
          <img class="post__picture"
               :src="require(`../assets/images/covers/${post.attributes.slug}.png`)" />
        </div>
        <div class="post__title">
          {{ post.attributes.title }} ({{ post.attributes.date }})
        </div>
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
    grid-template-columns: repeat(2, 1fr);
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

  .post__picture-outer {
    position: relative;

  }

  .post__picture-outer::before {
    content: '';
    display: block;
    width: 100%;
    padding-top: 100%;
  }

  .post__picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;  
    height: 100%;
    display: block;
    object-fit: cover;
  }

  .post__title {
    margin-top: 10px;
    color: black;
    font-size: 1.6rem;
    line-height: 1.2em;
  } 
</style>

