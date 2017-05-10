import AV from '../../lib/leancloud'
import getErrorMessage from '../../lib/getErrorMessage'
import getAVUser from '../../lib/getAVUser'


export default {
    name: 'SignInForm',
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
        signIn() {
            let {username, password} = this.formData;
            AV.User.logIn(username, password).then(() => {
                this.$emit('success', getAVUser());
            }, (error) => {
                this.errorMessage = getErrorMessage(error);
            })
        }
    }
}