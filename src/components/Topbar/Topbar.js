import MyDialog from '../MyDialog/MyDialog.vue'
import SignUpForm from '../SignUpForm/SignUpForm.vue'
import SignInForm from '../SignInForm/SignInForm.vue'
import AV from '../../lib/leancloud'


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