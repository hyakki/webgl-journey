<template>
  <div>
    <div>
      {{ post.attributes.path }}<br>
      {{ post.attributes.date }}<br>
      {{ post.attributes.title }}<br>
      {{ post.attributes.slug }}<br>
    </div>

    <div class="frame">
      <div className="frame-inner wrap--redux">
        <canvas class="frame__canvas"
                id="canvas"
                width="800"
                height="600"
                ref="canvas">
        </canvas>
      </div>
    </div>

    <hr>

    <div v-html="post.html" />

  </div>
</template>

<script>
  export default {
		computed: {
			post () {
				const posts = this.$store.state.posts;
				const { id } = this.$route.params;

				return posts.find(p => p.attributes.slug === id);
			}
		},

    mounted() {
      this.foo();
    },

    methods: {
      async foo() {
        const exp = await import(`~/assets/js/experiments/${this.post.attributes.slug}`);
        
        new exp.default(this.$refs.canvas);
      }, 
    },
  }
</script>

<style>
  .frame__canvas {
    width: 100%;  
  }
</style>
