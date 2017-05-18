

import ResetPassword from '../resetPassword/resetPassword.vue'
import UploadAvatar from '../uploadAvatar/uploadAvatar.vue'
import bus from '../../lib/bus.js'
import changeState from '../../lib/changeState.js'

export default {
    name: 'user',
    data() {
        return {
            uploadAvatarvisible: false,
            selected: 'user',
            busEvent: 'userAvatar',
        }
    },
    created() {
        bus.$on('userAvatar', (src) => {
            changeState('userAvatarSrc', src);
        })
    },
    computed: {
        skinColor() {
            return this.$store.state.skinColor;
        },
        user() {
            return this.$store.state.user;
        },
        resume() {
            return this.$store.state.resume;
        },
        userAvatarSrc() {
            return this.$store.state.userAvatarSrc;
        }
    },
    methods: {
        showResetPassword() {
            bus.$emit('showResetPassword', this.user.email);
        },
        uploadAvatar(selected, busEvent) {
            bus.$emit('readSelected', selected, busEvent);
            this.uploadAvatarvisible = true;
        },
        closeAvatar() {
            this.uploadAvatarvisible = false;
        },

    },
    components: {
        ResetPassword,
        UploadAvatar
    } 
}