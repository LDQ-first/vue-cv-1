


export default {
    name: 'MyDialog',
    props: ['title', 'visible'],
    methods: {
        close(){
            this.$emit('close');
        }
    }
}