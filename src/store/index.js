import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'
import AV from '../lib/leancloud'
import mutations from './mutations'
import actions from './actions.js'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selected: 'profile',
        user: {
            id: '',
            username: '',
            email: '',
        },
        resume: {
            config: [
                { field: 'profile', icon: 'id' },
                { field: 'projects', icon: 'heart' },
                { field: 'education', icon: 'book' },
                { field: 'workHistory', icon: 'work' },
                { field: 'awards', icon: 'cup' },
                { field: 'contacts', icon: 'phone' },
                { field: 'others', icon: 'add' }
            ],
            profile: {
                name: '刘德铨',
                city: '广州',
                title: '前端学习者, 大三在校生',
                jobIntension: '前端工程师',
                birthday: '1995-08-25',
                userSite: 'https://github.com/LDQ-first',
            },
            projects: [
                { name: 'Vue版CNode社区', content: "<a href='https://ldq-first.github.io/vue-CNode-1/dist/' target='new'>Vue版CNode社区</a>" },
                { name: 'Vue版简历编辑器', content: "<a href='https://ldq-first.github.io/vue-cv-1/dist/#/' target='new'>Vue版简历编辑器</a>" },
                { name: 'Vue版动态简历', content: "<a href='https://ldq-first.github.io/vue-animating-resume-1/dist/' target='new'>Vue版动态简历</a>" },
                { name: 'React版动态简历', content: "<a href='https://ldq-first.github.io/react-animating-resume-1/build/' target='new'>React版动态简历</a>" },
                
            ],
            education: [
                { school: '广东工业大学', content: '本科 英语四级' },
            ],
            workHistory: [
                {
                    company: '', content: ` `
                },
            ],
            awards: [
                { name: '', content: '' },
                { name: '', content: '' },
            ],
            contacts: [
                { contact: 'phone', content: '18826136763' },
                { contact: 'qq', content: '2320975287' },
            ],
            others: [
                { replenish: `<pre>HTML5       熟悉  <progress value="60" max="100"></progress>
CSS3        熟悉  <progress value="60" max="100"></progress>
SCSS        熟悉  <progress value="60" max="100"></progress>
JavaScript  熟悉  <progress value="50" max="100"></progress>
jQuery      熟悉  <progress value="70" max="100"></progress>
Vue         熟悉  <progress value="40" max="100"></progress>
React       了解  <progress value="20" max="100"></progress>
Webpack     了解  <progress value="35" max="100"></progress>  
</pre>` }
            ]
        },
        showSkin: false,
        skinColor: '#42B983',
        skinColors: ['#FFF',
        '#6CBCF3 linear-gradient(135deg, #6CBCF3, #0093F8)',
        '#FFB771 linear-gradient(135deg, #FFB771, #FF7E00)', 
        '#5BDEA3 linear-gradient(135deg, #5BDEA3, #42B983)', 
        '#E4637D linear-gradient(135deg, #E4637D, #E4002E)',
        '#A86DE4 linear-gradient(135deg, #A86DE4, #8D36E4)',
        '#F381ED linear-gradient(135deg, #F381ED, #F33AE9)',
        '#F6CB60 linear-gradient(135deg, #F6CB60, #F7AF00)',
        '#4CB9B5 linear-gradient(135deg, #4CB9B5, #399CA0)',
        ],
        resumeAvatarSrc: '',
        userAvatarSrc: '',
    },
    mutations: mutations(),
    actions: actions()
})
