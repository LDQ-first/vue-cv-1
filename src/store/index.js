/* 我们组装模块并导出 store 的地方*/
import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'
import AV from '../lib/leancloud'
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
        }
    },
    mutations: {
        switchTab(state, playload) {
            state.selected = playload;
        },
        /*initState(state, playload) {
            Object.assign(state, playload);
        },*/
        setUser(state, playload) {
            Object.assign(state.user, playload);
            console.log(state.user);
        },
        saveResume(state, {path, value}) {
            objectPath.set(state, path, value);
            var SaveObject = AV.Object.extend('SaveObject');
            var saveObject = new SaveObject();

            var acl = new AV.ACL();
            acl.setReadAccess(AV.User.current(), true);
            acl.setWriteAccess(AV.User.current(), true);

            saveObject.set('content', state);
            saveObject.setACL(acl);
            saveObject.save().then((todo) => {
                console.log(todo.id);
                state.id = todo.id;
                console.log(state.id);
                console.log('保存成功');
            }, (error) => {
                alert('保存失败');
            })
        },
        updateResume(state, {path, value}) {
            objectPath.set(state, path, value);
            var todo = AV.Object.createWithoutData('SaveObject', state.id);
            todo.set('content', state);
            todo.save().then(() => {
                console.log('update success');
            }, (error) => {
                console.log('update fail');
            });
        },
        fetchResume(state) {
            if (state.user.id) {
                var query = new AV.Query('SaveObject');
                query.find().then((todo) => {
                    Object.assign(state, todo[0].attributes.content);
                    state.id = todo[0].id;
                }, (error) => {
                    console.log('fetch fail');
                })
            }
        },
        removeResume(state, defaultState) {
            Object.assign(state, defaultState);
            state.user.id = '';
            state.user.username = '';  
            localStorage.setItem('user', '');
        },
        deleteResumeField(state,{ field, i }) {
            objectPath.get(state.resume,field).splice(i,1);
        }
    }
})
