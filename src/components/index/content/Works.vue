<template>
  <div id="works" class="works">
    <ul  class="carousel-wrap container">
      <li>
        <div class="cover-wrap">
          <div class="cover">
            <img src="" style="width: 100%" alt="">
          </div>
        </div>
        <div class="book-info">
          <p class="title">学生姓名:xxx</p>
          <p class="book-desc">作品简介:...</p>
          <p class="read-wrap">
            <a class="creat-book-btn" role="button">查看</a>
          </p>
        </div>
      </li>
    </ul>
    <div class="indicators"></div>
  </div>
</template>
<script>

</script>
<style scoped>
  .works{
    padding: 80px 0;
    position: relative;
  }
  .container{
    padding: 0;
  }
  .carousel-wrap{
    height: 350px;
    margin: 0 auto;
  }
  .carousel-wrap li{
    display: inline-block;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .carousel-wrap li .cover-wrap{
    float: left;
    width: 50%;
    height: 100%;
  }
  .carousel-wrap li .cover-wrap .cover{
    width: 239px;
    height: 348px;
    margin: 0 auto;
    background: red;
  }
  .book-info{
    width: 50%;
    max-width: 500px;
    height: 100%;
    float: left;
    padding: 30px 10px;
  }
  .book-info .title{
    color: #816354;
    font-size: 28px;
    text-align: left;
    line-height: 40px;
    margin-bottom: 20px;
  }
  .book-info .book-desc{
    color: #999;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .book-info .read-wrap{
    margin: 35px 0 10px;
  }
  .book-info .read-wrap a{
    margin: 0;
    width: 133px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #fb7571;
    border-radius: 999px;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
  }
</style>
