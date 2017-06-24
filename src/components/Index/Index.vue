<template>
  <div>
    <v-Header></v-Header>
    <v-Banner></v-Banner>
    <v-Teacher></v-Teacher>
    <v-Course></v-Course>
    <v-Works></v-Works>
    <v-free-course></v-free-course>
    <v-participate></v-participate>
    <v-Footer></v-Footer>
  </div>
</template>

<script>
  import vHeader from './header/Header.vue'
  import vBanner from './content/Banner.vue';
  import vTeacher from './content/Teacher.vue';
  import vCourse from './content/Course.vue';
  import vWorks from './content/Works.vue';
  import vFreeCourse from './content/FreeCourse.vue';
  import vParticipate from './content/Participate.vue'
  import vFooter from './footer/Footer.vue'
  export default {
    name: 'home',
    components: {
      vHeader,
      vBanner,
      vTeacher,
      vCourse,
      vWorks,
      vFreeCourse,
      vParticipate,
      vFooter
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
