<template>
  <div class="free-course" id="freeCourse">
    <div class="container">
      <h1 class="title">
        <span class="text-content">学习课程</span>
      </h1>
      <!--<p class="title-desc">免费课程...</p>-->
      <div class="show-img-wrap">
        <div class="course course-line1">
          <ul>
            <li>
              <img src="../../../assets/new.png" alt="图片1">
              <div class="course-info">
                <p>新手入门</p>
                <p>3周课程</p>
                <p class="mask">
                  新手入门路径帮助对前端技术感兴趣的新手0基础入门。html5与css3实战让你迅速成长！
                </p>
              </div>
            </li>
            <li>
              <img src="../../../assets/less.png" alt="图片1">
              <div class="course-info">
                <p>Less应用实战</p>
                <p>实战课程</p>
                <p class="mask">
                  CSS预处理语言，使开发更加快速。
                </p>
              </div>
            </li>
            <li>
              <img src="../../../assets/B.jpg" alt="图片1">
              <div class="course-info">
                <p>BootStrap实战</p>
                <p>实战课程</p>
                <p class="mask">
                  学习使用前端最流行的前端UI框架Bootstrap，可以提升开发效率，短时间内迅速搭建网站。
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="course course-line2">
          <ul>
            <li>
              <img src="../../../assets/js.jpeg" alt="图片1">
              <div class="course-info">
                <p>原生JavaScript深入</p>
                <p>8周课程</p>
                <p class="mask">
                  打下扎实的基础，帮助你通过动手实践成长为合格的Web前端工程师。
                </p>
              </div>
            </li>
            <li>
              <img src="../../../assets/node.png" alt="图片1">
              <div class="course-info">
                <p>NodeJs开发深入</p>
                <p>4周课程</p>
                <p class="mask">
                  NodeJS学习路径中将通过使用 NodeJS、Mongodb 实现博客、论坛、留言板、聊天室等应用，学习并实践 NodeJS编程基础和Web应用开发等技术。
                </p>
              </div>
            </li>
            <li>
              <img src="../../../assets/react.jpeg" alt="图片1">
              <div class="course-info">
                <p>React项目实战</p>
                <p>1周课程</p>
                <p class="mask">
                  在JS的基础上学习使用前端流行框架React的使用，了解命令式编程与React diff算法的魅力。让你迅速达到企业级开发水平。
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="course course-line3">
          <ul>
            <li>
              <img src="../../../assets/vue.jpeg" alt="图片1">
              <div class="course-info">
                <p>Vue项目实战</p>
                <p>实战课程</p>
                <p class="mask">
                  深入学习前端流行框架Vue的使用，掌握渐进式框架的使用。让你迅速达到企业级开发水平。
                </p>
              </div>
            </li>
            <li>
              <img src="../../../assets/xcx.png" alt="图片1">
              <div class="course-info">
                <p>小程序项目实战</p>
                <p>实战课程</p>
                <p class="mask">
                  紧跟前端潮流，掌握微信小程序的开发，快人一步。
                </p>
              </div>
            </li>
            <li>
              <img src="../../../assets/angular.png" alt="图片1">
              <div class="course-info">
                <p>Angular项目实战</p>
                <p>实战课程</p>
                <p class="mask">
                  Google开源的一款JavaScript MVC框架，通过实战练习让你快速掌握。
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  .free-course {
    padding-top: 80px;
    padding-bottom: 100px;
    text-align: center;
    background-color: #fcf8f8;
  }

  .free-course .container {
    padding: 0;
    margin: 0 auto;
    width: 1170px;
  }

  .title {
    font-size: 36px;
    color: #222;
    text-align: center;
  }

  .title-desc {
    width: 80%;
    color: #999;
    margin: 50px auto 0;
  }

  .show-img-wrap {
    width: 1050px;
    /*max-width: 990px;*/
    margin: 100px auto 0;
  }

  .course {
    margin-bottom: 30px;
    height: 100px;
  }

  .course ul li {
    display: flex;
    float: left;
    width: 300px;
    height: 100px;
    margin: 0 25px;
  }

  .course ul li img {
    width: 100px;
    height: 100px;
  }

  .course-info {
    position: relative;
    border: 1px solid #ccc;
  }

  .course-info p:nth-child(1) {
    width: 200px;
    font-size: 18px;
    margin-top: 25px;
    margin-bottom: 5px;
  }

  .course-info p:nth-child(2) {
    font-size: 12px;
    color: #666;
  }

  .course-info p.mask {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 100px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
    color: transparent;
    background: transparent;
  }
  .course-info p.mask:hover{
    color: white;
    background: hsla(0,0%,58%,.8);
    cursor: pointer;
  }
</style>
