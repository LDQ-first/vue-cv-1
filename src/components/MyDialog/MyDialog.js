import bus from '../../lib/bus.js'

export default {
    name: 'MyDialog',
    props: ['title', 'visible'],
    methods: {
        close(){
            this.$emit('close');
            bus.$emit('clearData');
        }
    }
}