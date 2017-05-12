<template>
    <div>
        <form @submit.prevent="verifyEmail(email)">
             <div class="row">
                <label>邮箱</label>
                <input type="text" v-model="email" required>
            </div>
            <div class="actions">
                <span v-if="isSendSuccess"><a href="javascript:;" target="new" class="email" @click="skip($event.target, email)">{{email}}</a></span>
                <span class="message">{{message}}</span>
                <input type="submit" class="submit" value="提交">
            </div>
        </form>
    </div>
</template>

<script>
    import '../../assets/dialog.css'
    import './verifyEmail.scss'
    import verifyEmail from './verifyEmail.js'
    export default verifyEmail
</script>