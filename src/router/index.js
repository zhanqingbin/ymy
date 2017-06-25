import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'
import CourseArrangement from '@/components/CourseArrangement/CourseArrangement'
import AMoule from '@/components/CourseArrangement/A'
import BMoule from '@/components/CourseArrangement/B'
import CMoule from '@/components/CourseArrangement/C'
import DMoule from '@/components/CourseArrangement/D'
import Course from '@/components/Course/Course'
import Start from '@/components/Course/start/Started'
import Less from '@/components/Course/less/Less'
import Bootstrap from '@/components/Course/bootstrap/Bootstrap'
import NodeJs from '@/components/Course/node/Node'
import React from '@/components/Course/react/React'
import Angular from '@/components/Course/angular/Angular'
import Vuejs from '@/components/Course/vue/Vue'
import Wx from '@/components/Course/wx/Wx'
import Js from '@/components/Course/js/Js'
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
      children:[
        {
          path:'start',
          name:'新手入门',
          component:Start
        },
        {
          path:'less',
          name:'less实战',
          component:Less
        },
        {
          path:'bootstrap',
          name:'bootstrap实战',
          component:Bootstrap
        },
        {
          path:'js',
          name:'原声js',
          component:Js
        },
        {
          path:'nodejs',
          name:'nodejs实战',
          component:NodeJs
        },
        {
          path:'react',
          name:'react实战',
          component:React
        },
        {
          path:'angular',
          name:'angular实战',
          component:Angular
        },
        {
          path:'wx',
          name:'微信小程序实战',
          component:Wx
        },
        {
          path:'vue',
          name:'vue实战',
          component:Vuejs
        },
      ]
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
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})
