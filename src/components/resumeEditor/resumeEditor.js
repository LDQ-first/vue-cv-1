import UploadImg from '../uploadImg/uploadImg.vue'
import AddLink from '../addLink/addLink.vue'

export default {
    name: 'resumeEditor',
    computed: {
        skinColor() { 
            return this.$store.state.skinColor;
        },
        selected: {
            get() {
                return this.$store.state.selected;
            },
            set(value) {
                this.changeResumeField('selected', value);
                return this.$store.commit('switchTab', value);
            }
        },
        resume() {
            return this.$store.state.resume;
        },
    },
    components: {
        UploadImg,
        AddLink
    },
    methods: {
        check(selected, key){
            return selected=='workHistory'&&key=='content' || selected=='education'&&key=='content' 
            || selected=='projects'&&key=='content' || selected=='awards'&&key=='content' || selected=='others'
        },
        changeResumeField(path, value) {
            /*const linkReg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
            const imgReg = /<img[^>]+>/g;
            const aReg = /<a[^>]+>/g

            if(typeof value === 'string' && value.match(linkReg)) {
                console.log(value.replace(linkReg));
                if(!value.match(imgReg) || !value.match(aReg)) {
                    value = value.replace(linkReg, "\n<a href='$1$2' target='new'>$1$2</a>\n");
                }
            }*/
            
            
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
        },
        deleteResumeField(field, i) {
            if(this.$store.state.resume[field].length != 1) {
                this.$store.commit('deleteResumeField', { field, i });
                console.log(`resume.${field}`, this.$store.state.resume[field]);
                this.changeResumeField(`resume.${field}`, this.$store.state.resume[field]);
            }
            else {
                console.log('最后一个不可删');
            }
        },
        addResumeField(field) {
            this.$store.commit('addResumeField', field);
            console.log(this.$store.state.resume[field]);
            this.changeResumeField(`resume.${field}`, this.$store.state.resume[field]);
        }
    }
}