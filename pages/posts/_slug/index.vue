<template>
  <div>
      <section class="section-post">
        <div class="container p-5 mt-5" style="background-color: white; border-radius: 20px">
          <h6 style="color: green">{{ post.category }}</h6>
          
          <h1>{{ post.title }}</h1>
          <h5 class="text-muted mb-5">{{ post.author }}</h5>

          <nuxt-content :document="post" />

        </div>
      </section>
  </div>
</template>

<script>
export default {
  layout: 'base',
  async asyncData({ $content, params }){
    const post = await $content(`posts/${params.slug}`).fetch()
    return { post }
  }
}
</script>

<style>
.nuxt-content h1{
  font-size: 2.5em;
}
.nuxt-content h2{
  font-size: 2em;
}
</style>