<template>
  <div>
    <v-Banner></v-Banner>
    <v-Teacher></v-Teacher>
    <v-Course></v-Course>
    <v-Works></v-Works>
    <v-free-course></v-free-course>
    <v-participate></v-participate>
  </div>
</template>

<script>
  import vBanner from './Banner.vue';
  import vTeacher from './Teacher.vue';
  import vCourse from './Course.vue';
  import vWorks from './Works.vue';
  import vFreeCourse from './FreeCourse.vue';
  import vParticipate from './Participate.vue'
  export default {
    name: 'home',
    components: {
      vBanner,
      vTeacher,
      vCourse,
      vWorks,
      vFreeCourse,
      vParticipate
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
