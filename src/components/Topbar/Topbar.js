import MyDialog from '../MyDialog/MyDialog.vue'
import SignUpForm from '../SignUpForm/SignUpForm.vue'
import SignInForm from '../SignInForm/SignInForm.vue'
import EmailVerify from '../emailVerify/emailVerify.vue'
import ResetPassword from '../resetPassword/resetPassword.vue'
import VerifyEmail from '../verifyEmail/verifyEmail.vue'
import Buttons from '../button/button.vue'


import AV from '../../lib/leancloud'
import bus from '../../lib/bus.js'
import changeState from '../../lib/changeState.js'
import {router, routes} from '../../router/index.js'

export default {
    name: 'Topbar',
    props: ['defaultState'],
    data() {
        return {
            default: this.defaultState,
            signUpDialogVisible: false,
            signInDialogVisible: false,
            emailVerifyVisible: false,
            resetPasswordVisible: false,
            verifyEmailVisible: false,
            routes,
            activeIndex: 1,
            email: '',
        }
    },
    created() {
        this.defaultActiveIndex();
         bus.$on('showResetPassword', (email) => {
             this.resetPassword();
             bus.$emit('FillinEmail', email);
         })
         bus.$on('userAvatar', (src) => {
            changeState('userAvatarSrc', src);
        })
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
        },
        userAvatarSrc() {
            return this.$store.state.userAvatarSrc;
        }
    },
    methods: {
        signUp(user) {
            this.signUpDialogVisible = false;
            this.signInDialogVisible = false;
            this.emailVerifyVisible = true;

        },
        signIn(user) {
            this.signUpDialogVisible = false;
            this.signInDialogVisible = false;
            this.$store.commit('setUser', user);
            changeState('user', user );
            localStorage.setItem('user', JSON.stringify(user));
            this.$store.commit('fetchResume');
           
        },
        signOut() {
            AV.User.logOut();
            this.$store.commit('removeResume', this.default);
        },
        resetPassword() {
            console.log('resetPassword');
            this.signInDialogVisible = false;
            this.resetPasswordVisible = true;
        },
        verifyEmail() {
            console.log('verifyEmail');
            this.signInDialogVisible = false;
            this.verifyEmailVisible = true;
        },
        returnSignIn() {
            this.signInDialogVisible = true;
            this.verifyEmailVisible = false;
            this.resetPasswordVisible = false;
        },
        handleSelect(key) {
            this.activeIndex = key;
            bus.$emit('changeUrl', key);
        },
        defaultActiveIndex() {
            const path = this.$route.path;
            let i = 0;
            for(let route of routes) {
                if(path === route.path) {
                    this.activeIndex = i;
                }
                i++;
            }
         }
    },
    components: {
        MyDialog,
        SignUpForm,
        SignInForm,
        EmailVerify,
        ResetPassword,
        VerifyEmail,
        Buttons
    }
}