<template>
    <div class="emailVerify">
        <h3 class="title">注册成功</h3>
        <p class="tip">点击邮箱进行验证</p>
        <!--<p class="sendEmail" @click="sendEmail(email)">发送邮件</p>-->
        <span><a href="javascript:;" target="new" class="email" @click="skip($event.target, email, hash)">{{email}}</a></span>
        <p class="message" v-show="isVerifySuccess">验证成功</p>
    </div>
</template>

<script>
    import './emailVerify.scss'
    import emailVerify from './emailVerify.js'
    export default emailVerify
</script>