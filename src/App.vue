<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import vHeader from './components/header/Header.vue'
  export default {
    name: 'app',
    components: {
        vHeader
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
</style>
