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

       <section class="info">
           <span class="infoTitle">个人博客/网站</span>
           <span class="infoContent">
               <input type="text"  :value="userSite" @input="changeUserSite('userSite',$event.target.value)">
           </span>
       </section>

       <section class="info">
           <span class="infoTitle">联系方式</span>
           <span class="infoContent contacts" v-for="(contact, index) in resume.contacts">
               <span class="contact">{{contact.contact}}</span>
               <span class="content">{{contact.content}}</span>
           </span>
       </section>


       <section class="info">
           <span class="infoTitle">补充</span>
           <span class="infoContent">
               <textarea class="replenish" :value="resume.others.replenish"></textarea>
           </span>
       </section>

    </div>
</template>

<script>
    import './user.scss'
    import user from './user.js'
    export default user
</script>