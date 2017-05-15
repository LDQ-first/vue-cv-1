import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import resumePreview from '@/components/resumePreview/resumePreview.vue'
import user from '@/components/user/user.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/resumePreview',
      name: 'resumePreview',
      component: resumePreview
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
