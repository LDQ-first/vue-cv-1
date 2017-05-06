/* 我们组装模块并导出 store 的地方*/
import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'
import AV from '../lib/leancloud'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selected: 'profile',
        user: {
            id: '',
            username: ''
        },
        resume: {
            config: [
                { field: 'profile', icon: 'id' },
                { field: 'workHistory', icon: 'work' },
                { field: 'education', icon: 'book' },
                { field: 'projects', icon: 'heart' },
                { field: 'awards', icon: 'cup' },
                { field: 'contacts', icon: 'phone' },
                { field: 'others', icon: 'add' }
            ],
            profile: {
                name: '刘某某',
                city: '广州',
                title: '前端学习者',
                birthday: '1995-01-01'
            },
            workHistory: [
                {
                    company: '鸡飞狗跳公司', content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
                我的主要工作如下:
                1. 完成既定产品需求。
                2. 修复 bug。`
                },
                {
                    company: '狗急跳墙责任有限公司', content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
                我的主要工作如下:
                1. 完成既定产品需求。
                2. 修复 bug`
                },
            ],
            education: [
                { school: '黄志诚警官大学', content: '本科' },
                { school: '韩琛古惑仔高中' },
            ],
            projects: [
                { name: 'project A', content: '文字' },
                { name: 'project B', content: '文字' },
            ],
            awards: [
                { name: 'awards A', content: '文字' },
                { name: 'awards B', content: '文字' },
            ],
            contacts: [
                { contact: 'phone', content: '13812345678' },
                { contact: 'qq', content: '12345678' },
            ],
            others: [
                { replenish: '' }
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
    },
    mutations: mutations()
})
