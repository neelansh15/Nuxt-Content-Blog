<template>
  <div>
    <section class="section60 d-flex justify-content-center align-items-center">
      <div class="d-flex flex-column align-items-center">
        <h1 class="display-2">Technospective</h1>
        <h2 class="lead">A beautiful day to code!</h2>
      </div>
    </section>

    <div class="container">
      <div class="d-flex justify-content-center align-items-center" style="margin-top: -5em">
        <FeaturedCard />
      </div>

      <h2 class="mt-5 mb-4">Latest Posts</h2>
      <div class="row d-flex justify-content-center">
        <Card :post = "post" class="col-md-5" v-for="post in posts" :key="post.title" />
      </div>

    </div>

  </div>
</template>

<script>
export default {
  async asyncData({ $content }){
    const posts = await $content('posts').sortBy('title', 'asc').limit(6).fetch()
    console.log(posts)
    return {
      posts
    }
  }
}
</script>

<style>
</style>
