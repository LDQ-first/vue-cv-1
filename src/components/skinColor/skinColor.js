import changeState from '../../lib/changeState.js'

export default {
    name: 'skinColor',
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
    },
    methods: {
        changeShowSkin(showSkin, value) {
           // this.$store.commit('showSkin');
           console.log(showSkin);
           console.log(value);

            changeState('showSkin', value);
        },
        changeSkinColor(skinColor, color){
           // this.$store.commit('changeSkinColor', color);
            changeState('skinColor', color);
            
        }
    }
}