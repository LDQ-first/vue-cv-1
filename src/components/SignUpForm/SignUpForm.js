import AV from '../../lib/leancloud'
import getErrorMessage from '../../lib/getErrorMessage'
import getAVUser from '../../lib/getAVUser'
import bus from '../../lib/bus.js'
import clearData from '../../lib/clearData.js'


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
     created() {
        bus.$on('clearData', ()=> {
             clearData(this._data);
        })
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
                console.log(user);            
                this.$emit('success', user);
                bus.$emit('email', email);
                clearData(this._data);
            }, (error) => {
                this.errorMessage = getErrorMessage(error);
            });
            console.log(this._data);
        }
    }
}