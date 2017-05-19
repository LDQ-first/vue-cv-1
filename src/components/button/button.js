


export default {
    name: 'button',
    props: ['text'],
    methods: {
        click() {
            this.$emit('click');
        }
    }
}