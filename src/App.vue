<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    <Header />

  <router-view/>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {Header}
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

#app {
  height: 100vh;
}
</style>
