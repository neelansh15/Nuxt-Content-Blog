<template>
  <div>
    <section class="section80 d-flex justify-content-center align-items-center">
      <div class="d-flex flex-column align-items-center">
        <h1 class="display-2">Technospective</h1>
        <h2 class="lead">A beautiful day to code!</h2>
      </div>
    </section>

    <div class="container">
      <div class="d-flex justify-content-center align-items-center" style="margin-top: -5em">
        <FeaturedCard />
      </div>

      <h2 class="mt-5 mb-4">Top Posts</h2>
      <div class="row">
        <Card class="col-md-6 mb-2" v-for="n in 6" :key="n" />
      </div>

    </div>

  </div>
</template>

<script>
export default {}
</script>

<style>
@import '~/css/sections.css';
</style>
