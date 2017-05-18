<template>
    <div id="user" :style="{background:skinColor}">
       <section class="info">
           <span class="infoTitle">用户名</span>
           <span class="infoContent">{{user.username || '未登录'}} </span>
       </section>

       <section class="info">
           <span class="infoTitle">名字</span>
           <span class="infoContent">{{resume.profile.name || '未填'}} </span>
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
               <a :href="userSite" target="new" style="margin: 10px 0; cursor: pointer">{{userSite || '未填'}}</a>
               <!--<input type="text"  :value="userSite" @input="changeUserSite('userSite',$event.target.value)">-->
           </span>
       </section>

       <section class="info">
           <span class="infoTitle">联系方式</span>
           <span class="infoContent contacts" v-for="(contact, index) in resume.contacts">
               <span class="contact">{{contact.contact || '暂缺'}}</span>
               <span class="content">{{contact.content || '暂缺'}}</span>
           </span>
       </section>


       <section class="info">
           <span class="infoTitle">补充</span>
           <span class="infoContent">
               <div class="replenish">{{replenish}}</div>
           </span>
       </section>

    </div>
</template>

<script>
    import './user.scss'
    import user from './user.js'
    export default user
</script>