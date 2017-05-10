/*根级别的 action*/
import AV from '../lib/leancloud'
import objectPath from 'object-path'


export default () => {
    return {
        uploadImg(context, {input, path, n, i}){
            const localFile = input.files[0];
            const file = new AV.File(localFile.name, localFile);
            const subitem = document.querySelectorAll(".panels li")[n]
                                    .querySelectorAll('.subitem')[i];
            const loader =  subitem.querySelector('.loader');
            loader.style.display = 'inline-block';
            /*console.log(loader);*/
            file.save({
                onprogress:function (e)  {
                    /*console.log(e);
                    console.log(e.loaded, e.total, e.percent);*/                
                    const loading = subitem.querySelector('.loading');
                    const loadingValue = subitem.querySelector('.loading-value');
                      loading.style.width = (e.percent / 100).toFixed(2) * window.getComputedStyle(loader).width.replace(/px/,'') + 'px';
                    loadingValue.innerText = e.percent.toFixed(2) + '%';

                },
            }).then(function(file) {

                var url = file.thumbnailURL(300,400);
                const textarea = subitem.querySelector('.textarea');;
                // 文件保存成功
                console.log(file.url());
                console.log(file.id);
                url = `<img src="${url}" title="${localFile.name}" alt="${localFile.name}">`;
                console.log(url);
                console.log(textarea);

                textarea.value += '\n' + url + '\n';


                let value = textarea.value;
               /* console.log(path);
                console.log(value);*/
                context.state.user.id ? (
                    context.state.id ? 
                    context.commit('updateResume', {
                        path,
                        value
                    }):
                    context.comit('saveResume', {
                        path,
                        value
                    })
                ): context.commit('editResume', {
                        path,
                        value
                })
                setTimeout(()=>{
                    loader.style.display = 'none';
                },3000)


            }, function(error) {
                // 异常处理
                console.error(error);
            });
        }
    }
}