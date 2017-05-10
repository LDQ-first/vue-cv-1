import AV from '../../lib/leancloud'
import getErrorMessage from '../../lib/getErrorMessage'
import getAVUser from '../../lib/getAVUser'


export default {
    name: 'SignUpForm',
    data() {
        return {
            formData: {
                username: '',
                password: ''
            },
            errorMessage: ''
        }
    },
    methods: {
        signUp() {
            let {username, password} = this.formData;
            var user = new AV.User();
            user.setUsername(username);
            user.setPassword(password);
            user.signUp().then(() => {
                console.log(this.name);
                this.$emit('success', getAVUser());
            }, (error) => {
                this.errorMessage = getErrorMessage(error);
            })
        }
    }
}