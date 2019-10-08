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

<style lang="scss">
  .posts {
    padding: 20px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .post {
    text-decoration: none; 
    display: flex;
    width: 100%;

    & + & {
      margin-top: 20px;  
    }
  }

  .post__picture-outer {
    position: relative;
    width: 35%;
    flex-shrink: 0;
  }

  .post__picture-outer::before {
    content: '';
    display: block;
    width: 100%;
    padding-top: 70%;
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
    color: #000;
    font-size: 1.6rem;
    line-height: 1.2em;
    flex-grow: 1;
    padding: 20px;
    border: 1px solid #efefef;
    border-left: 0;
    transition: background-color .2s ease-out, color .2s ease-out;

    .post:hover & { 
      background-color: #808080;
      color: #fff;  
    }
  } 

</style>

