<template>
    <div id="topbar">
        <div class="wrapper">
            <span class="logo">Resumer</span>
            <div class="actions">
                <div v-if="logined" class="userActions">
                    <span>你好, {{user.username}}</span>
                    <a href="#" class="button">登出</a>
                </div>
                <div v-else class="userActions">
                    <a href="#" class="button primary" @click.prevent="signUpDialogVisible = true">注册</a>
                    <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
                        <SignUpForm @success="login($event)" />
                    </MyDialog>
                    <a href="#" class="button">登录</a>
                </div>

                <button class="button primary">保存</button>
                <button class="button">预览</button>
            </div>
        </div>
    </div>
</template>

<script>
    import MyDialog from './MyDialog.vue';
    import SignUpForm from './SignUpForm';

    export default {
        name: 'Topbar',
        data() {
            return {
                signUpDialogVisible: false
            }
        },
        computed: {
            user() {
                return this.$store.state.user;
            },
            logined() {
                return this.user.id;
            }
        },
        methods: {
            login(user) {
                this.signUpDialogVisible = fase;
                this.$store.commit('setUser', user);
            }
        },
        components: {
            MyDialog,
            SignUpForm
        }
    }
</script>

<style scoped lang="scss">
#topbar {
        background: #FFF;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
        .wrapper {
            min-width: 1024px;
            max-width: 1440px;
            margin: 0 auto;
            height: 64px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 16px;
        }
        .logo {
            font-size: 24px;
            color: #000;
        }
        .button {
            width: 72px;
            height: 32px;
            border: none;
            cursor: pointer;
            font-size: 18px;
            background: #DDD;
            color: #222;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            vertical-align: center;
            &:hover {
                box-shadow: 1px 1px 1px hsla(0, 0, 0, 0.50);
            }
            &.primary {
                background: #02af5f;
                color: #FFF;
            }
        }
        .actions {
            display: flex;
            .userActions {
                margin-right: 3em;
            }
        }
}  
</style>