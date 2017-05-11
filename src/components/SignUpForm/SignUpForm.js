import AV from '../../lib/leancloud'
import getErrorMessage from '../../lib/getErrorMessage'
import getAVUser from '../../lib/getAVUser'
import bus from '../../lib/bus.js'

export default {
    name: 'SignUpForm',
    data() {
        return {
            formData: {
                username: '',
                email: '',
                password: ''
            },
            errorMessage: ''
        }
    },
    methods: {
        signUp() {
            let {username, password, email} = this.formData;
            var user = new AV.User();
            user.setUsername(username);
            user.setPassword(password);
            user.setEmail(email);
            user.signUp().then((loginedUser) => {
                const user = Object.assign(getAVUser(), {  email: loginedUser._serverData.email });               
                this.$emit('success', user);
                bus.$emit('email', email);
            }, (error) => {
                this.errorMessage = getErrorMessage(error);
            })
        }
    }
}