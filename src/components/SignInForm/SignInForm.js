import AV from '../../lib/leancloud'
import getErrorMessage from '../../lib/getErrorMessage'
import getAVUser from '../../lib/getAVUser'
import clearData from '../../lib/clearData.js'
import bus from '../../lib/bus.js'

export default {
    name: 'SignInForm',
    data() {
        return {
            formData: {
                username: '',
                password: ''
            },
            errorMessage: '',
        }
    },
    created() {
        bus.$on('clearData', ()=> {
             clearData(this._data);
        })
    },
    methods: {
        signIn() {
           
            let {username, password} = this.formData;
            AV.User.logIn(username, password).then(() => {
                this.$emit('success', getAVUser());
                 clearData(this._data);
            }, (error) => {
                this.errorMessage = getErrorMessage(error);
            });
           
            console.log(this._data);
        },
        resetPassword() {
            clearData(this._data);
            this.$emit('resetPassword');
        },
        verifyEmail() {
            clearData(this._data);
            this.$emit('verifyEmail');
        },
        showVerify(errorMessage) {
            switch(errorMessage)  {
                case '未验证邮箱地址': 
                    console.log('未验证邮箱地址');
                    return true;
                break;
                default:
                    /*console.log('nothing');*/
                break;
            }
        },
        showRest(errorMessage) {
            switch(errorMessage)  {
                case '用户名和密码不匹配':
                    console.log('用户名和密码不匹配');
                    return true;
                break;
                case '登录失败次数超过限制，请稍候再试':
                    console.log('登录失败次数超过限制，请稍候再试');
                    return true;
                break;
                default:
                   /* console.log('nothing');*/
                break;
            }
        }
    }
}