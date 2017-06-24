<template>
  <div class="teacher" id="teacher">
    <h3>师资</h3>
    <p class="info">张蕾......</p>
    <div class="img-wraps">
      <div class="img-wrap">
        <ul class="carousel-wrap">
          <li style="opacity: 1" id="carsousel1i1"></li>
          <li style="opacity: 0" id="carsousel1i2"></li>
        </ul>
      </div>
      <div class="img-wrap1">
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  .teacher{
    width: 100%;
    padding: 90px 0;
  }
  .teacher h3{
    width: 100%;
    text-align: center;
    font-size: 36px;
    color: #333;
    margin-bottom: 46px;
    margin-top: 0;
  }
  .teacher p.info{
    width: 100%;
    font-size: 22px;
    color: #999;
    text-align: center;
    padding: 0 30px;
    margin-bottom: 100px;
  }
  .teacher .img-wraps{
    width: 900px;
    height: 380px;
    overflow: hidden;
    margin: 0 auto;
  }
  .teacher .img-wraps .img-wrap{
    width: 500px;
    height: 379px;
    background: red;
    background-size: cover;
    position: relative;
    float: left;
  }
  .teacher .img-wraps .img-wrap1{
    float: left;
    width: 270px;
    height: 200px;
    margin-left: 130px;
    margin-top: 120px;
    background: greenyellow;
    background-size: cover;
  }
</style>
