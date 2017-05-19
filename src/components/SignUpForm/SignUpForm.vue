<template>
    <div>
        <form @submit.prevent="signUp">
            <div class="row">
                <label>用户名</label>
                <input type="text" v-model="formData.username" required>
            </div>
            <div class="row">
                <label>邮箱</label>
                <input type="text" v-model="formData.email" required>
            </div>
            <div class="row">
                <label>密码</label>
                <input type="password" v-model="formData.password" required>
            </div> 
            <div class="actions">
                <!--<input type="submit" class="submit" value="提交">-->
                <Buttons class="submit" type="submit" text="提交"></Buttons>
            </div>    
             <span class="errorMessage">{{errorMessage}}</span>
        </form>
    </div>
</template>

<script>
    import '../../assets/dialog.css'
    import './SignUpForm.scss'
    import SignUpForm from './SignUpForm.js'
    export default SignUpForm
</script>

