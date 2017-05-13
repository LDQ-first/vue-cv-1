import bus from '../../lib/bus.js'

export default {
    name: 'MyDialog',
    props: ['title', 'visible'],
    data() {
        return {
            img: 'https://unsplash.it/250/400?random&time=${this.now}',
            now: Date.now()
        }
    },
    methods: {
        close(){
            this.$emit('close');
            bus.$emit('clearData');
        }
    }
}