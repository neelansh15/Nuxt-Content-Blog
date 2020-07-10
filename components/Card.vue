<template>
  <div class="card border-0 p-3 makeRound">
    <div class="card-body">
      <h6 style="color: green">{{ post.category }}</h6>
      <h3 class="card-title">
        <nuxt-link :to="'/posts/' + post.slug">{{ post.title }}</nuxt-link>
      </h3>
      <h6 class="card-subtitle text-muted">{{ post.author }}</h6>
      <p class="card-text mt-2">
        <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maxime quae commodi eligendi ad enim sit natus eveniet veritatis obcaecati omnis, repellendus nihil? Ipsum vitae, sed odio quas in quibusdam. -->
        {{ post.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
};
</script>

<style scoped>
a{
    color: #1f1f1f
}
a:hover{
    color: rgb(184, 121, 40);
    text-decoration: none;
}
</style>