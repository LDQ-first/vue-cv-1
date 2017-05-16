import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)



import resumePreview from '@/components/resumePreview/resumePreview.vue'
import user from '@/components/user/user.vue'


const routes = [ {
    path: '/',
    component: resumePreview,
  },
  {
    path: '/resumePreview',
    name: 'resumePreview',
    component: resumePreview,
    meta: {
      title: '简历'
    }
  },
  {
    path: '/user',
    name: 'user',
    component: user,
    meta: {
      title: '个人主页'
    }
  }
];

const router = new Router({
    mode: 'history',
    routes
})

export  {
    router,
    routes
}
