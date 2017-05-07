/*根级别的 mutation*/
import AV from '../lib/leancloud'
import objectPath from 'object-path'


export default () => {
    return {
        /*initState(state, payload){
            Object.assign(state, payload);
        },*/
        editResume(state, {path, value}){
            objectPath.set(state, path, value);
        },
        switchTab(state, playload) {
            state.selected = playload;
        },
        setUser(state, playload) {
            Object.assign(state.user, playload);
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
            state.user.id = '';
            state.user.username = '';
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
        changeSkinColor(state, color) {
            state.skinColor = color;
        },
        showSkin(state) {
            state.showSkin = !state.showSkin;
        },
        uploadImg(state ,input){
            var localFile = input.files[0];
            var file = new AV.File(localFile.name, localFile);
            
            file.save().then(function(file) {
                var url = file.thumbnailURL(300,400);
                const textarea = input.parentNode.previousSibling.previousSibling;
                // 文件保存成功
                console.log(file.url());
                console.log(file.id);
                url = '<img src="' + url +'">';
                console.log(url);
                console.log(textarea);

                textarea.value += '\n' + url + '\n';
                console.log(textarea.value);
                console.log(this.store.state);
            }, function(error) {
                // 异常处理
                console.error(error);
            });
        }
    }
}