import AV from '../../lib/leancloud'
import bus from '../../lib/bus.js'
import emailMap from '../../lib/emailMap.js'

export default {
    name:'emailVerify',
    data() {
        return {
            isVerifySuccess: false,
            email: '',
        }
    },
    created() {
        bus.$on('email', (email)=>{
            this.email = email;
        })
    },
    methods:{
        skip(target, email){
           emailMap(target, email);      
        },
    }
}