<template>
    <div>
        <form @submit.prevent="signIn">
            <div class="row">
                <label>用户名/邮箱</label>
                <input type="text" v-model="formData.username" required>
            </div>
            <div class="row">
                <label>密码</label>
                <input type="password" v-model="formData.password" required>
            </div> 
            <div class="actions">
                <span class="resetPassword btn" v-show="showVerify(errorMessage)" @click="verifyEmail">验证邮箱地址</span>
                <span class="resetPassword btn" v-show="showRest(errorMessage)" @click="resetPassword">重置密码</span>       
               <!-- <input type="submit" class="submit" value="提交">-->
                <Buttons class="submit" type="submit" text="提交"></Buttons>
            </div>    
            <span class="errorMessage">{{errorMessage}}</span>
        </form>
    </div>
</template>

<script>
    import '../../assets/dialog.css'
    import './SignInForm.scss'
    import SignInForm from './SignInForm.js'
    export default SignInForm 
</script>
