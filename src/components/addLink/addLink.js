
export default {
    name: 'addLink',
    props: ["selected", "ikey", "field", "n", "i"],
    data() {
        return {
            LinkDialogVisible: false
        }
    },
    methods: {
        confirm(n, i){
            const subitem = document.querySelectorAll(".panels li")[n]
                                    .querySelectorAll('.subitem')[i];
            const addArea = subitem.querySelector(`.text-${this.ikey}`);
            console.log(addArea);
            
        },
        addLink(){
            this.$store.state.user.id ?  (
            this.$store.state.id ? 
            this.$store.commit('updateResume', {
                path,
                value
            }):
            this.$store.commit('saveResume', {
                path,
                value
            })) : 
            this.$store.commit('editResume', {
                path,
                value
            });
        }
    }
}