import SkinColor from '../skinColor/skinColor.vue'
import bus from '../../lib/bus.js'
import changeState from '../../lib/changeState.js'


export default {
    name: 'resumePreview',
    computed: {
        showSkin() {
            return this.$store.state.showSkin;
        },
        skinColor() {
            return this.$store.state.skinColor;
        },
        skinColors() {
            return this.$store.state.skinColors;
        },
        resume() {
            return this.$store.state.resume;  
        },
        resumeAvatarSrc() {
            return this.$store.state.resumeAvatarSrc;
        }
    },
    created() {
        console.log(this.resume);
        bus.$on('resumeAvatar', (src) => {
            console.log('resumeAvatar');
            changeState('resumeAvatarSrc', src);
        })
        
    },
    components:{
        SkinColor,
    },
    methods: {
    
    }
}