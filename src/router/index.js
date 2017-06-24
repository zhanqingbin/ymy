import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'
import CourseArrangement from '@/components/CourseArrangement/CourseArrangement'
import AMoule from '@/components/CourseArrangement/A'
import BMoule from '@/components/CourseArrangement/B'
import CMoule from '@/components/CourseArrangement/C'
import DMoule from '@/components/CourseArrangement/D'
import Course from '@/components/Course/Course'
import CourseBegin from '@/components/CourseBegin/CourseBegin'
import JoinUs from '@/components/JoinUs/JoinUs'
import Works from '@/components/Works/Works'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    },
    {
      path: '/coursearrangement',
      name: '课程安排',
      component:CourseArrangement,
      children: [
        {
          path:'a',
          name:'A模块',
          component:AMoule
        },
        {
          path:'b',
          name:'B模块',
          component:BMoule
        },
        {
          path:'c',
          name:'C模块',
          component:CMoule
        },
        {
          path:'d',
          name:'D模块',
          component:DMoule
        },
      ],
    },
    {
      path:'/course',
      name:'学习课程',
      component:Course,
    },
    {
      path:'/coursebegin',
      name:'开课时间',
      component:CourseBegin
    },
    {
      path:'/join',
      name:'加入圆梦源',
      component:JoinUs
    },
    {
      path:'/works',
      name:'学生作品',
      component:Works
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    // 如果你的連結是帶 # 這種
    // to.hash 就會有值(值就是連結)
    // 例如 #3
    if (to.hash) {
      return {
        // 這個是透過 to.hash 的值來找到對應的元素
        // 例如你按下 #3 的連結，就會變成 querySelector('#3')，自然會找到 id = 3 的元素
        selector: to.hash
      }
    }
  }
})
