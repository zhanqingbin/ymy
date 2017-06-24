<template>
  <div class="banner" @mouseover="stopAutoplay" @mouseout="autoPlay">
    <div class="list" style="left: 0;">
      <transition-group enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <a href="#" :key="1"><img src="../../assets/banner.jpg" alt="图片1" style="background-color: aqua"></a>
        <a href="#" :key="2"><img src="../../assets/vue.png" alt="图片2" style="background-color: blueviolet"></a>
        <a href="#" :key="3"><img src="../../assets/wechat.png" alt="图片3" style="background-color: cornflowerblue"></a>
        <a href="#" :key="4"><img src="../../assets/reactnative.png" alt="图片4" style="background-color: darkcyan"></a>
      </transition-group>
    </div>
    <a href="javascript:;" class="prev btn" @click="prev">&lt;</a>
    <a href="javascript:;" class="next btn" @click="next1">&gt;</a>
    <ul class="dots">
      <li class="active" clickIndex="1"></li>
      <li clickIndex="2"></li>
      <li clickIndex="3"></li>
      <li clickIndex="4"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        index: 1,
        timer: null
      }
    },
    methods: {
      prev(){
        this.index--;
        if (this.index < 1) {
          this.index = 4;
        }
        this.banner(100);
        this.changeDots();
      },
      next1(){
        this.index++;
        if (this.index > 4) {
          this.index = 1;
        }
        this.banner(-100);
        this.changeDots();
      },
      banner(offset){
        const list = document.querySelector('.list');
        let newLeft = parseInt(list.style.left) + offset;
        // 回到第一张
        if (newLeft <= -400) {
          newLeft = 0;
        }
        // 回到最后一张
        if (newLeft >= 100) {
          newLeft = -300;
        }
        list.style.left = newLeft + '%'
      },
      changeDots(){
        let dots = document.querySelectorAll('li');
        for (let i = 0; i < dots.length; i++) {
          if (dots[i].className === 'active') {
            dots[i].className = ''
          }
        }
        dots[this.index - 1].className = 'active'
      },
      autoPlay(){
        document.querySelector('.prev').style.display = 'none';
        document.querySelector('.next').style.display = 'none';
        this.timer = setInterval(() => {
          this.next1();
        }, 2000)
      },
      stopAutoplay(){
        clearInterval(this.timer);
        document.querySelector('.prev').style.display = 'block';
        document.querySelector('.next').style.display = 'block';
      },
      dotClick(){
        let aLi = document.querySelectorAll('li');
        let _this = this;
        for (let i = 0; i < aLi.length; i++) {
          aLi[i].onclick = function () {
            let clickIndex = parseInt(this.getAttribute('clickIndex'));
            let offset = (_this.index - clickIndex) * 100;
            _this.banner(offset);
            _this.index = clickIndex;
            _this.changeDots();
          }
        }
      }
    },
    mounted(){
      this.autoPlay();
      this.dotClick();
    }
  }
</script>

<style scoped>
  .banner {
    position: relative;
    margin-top: 71px;
    width: 100%;
    height: 70vh;
    overflow: hidden;
  }

  .list {
    position: absolute;
    width: 400%;
    height: 100%;
  }

  .list img {
    float: left;
    width: 25%;
    height: 100%;
  }

  .prev {
    position: absolute;
    width: 50px;
    height: 100px;
    background: rgba(255, 255, 255, 0.1);
    top: 50%;
    margin-top: -50px;
    left: 30px;
    font-size: 40px;
    line-height: 100px;
    text-align: center;
    color: rgba(255, 255, 255, 0.3);
  }

  .prev:hover {
    background: rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.7);
  }

  .next {
    position: absolute;
    width: 50px;
    height: 100px;
    top: 50%;
    margin-top: -50px;
    right: 30px;
    background: rgba(255, 255, 255, 0.1);
    font-size: 40px;
    text-align: center;
    line-height: 100px;
    color: rgba(255, 255, 255, 0.3);
  }

  .next:hover {
    background: rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.7);
  }

  .dots {
    position: absolute;
    left: 50%;
    margin-left: -74px;
    bottom: 50px;
  }

  .dots li {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    float: left;
    margin: 0 10px;
    cursor: pointer;
    border: 1px solid #ccc;
  }

  .dots .active {
    background-color: white;
  }
</style>
