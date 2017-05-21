<template>
    <transition name="avatar" >
        <div class="AvatarWrapper" v-if="visible">
            <div class="avatar">
                <header>
                    上传头像
                    <Close @close="close"></Close>
                </header>
                <div id="imgSide">
                    <div class="control">
                        <canvas id="getImg"></canvas>
                        <div>
                            <canvas id="edit" :style="editStyleObject"
                            @mousedown="dragDown"></canvas>
                            <canvas id="clip" :style="clipStyleObject"></canvas> 
                        </div>
                    </div>
                    <div class="upload">
                        <Buttons class="uploadImg" text="上传头像">
                            <input id="photoFileUpload" type="file" accept="image/jpg, image/png, image/jpeg, image/gif" 
                            @change="uploadImg($event.target)" >
                        </Buttons>
                    </div>
                    <div class="operate">
                        <Buttons class="saveAvatar" @click="savaAvatar" text="保存"></Buttons>
                        <input type="range"  value="1.0" min="0" max="3.0" step="0.01" class="changeScale" 
                        @mousemove="changeScale($event)" @mousedown="change = true" @mouseup="change = false"
                        @input="changeRange($event)" :style="RangeStyle">
                    </div>
                </div>
                <div id="avatarSide">
                    <p>
                        <span class="showEdit" :style="showEditStyleObject"></span>
                    </p>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import './uploadAvatar.scss'
    import uploadAvatar from './uploadAvatar.js'
    export default uploadAvatar
</script>