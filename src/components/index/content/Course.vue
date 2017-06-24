<template>
  <div id="course" class="course">
    <div class="container">
      <!--<h1 class="title">-->
        <!--<span class="text-content">课程</span>-->
      <!--</h1>-->
      <!--<p class="title-desc">通过对JavaScript前端、Nodejs后端、HTML5 移动端、等原生等技术的学习，成为真正的JS全栈工程师</p>-->
      <ul class="company-active">
        <li>
          <i class="pen-logo">
            <img src="../../../assets/introduceContainer1.gif" alt="">
          </i>
          <span>A模块:零基础入门</span>
        </li>
        <li>
          <i class="book-logo">
            <img src="../../../assets/introduceContainer2.gif" alt="">
          </i>
          <span>B模块:最深入的原生JS课程体系</span>
        </li>
        <li>
          <i class="share-logo">
            <img src="../../../assets/introduceContainer3.gif" alt="">
          </i>
          <span>C模块:增强Node.js与流行框架实战</span>
        </li>
        <li>
          <i class="print-logo">
            <img src="../../../assets/introduceContainer4.gif" alt="">
          </i>
          <span>D模块:全栈项目实战</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  .course {
    padding-top: 80px;
    padding-bottom: 120px;
    background-color: #fcf8f8;
  }

  .course .container {
    padding: 0;
    width: 1170px;
    margin: 0 auto;
  }

  .course .container .title {
    margin: 0;
    padding: 0;
    font-size: 36px;
    color: #222;
    text-align: center;
  }

  .course .container .title-desc {
    width: 80%;
    font-size: 16px;
    color: #999;
    margin: 50px auto 75px;
    text-align: center;
  }

  .course .container .company-active {
    overflow: hidden;
    margin-bottom: 10px;
  }

  .course .container .company-active li {
    float: left;
    width: 25%;
  }

  .course .container .company-active li i {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 168px;
    height: 168px;
    border-radius: 50%;
    margin: 0 auto;
    background-size: cover;
  }

  .course .container .company-active li span {
    display: block;
    text-align: center;
    font-size: 15px;
    color: #999;
    line-height: 25px;
    margin-top: 10px;
  }
</style>
