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
    methods: {
        changeShowSkin(showSkin, value) {
            this.$store.commit('showSkin');
            this.$store.state.user.id ?  (
            this.$store.state.id ? 
            this.$store.commit('updateResume', {
                showSkin,
                value
            }):
            this.$store.commit('saveResume', {
                showSkin,
                value
            })) : '';
        },
        changeSkinColor(skinColor, color){
            this.$store.commit('changeSkinColor', color);
            this.$store.state.user.id ?  (
            this.$store.state.id ? 
            this.$store.commit('updateResume', {
                skinColor,
                color
            }):
            this.$store.commit('saveResume', {
                skinColor,
                color
            })) : '';
        }
    }
}