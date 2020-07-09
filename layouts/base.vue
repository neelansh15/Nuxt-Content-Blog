<template>
  <div>
      <nav>
          <h2 style="font-weight: 300">
            <nuxt-link to="/">
              Technospective
            </nuxt-link>
          </h2>
      </nav>
      <nuxt />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
nav{
    display: flex;
    padding: 2em;
    background-color: antiquewhite;
}
a{
    color: black;
}
a:hover{
    color: rgb(70, 70, 70);
    text-decoration: none;
}
</style>