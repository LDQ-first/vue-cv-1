import AV from '../../lib/leancloud'
import getErrorMessage from '../../lib/getErrorMessage'
import emailMap from '../../lib/emailMap.js'
import clearData from '../../lib/clearData.js'
import bus from '../../lib/bus.js'
import Buttons from '../button/button.vue'

export default {
    name: 'verifyEmail',
    data() {
        return {
            formData: {
                username: '',
                password: ''
            },
            message: '',
            email: '',
            isSendSuccess: false
        }
    },
     created() {
        bus.$on('clearData', ()=> {
             clearData(this._data);
        })
    },
    components: {
        Buttons
    },
    methods: {
        verifyEmail(email) {
            AV.User.requestEmailVerify(email).then(() =>{
                this.message = '邮件发送成功';
                this.isSendSuccess = true;      
            }, (error) => {
                this.message = getErrorMessage(error);
            });
        },
        skip(target, email){
            clearData(this._data);
            emailMap(target, email);      
        },
        returnSignIn(){
            this.$emit('returnSignIn');
        }
    }
}