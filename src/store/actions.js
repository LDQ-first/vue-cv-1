/*根级别的 action*/
import AV from '../lib/leancloud'
import objectPath from 'object-path'


export default () => {
    return {
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