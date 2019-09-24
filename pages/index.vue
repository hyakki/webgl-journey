<template>
  <div>
    <div v-for="post in posts">
      <nuxt-link :to="`experiment/${post}`">{{ post}}</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData ({ params }) {
      const posts = await import(`~/content/posts`); 

      return {
        posts: posts.default,
      };
    },
  };
</script>

