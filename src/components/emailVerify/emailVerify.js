import AV from '../../lib/leancloud'
import bus from '../../lib/bus.js'

export default {
    name:'emailVerify',
    data() {
        return {
            isVerifySuccess: false,
            email: '',
            hash: {   
                'qq.com': 'http://mail.qq.com',   
                'gmail.com': 'http://mail.google.com',   
                'sina.com': 'http://mail.sina.com.cn',   
                '163.com': 'http://mail.163.com',   
                '126.com': 'http://mail.126.com',   
                'yeah.net': 'http://www.yeah.net/',   
                'sohu.com': 'http://mail.sohu.com/',   
                'tom.com': 'http://mail.tom.com/',   
                'sogou.com': 'http://mail.sogou.com/',   
                '139.com': 'http://mail.10086.cn/',   
                'hotmail.com': 'http://www.hotmail.com',   
                'live.com': 'http://login.live.com/',   
                'live.cn': 'http://login.live.cn/',   
                'live.com.cn': 'http://login.live.com.cn',   
                '189.com': 'http://webmail16.189.cn/webmail/',   
                'yahoo.com.cn': 'http://mail.cn.yahoo.com/',   
                'yahoo.cn': 'http://mail.cn.yahoo.com/',   
                'eyou.com': 'http://www.eyou.com/',   
                '21cn.com': 'http://mail.21cn.com/',   
                '188.com': 'http://www.188.com/',   
                'foxmail.com': 'http://www.foxmail.com'   
            }
        }
    },
    created() {
        bus.$on('email', (email)=>{
            this.email = email;
        })
    },
    methods:{
        skip(target, email, hash){
           console.log(email);
           const url = email.split('@')[1];
           for(let i in hash) {
               target.setAttribute("href", hash[url]);
           }  
        },
       /* sendEmail(email) {
             AV.User.requestEmailVerify(email).then(function (result) {
                console.log(JSON.stringify(result));
            }, function (error) {
                console.log(JSON.stringify(error));
            });
        }*/
    }
}