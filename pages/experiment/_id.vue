<template>
  <div>
    <div>
      {{ attributes.path }}<br>
      {{ attributes.date }}<br>
      {{ attributes.title }}<br>
      {{ attributes.slug }}<br>
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

    <div v-html="content" />

  </div>
</template>

<script>
  export default {
    async asyncData ({ params }) {
      const res = await import(`~/content/experiments/${params.id}.md`); 

      return {
        attributes: res.attributes,   
        content: res.html,
      };
    },

    mounted() {
      this.foo();   
    },

    methods: {
      async foo() {
        const exp = await import(`~/assets/js/experiments/${this.attributes.slug}`);
        
        new exp.default(this.$refs.canvas);
      }, 
    },
  }
</script>
