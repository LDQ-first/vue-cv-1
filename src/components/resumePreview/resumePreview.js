import SkinColor from '../skinColor/skinColor.vue'

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
        }
    },
    created() {
        console.log(this.resume);
    },
    components:{
        SkinColor
    },
    methods: {
        
    }
}