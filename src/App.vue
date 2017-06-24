<template>
  <div id="app">
    <v-Header></v-Header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vHeader from './components/header/Header.vue';
  import vFooter from './components/footer/Footer.vue';
  export default {
    name: 'app',
    components: {
      vHeader,
      vFooter
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
