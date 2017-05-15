<template>
    <div id="topbar">
        <div class="wrapper" :style="{background:skinColor}">
            <span class="logo">Resumer</span>
            <div class="actions">
                <!--<div class="menu">
                    <a class="button" v-link="{path: '/resumePreview'}">简历</a>
                    <a class="button" v-link="{path: '/user'}">个人主页</a>
                </div>-->
                <div class="menu">
                    <router-link class="button" to="{path: '/resumePreview'}">简历</router-link>
                    <router-link class="button" to="{path: '/user'}">个人主页</router-link>
                </div>

                <div v-if="logined" class="userActions">
                    <span class="welcome">你好, {{user.username}}</span>
                    <a href="javascript:;" class="button" @click.prevent="signOut">登出</a>
                </div>
                <div v-else class="userActions">
                    <a href="javascript:;" class="button primary" @click.prevent="signUpDialogVisible = true">注册</a>
                    <a href="javascript:;" class="button" @click.prevent="signInDialogVisible = true">登录</a>
                </div>
            </div>
            <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
                <SignUpForm @success="signUp($event)" />
            </MyDialog>
            <MyDialog title="登录" :visible="signInDialogVisible" @close="signInDialogVisible = false">
                <SignInForm @success="signIn($event)" @resetPassword="resetPassword()" @verifyEmail="verifyEmail()"/>
            </MyDialog>
            <MyDialog title="邮箱验证" :visible="emailVerifyVisible" @close="emailVerifyVisible = false">
                <EmailVerify></EmailVerify>
            </MyDialog>
            <MyDialog title="重置密码" :visible="resetPasswordVisible" @close="resetPasswordVisible = false">
                <ResetPassword @returnSignIn="returnSignIn"/>
            </MyDialog>
            <MyDialog title="验证邮箱" :visible="verifyEmailVisible" @close="verifyEmailVisible = false">
                <VerifyEmail @returnSignIn="returnSignIn"/>
            </MyDialog>


        </div>
    </div>
</template>

<script>
    import './Topbar.scss'
    import Topbar from './Topbar.js'
    export default Topbar
   
</script>

