<template>
    <div id="topbar">
        <div class="wrapper" :style="{background:skinColor}">
            <span class="logo">Resumer</span>
            <div class="actions">
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
                <SignUpForm @success="signIn($event)" />
            </MyDialog>
            <MyDialog title="登录" :visible="signInDialogVisible" @close="signInDialogVisible = false">
                <SignInForm @success="signIn($event)"/>
            </MyDialog>
        </div>
    </div>
</template>

<script>
    import './Topbar.scss'
    import Topbar from './Topbar.js'
    export default Topbar
   
</script>

