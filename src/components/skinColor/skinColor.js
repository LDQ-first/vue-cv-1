import changeState from '../../lib/changeState.js'
import Buttons from '../button/button.vue'

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
           console.log(showSkin);
           console.log(value);

            changeState('showSkin', value);
        },
        changeSkinColor(skinColor, color){
            changeState('skinColor', color);
            
        }
    },
    components: {
        Buttons
    }
}