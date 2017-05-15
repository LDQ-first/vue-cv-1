

export default {
    name: 'rebuild',
    data() {
        return {
            showRebuildText: false
        }
    },
    computed: {
        skinColor() {
            return this.$store.state.skinColor;
        }
    },
    methods: {
    }
}