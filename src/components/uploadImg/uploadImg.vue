<template>
     <div class="imgCt">
       <Buttons class="uploadImg" :text="text">
            <input id="photoFileUpload" type="file" accept="image/jpg, image/png, image/jpeg, image/gif" 
            @change="uploadImg($event.target, `resume.${field}.${i}.${ikey}`,field, i, ikey)" @click="reset(i, field, ikey)">
       </Buttons>
        <span :class="`loader-${field}-${i}-${ikey}`" class="loader">
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