<template>
    <div>
        <form @submit.prevent="signIn">
            <div class="row">
                <label>用户名</label>
                <input type="text" v-model="formData.username" required>
            </div>
            <div class="row">
                <label>密码</label>
                <input type="password" v-model="formData.password" required>
            </div> 
            <div class="actions">
                <span class="errorMessage">{{errorMessage}}</span>
                <input type="submit" class="submit" value="提交">
            </div>    
        </form>
    </div>
</template>

<script>
    import '../../assets/dialog.css'
    import './SignInForm.scss'
    import SignInForm from './SignInForm.js'
    export default SignInForm 
</script>
