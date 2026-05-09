<template>
  <div class="container">
    <Search/>
    <Lists/>
  </div>
</template>

<script>
  import Search from "./components/Search"
  import Lists from "./components/Lists"

  export default {
      name: 'App',
      components: {
        Search,
        Lists
      }
  }
</script>
