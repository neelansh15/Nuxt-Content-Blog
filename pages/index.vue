<template>
  <div>
    <section class="section-home d-flex justify-content-center align-items-center">
      <div class="d-flex flex-column align-items-center">
        <h1 style="font-size: 4em">Technospective</h1>
        <h2 class="lead">A beautiful day to code!</h2>
      </div>
    </section>

    <div class="container">
      <div class="d-flex justify-content-center align-items-center" style="margin-top: -5em">
        <FeaturedCard :post="posts[posts.length - 1]" />
      </div>

      <h2 class="mt-5 mb-4">Latest Posts</h2>
      <div class="mygrid">
        <Card :post="post" v-for="post in posts" :key="post.title + Math.round(Math.random() * 100)" />
      </div>

    </div>

  </div>
</template>

<script>
export default {
  async asyncData({ $content }){
    const posts = await $content('posts').sortBy('updatedAt', 'desc').limit(6).fetch()
    return {
      posts
    }
  }
}
</script>

<style>
.mygrid{
  display: grid;
  grid-template-columns: auto;
  gap: 0.5em;
}

@media only screen and (min-width: 768px){
  .mygrid{
      display: grid;
      grid-template-columns: auto auto;
      gap: 1em;
  }
}
</style>
