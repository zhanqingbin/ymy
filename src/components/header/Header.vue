<template>
  <div class="header">
    <div class="container">
      <div class="left">
        <img src="../../assets/LOGO.png" alt="">
      </div>
      <div class="nav-right">
        <a class="no-border" href="/">首页</a>
        <a class="no-border" href="javascript:;">师资</a>
        <a class="no-border" href="">课程安排</a>
        <a class="no-border" href="/works">学生作品</a>
        <!--<a class="no-border" href="/course">学习课程</a>-->
        <a class="no-border">开课时间</a>
        <a class="create-btn" href="/participate">加入圆梦源</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped>
  .header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 70px;
    line-height: 70px;
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(210, 210, 210,0.8);
    z-index: 999;
  }

  .container {
    display: flex;
    margin: 0 auto;
    width: 1170px;
    justify-content: space-between;
  }

  .left {
    display: flex;
    align-items: center;
    width: 136px;
    height: 70px;
  }

  .nav-right {
    display: flex;
    align-items: center;
  }

  .nav-right a {
    font-size: 16px;
    color: white;
  }

  .no-border {
    margin-right: 25px;
    font-size: 14px;
    color: #333;
  }

  .no-border:hover {
    color: #f55753;
  }

  .create-btn {
    width: 110px;
    height: 30px;
    margin-left: 5px;
    line-height: 28px;
    text-align: center;
    border-radius: 15px;
    border: 1px solid #f55853;
    color: #f55853;
  }

  .create-btn:hover {
    background-color: #f55753;
    color: #fff;
  }
</style>
