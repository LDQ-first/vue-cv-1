<template>
    <div id="topbar" :style="{background:skinColor}">
        <div class="wrapper" >
            <span class="logo">Resumer</span>
            <div class="actions">
                <div class="menu">
                    <span @click="handleSelect(index)" 
                    v-for="(route, index) in routes" :key="index" v-if="index == 1" 
                    :style="{color: (skinColor.replace(/\sl[^\)]+\)/, '') === '#FFF' ? '#000' : skinColor.replace(/\sl[^\)]+\)/, ''))}" 
                    :title="route.meta.title">
                        <svg class="icon" :class="{active: activeIndex === index}">
                            <use xlink:href="#icon-resumer"></use>
                        </svg>
                    </span>

                    <span @click="handleSelect(index)" 
                    v-for="(route, index) in routes" :key="index" v-if="index == 2&&!userAvatarSrc" 
                    :style="{color: (skinColor.replace(/\sl[^\)]+\)/, '') === '#FFF' ? '#000' : skinColor.replace(/\sl[^\)]+\)/, ''))}" 
                    :title="route.meta.title">
                        <svg class="icon" :class="{active: activeIndex === index}">
                            <use xlink:href="#icon-user"></use>
                        </svg>
                    </span>
                    
                    <span v-if="index == 2&&userAvatarSrc" v-for="(route, index) in routes" class="userAvatarSrc" 
                         @click="handleSelect(index)" 
                         :key="index" 
                        :class="{active: activeIndex === index}" :title="route.meta.title">
                        <img :src="userAvatarSrc">
                    </span>
                </div>
                
                <div v-if="logined" class="userActions">
                    <span class="welcome">你好 {{user.username}}</span>
                    <Buttons @click="signOut" text="登出"></Buttons>
                </div>
                <div v-else class="userActions">
                    <Buttons class="register" @click="signUpDialogVisible = true" text="注册"></Buttons>
                    <Buttons class="entry" @click="signInDialogVisible = true" text="登录"></Buttons>
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
            <MyDialog title="重置密码" :visible="resetPasswordVisible" @close="resetPasswordVisible = false" >
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

