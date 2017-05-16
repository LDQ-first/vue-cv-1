import Topbar from '../components/Topbar/Topbar.vue'
import ResumeEditor from '../components/resumeEditor/resumeEditor.vue'
import ResumePreview from '../components/resumePreview/resumePreview.vue'
import icons from '../assets/icons'
import Rebuild from '../components/rebuild/rebuild.vue'


import store from '../store/index'
import AV from '../lib/leancloud'
import getAVUser from '../lib/getAVUser'
import getRadomImg from '../lib/getRadomImg.js'
import bus from '../lib/bus.js'

import {router, routes} from '../router/index.js'

export default {
    name: 'app',
    data() {
        return {
            defaultState: {},
            routes
        }
    },
    store,
    router,
    components: {Topbar, ResumeEditor, ResumePreview, Rebuild},
    created(){
        document.body.insertAdjacentHTML('afterbegin', icons);
        Object.assign(this.defaultState , this.$store.state);
        let user = localStorage.getItem('user');
        if(user) {
            user = JSON.parse(user);
            this.$store.commit('setUser', user);
            this.$store.commit('fetchResume');
        }
        bus.$on('changeUrl', (key) => {
            console.log(key);
            this.$router.push(this.routes[key]);
        })
       /* console.log(this.$route);*/
        
        /*let state = localStorage.getItem('state');
        if(state) {
        state = JSON.parse(state);
        this.$store.commit('initState', state);
        }*/
        
    },
    mounted() {
         getRadomImg();
    }
}