<template>
    <div>
        <form @submit.prevent="verifyEmail(email)">
             <div class="row">
                <label>邮箱</label>
                <input type="text" v-model="email" required>
            </div>
            <div class="actions">   
                <!--<span class="btn" @click="returnSignIn">返回登录</span>
                <input type="submit" class="submit" value="提交">-->
                <Buttons class="btn" @click="returnSignIn" text="返回登录"></Buttons>
                <Buttons class="submit" type="submit" text="提交"></Buttons>
            </div>
            <span class="message">{{message}}</span>
            <span class="email" v-if="isSendSuccess"><a href="javascript:;" target="new"  @click="skip($event.target, email)">{{email}}</a></span>
        </form>
    </div>
</template>

<script>
    import '../../assets/dialog.css'
    import './verifyEmail.scss'
    import verifyEmail from './verifyEmail.js'
    export default verifyEmail
</script>