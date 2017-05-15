import Topbar from '../components/Topbar/Topbar.vue'
import ResumeEditor from '../components/ResumeEditor/ResumeEditor.vue'
import ResumePreview from '../components/ResumePreview/ResumePreview.vue'
import icons from '../assets/icons'
import Rebuild from '../components/rebuild/rebuild.vue'


import store from '../store/index'
import AV from '../lib/leancloud'
import getAVUser from '../lib/getAVUser'
import getRadomImg from '../lib/getRadomImg.js'


export default {
    name: 'app',
    data() {
        return {
        defaultState: {},
        }
    },
    store,
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