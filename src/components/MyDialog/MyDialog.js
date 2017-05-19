import bus from '../../lib/bus.js'
import Close from '../close/close.vue'

export default {
    name: 'MyDialog',
    props: ['title', 'visible'],
    methods: {
        close(){
            this.$emit('close');
            bus.$emit('clearData');
        }
    },
     components: {
        Close
    },
}