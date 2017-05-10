<template>
     <div class="imgCt">
        <a href="javascript:;"  class="uploadImg">上传图片
            <input id="photoFileUpload" type="file" accept="image/jpg, image/png, image/jpeg, image/gif" 
            @change="uploadImg($event.target, `resume.${field}.${i}.${ikey}`, n, i)" @click="reset(n,i)">
        </a>
        <span class="loader">
            <span class="loading">
                <span class="loading-value"></span>
            </span>
        </span>
    </div>
</template>

<script>
    import './uploadImg.scss'
    import uploadImg from './uploadImg.js'
    export default uploadImg
</script>