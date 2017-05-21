/*根级别的 action*/
import AV from '../lib/leancloud'
import objectPath from 'object-path'
import bus from '../lib/bus.js'
import changeState from '../lib/changeState.js'

export default () => {
    return {
        uploadImg(context, {input, path, field, i, ikey}){
            const localFile = input.files[0];
            const file = new AV.File(localFile.name, localFile);
            const loader =  document.querySelector(`.loader-${field}-${i}-${ikey}`);
            loader.style.display = 'inline-block';
          //  console.log(localFile);
          //   console.log(file);
            file.save({
                onprogress:function (e)  {             
                    bus.$emit('imgLoading', e.percent, field, i, ikey);
                },
            }).then(function(file) {
                let Url = file.url();
                let url = file.thumbnailURL(300,400);
                const textarea = document.querySelector(`.text-${field}-${i}-${ikey}`);
                // 文件保存成功
               /* console.log(file.id);*/
                const img = `<div class="imgWrapper">
                            <img class="smallImg" src="${url}" title="${localFile.name}" alt="${localFile.name}">
                        <a class="bigImg" href="${Url}" target="new">点击看大图</a>
                      </div>`;

                console.log(img);
                console.log(textarea);

                textarea.value += '\n' + img + '\n';


                let value = textarea.value;
                changeState(path, value);
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