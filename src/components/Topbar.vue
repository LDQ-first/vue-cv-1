<template>
    <div id="topbar">
        <div class="wrapper" :style="{background:skinColor}">
            <span class="logo">Resumer</span>
            <div class="actions">
                <div v-if="logined" class="userActions">
                    <span class="welcome">你好, {{user.username}}</span>
                    <a href="#" class="button" @click.prevent="signOut">登出</a>
                </div>
                <div v-else class="userActions">
                    <a href="#" class="button primary" @click.prevent="signUpDialogVisible = true">注册</a>
                    <a href="#" class="button" @click.prevent="signInDialogVisible = true">登录</a>
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
    import MyDialog from './MyDialog.vue'
    import SignUpForm from './SignUpForm'
    import SignInForm from './SignInForm'
    import AV from '../lib/leancloud'

    export default {
        name: 'Topbar',
        props: ['defaultState'],
        data() {
            return {
                default: this.defaultState,
                signUpDialogVisible: false,
                signInDialogVisible: false
            }
        },
        computed: {
            user() {
                return this.$store.state.user;     
            },
            logined() {
                return this.user.id;
            },
            skinColor() {
                return this.$store.state.skinColor;
            }
        },
        methods: {
            signIn(user) {
                this.signUpDialogVisible = false;
                this.signInDialogVisible = false;
                this.$store.commit('setUser', user);
                this.$store.commit('fetchResume');
                localStorage.setItem('user', JSON.stringify(user));
            },
            signOut() {
                AV.User.logOut();
                this.$store.commit('removeResume', this.default);
            }
        },
        components: {
            MyDialog,
            SignUpForm,
            SignInForm
        }
    }
</script>

<style scoped lang="scss">
    #topbar {
        background: #FFF;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
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
            background: #6DCBA0;
            color: #222;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            vertical-align: center;
            box-shadow: 1px 1px 2px hsla(0, 0, 0, 0.50);
            &:hover {
                box-shadow: 1px 1px 10px hsla(0, 0, 0, 0.50);
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
                .welcome {
                    margin-right: 0.5em;
                }
            }
        }
    }
</style>