<template>
  <div>
      <section class="section-post">
      </section>
      <div class="post-card container p-5">
        <h6 style="color: green">{{ post.category }}</h6>
        
        <h1>{{ post.title }}</h1>
        <h5 class="text-muted mb-5">{{ post.author }}</h5>

        <nuxt-content :document="post" />

      </div>
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
.post-card{
  margin-top: -15em;
  border-radius: 20px;
  background-color: white;
}
.nuxt-content h1{
  font-size: 2.5em;
}
.nuxt-content h2{
  font-size: 2em;
}

@media only screen and (max-width: 768px){
  .post-card{
    margin-top: -23em;
  }
}
</style>