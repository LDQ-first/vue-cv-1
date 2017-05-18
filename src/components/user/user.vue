<template>
    <div id="user" :style="{background:skinColor}">
       <!--<div>user</div>
       <div>信息</div>
       <div>联系方式</div>-->
       <section class="info">
           <span class="infoTitle">用户名</span>
           <span class="infoContent">{{user.username || '未登录'}} </span>
       </section>
       
       <section class="info">
           <span class="infoTitle">邮箱</span>
           <span class="infoContent">{{user.email || '没有邮箱' }}</span>
       </section>

       <section class="info" v-if="user.email">
           <span class="infoTitle">密码</span>
           <span class="infoContent">
               <button class="button" @click="showResetPassword">发送密码重置邮件</button>
           </span>
       </section>

       <section class="info">
           <span class="infoTitle">头像</span>
           <span class="infoContent">
               <button class="button" @click="uploadAvatar(selected, busEvent)">上传用户头像</button>
               <img :src="userAvatarSrc" class="userAvatarSrc">
               <UploadAvatar :visible="uploadAvatarvisible" @close="closeAvatar" :parent="selected"></UploadAvatar>
           </span>
       </section>

    </div>
</template>

<script>
    import './user.scss'
    import user from './user.js'
    export default user
</script>