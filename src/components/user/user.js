

import ResetPassword from '../resetPassword/resetPassword.vue'
import bus from '../../lib/bus.js'

export default {
    name: 'user',
    computed: {
        skinColor() {
            return this.$store.state.skinColor;
        },
        user() {
            return this.$store.state.user;
        },
        resume() {
            return this.$store.state.resume;
        }
    },
    methods: {
        showResetPassword() {
            bus.$emit('showResetPassword', this.user.email);
        }
    },
    components: {
        ResetPassword
    } 
}