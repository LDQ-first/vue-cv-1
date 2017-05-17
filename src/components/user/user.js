

import ResetPassword from '../resetPassword/resetPassword.vue'
import UploadAvatar from '../uploadAvatar/uploadAvatar.vue'
import bus from '../../lib/bus.js'


export default {
    name: 'user',
    data() {
        return {
            uploadAvatarvisible: false,
            selected: 'user'
        }
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
        }
    },
    methods: {
        showResetPassword() {
            bus.$emit('showResetPassword', this.user.email);
        },
        uploadAvatar(selected) {
            bus.$emit('readSelected', selected);
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