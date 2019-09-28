<template>
  <div class="inner">

    <div id="info">
      Infos
    </div>

    <div>
      {{ post.attributes.path }}<br>
      {{ post.attributes.date }}<br>
      {{ post.attributes.title }}<br>
      {{ post.attributes.slug }}<br>
    </div>

    <div class="frame"
         ref="frame">
      <div className="frame-inner wrap--redux">
        <canvas class="frame__canvas"
                id="canvas"
                width="800"
                height="600"
                ref="canvas">
        </canvas>
      </div>
    </div>

    <div v-html="post.html" />

  </div>
</template>

<script>
  import hljs from 'highlight.js/lib/highlight';
  import javascript from 'highlight.js/lib/languages/javascript';

  export default {
		computed: {
			post () {
				const posts = this.$store.state.posts;
				const { id } = this.$route.params;

				return posts.find(p => p.attributes.slug === id);
			}
		},

    mounted() {
      hljs.registerLanguage('javascript', javascript);
      document.querySelectorAll('code').forEach(c => {
        hljs.highlightBlock(c);
      });

      this.foo();
    },

    destroyed() {
      this.exp && this.exp.destroy && this.exp.destroy();
    },

    methods: {
      async foo() {
        const exp = await import(`~/assets/js/experiments/${this.post.attributes.slug}`);
        
        this.exp = new exp.default(this.$refs.canvas, this.$refs.frame);
      }, 
    },
  }
</script>

<style>
  .frame {
    position: relative;
  }

  .frame__canvas {
    display: block;
    width: 100%;  
    max-width: 800px;
  }

  .inner {
    max-width: 800px;  
    margin: 80px auto;
  }

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #282a36;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-section,
  .hljs-link {
    color: #8be9fd;
  }

  .hljs-function .hljs-keyword {
    color: #ff79c6;
  }

  .hljs,
  .hljs-subst {
    color: #f8f8f2;
  }

  .hljs-string,
  .hljs-title,
  .hljs-name,
  .hljs-type,
  .hljs-attribute,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-addition,
  .hljs-variable,
  .hljs-template-tag,
  .hljs-template-variable {
    color: #f1fa8c;
  }

  .hljs-comment,
  .hljs-quote,
  .hljs-deletion,
  .hljs-meta {
    color: #6272a4;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-title,
  .hljs-section,
  .hljs-doctag,
  .hljs-type,
  .hljs-name,
  .hljs-strong {
    font-weight: bold;
  }

  .hljs-emphasis {
    font-style: italic;
  } 

</style>
