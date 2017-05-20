<template>
    <div id="user" :style="{background:skinColor}">
        <canvas  id="userParticles"></canvas>
        <section class="info nav after" :class="{active:isActive}" @click="isActive = !isActive">
          <!-- <span class="infoTitle">头像</span>-->
           <span class="infoContent avatar">
               <!--<Buttons class="uploadAvatar" @click="uploadAvatar(selected, busEvent)" text="上传用户头像"></Buttons>-->
               <Buttons class="uploadAvatarBtn" @click="uploadAvatar(selected, busEvent)" title="点击修改头像">
                   <img :src="userAvatarSrc" class="userAvatarSrc">
               </Buttons>
               <!--<img :src="userAvatarSrc" class="userAvatarSrc">-->
               <UploadAvatar :visible="uploadAvatarvisible" @close="closeAvatar" :parent="selected"></UploadAvatar>
           </span>
           <div class="infos">
                <section class="info user">
                    <span class="infoTitle">用户名</span>
                    <span class="infoContent">{{user.username || '未登录'}} </span>
                </section>
                <section class="info name">
                    <span class="infoTitle">名字</span>
                    <span class="infoContent">{{resume.profile.name || '未填'}} </span>
                </section>
                <section class="info city">
                    <span class="infoTitle">所在地</span>
                    <span class="infoContent">{{resume.profile.city || '未填'}} </span>
                </section>
                <section class="info title">
                    <span class="infoTitle">身份</span>
                    <span class="infoContent">{{resume.profile.title || '未填'}} </span>
                </section>
           </div>
        </section>

       <section class="info item jobIntension">
            <span class="infoTitle">求职意向</span>
            <span class="infoContent">{{resume.profile.jobIntension || '未填'}} </span>
        </section>
       
       <section class="info item">
           <span class="infoTitle">邮箱</span>
           <span class="infoContent">{{user.email || '没有邮箱' }}</span>
       </section>

       <section class="info item" v-if="user.email">
           <span class="infoTitle">密码</span>
           <span class="infoContent">
               <button class="button" @click="showResetPassword">发送密码重置邮件</button>
           </span>
       </section>

       <section class="info item">
           <span class="infoTitle">个人博客/网站</span>
           <span class="infoContent">
               <a :href="userSite" target="new" style="margin: 10px 0; cursor: pointer">{{userSite || '未填'}}</a>
           </span>
       </section>

       <section class="info item">
           <span class="infoTitle">联系方式</span>
           <span class="infoContent contacts" v-for="(contact, index) in resume.contacts">
               <span class="contact">{{contact.contact || '暂缺'}}</span>
               <span class="content">{{contact.content || '暂缺'}}</span>
           </span>
       </section>


       

    </div>
</template>

<script>
    import './user.scss'
    import user from './user.js'
    export default user
</script>