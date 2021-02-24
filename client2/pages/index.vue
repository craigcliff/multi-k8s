<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        clientnuxt111111111111
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
         <ul>
      <li v-for="post in posts" :key="post.title">
       
          {{ post }}
       
      </li>
    </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        posts: []
      }
    },
    // async fetch() {
    //   this.posts = await this.$axios.$get('/api/values/all')
    // },
    async asyncData({ $axios }) {
  const ip = await $axios.$get('https://jsonplaceholder.typicode.com/todos/1')
  console.log(ip);
  return { ip }
}
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
