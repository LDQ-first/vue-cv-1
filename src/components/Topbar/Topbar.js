import MyDialog from '../MyDialog/MyDialog.vue'
import SignUpForm from '../SignUpForm/SignUpForm.vue'
import SignInForm from '../SignInForm/SignInForm.vue'
import EmailVerify from '../emailVerify/emailVerify.vue'
import ResetPassword from '../resetPassword/resetPassword.vue'
import VerifyEmail from '../verifyEmail/verifyEmail.vue'
import AV from '../../lib/leancloud'


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
        signUp(user) {
            this.signUpDialogVisible = false;
            this.signInDialogVisible = false;
            this.emailVerifyVisible = true;
        },
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
        }
    },
    components: {
        MyDialog,
        SignUpForm,
        SignInForm,
        EmailVerify,
        ResetPassword,
        VerifyEmail
    }
}