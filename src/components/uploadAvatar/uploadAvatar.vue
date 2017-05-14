<template>
    <div class="AvatarWrapper" v-if="visible">
        <div class="avatar">
            <header>
                上传头像
                <span class="close" @click="close"></span>
            </header>
            <div id="imgSide">
                <div class="control">
                    <canvas id="getImg" :style="getImgStyleObject"></canvas>
                    <p>
                        <canvas id="edit" :style="editStyleObject"
                         @mousedown="dragDown"></canvas>
                        <canvas id="clip" :style="clipStyleObject"></canvas> 
                    </p>
                </div>
                <div class="upload">
                    <a href="javascript:;" class="uploadImg">上传头像
                        <input id="photoFileUpload" type="file" accept="image/jpg, image/png, image/jpeg, image/gif"
                        @change="uploadImg($event.target) ">
                    </a>
                </div>
            </div>
            <div id="avatarSide">
                <p>
                    <span class="showEdit" :style="showEditStyleObject"></span>
                    <span class="showPic"><img src=""></span>
                </p>
                <button class="saveAvatar" @click="savaAvatar">保存</button>
            </div>
        </div>
    </div>
</template>

<script>
    import './uploadAvatar.scss'
    import uploadAvatar from './uploadAvatar.js'
    export default uploadAvatar
</script>