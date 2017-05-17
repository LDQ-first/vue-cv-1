/*根级别的 mutation*/
import AV from '../lib/leancloud'
import objectPath from 'object-path'


export default () => {
    return {
        /*initState(state, payload){
            Object.assign(state, payload);
        },*/
        editResume(state, {path, value}){
            console.log( {path, value});
            objectPath.set(state, path, value);
        },
        switchTab(state, playload) {
            state.selected = playload;
        },
        setUser(state, user) {
            Object.assign(state.user, user);
            console.log(state.user);
        },
        saveResume(state, {path, value}) {
            objectPath.set(state, path, value);
            console.log(state);
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
            console.log(state);
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
            for(let i in state.user) {
                state.user[i] = '';
            }
            localStorage.setItem('user', '');
        },
        deleteResumeField(state, { field, i }) {
            objectPath.get(state.resume, field).splice(i, 1);
        },
        addResumeField(state, field) {
            const resumeField = objectPath.get(state.resume, field);
            if (resumeField instanceof Array) {
                let newField = JSON.parse(JSON.stringify(resumeField[0]));
                console.log(newField);
                for (let i in newField) {
                    newField[i] = '';
                }
                console.log(newField);
                resumeField.push(newField);
            }
        },
    }
}