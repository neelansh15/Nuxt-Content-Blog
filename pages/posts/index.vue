<template>
  <div>
      <section class="section-post d-flex justify-content-center align-items-center">
        <h1 style="font-size: 3.6em">All Posts</h1>
      </section>
      <div class="posts container p-5">
        <div class="card">
          <ul class="list-group list-group-flush">
            <Card v-for="post in posts" :key="post.title + Math.round(Math.random() * 100)" :post="post" class="list-group-item">Cras justo odio</Card>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }){
    const posts = await $content('posts').sortBy('updatedAt', 'desc').fetch()
    return{
      posts
    }
  }
}
</script>

<style>

</style>