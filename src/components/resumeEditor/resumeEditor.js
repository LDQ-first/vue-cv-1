import UploadImg from '../uploadImg/uploadImg.vue'
import AddLink from '../addLink/addLink.vue'
import bus from '../../lib/bus.js'
import changeState from '../../lib/changeState.js'

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
                changeState('selected', value);
                return this.$store.commit('switchTab', value);
            }
        },
        resume() {
            return this.$store.state.resume;
        },
    },
    created() {
        bus.$on('addLink', (data, key, field, i) => {
            const addArea = document.querySelector(`.text-${field}-${i}-${key}`);
            addArea.value += data;
            console.log(addArea);
            changeState(`resume.${field}.${i}.${key}`, addArea.value);
        })
        bus.$on('imgLoading', (percent, field, i, key) => {
            const loader = document.querySelector(`.loader-${field}-${i}-${key}`);
            const loading = loader.querySelector('.loading');
            const loadingValue = loader.querySelector('.loading-value');
            loading.style.width = (percent / 100).toFixed(2) * window.getComputedStyle(loader).width.replace(/px/,'') + 'px';
            loadingValue.innerText = percent.toFixed(2) + '%';
        })
        
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
            changeState(path, value)
        },
        deleteResumeField(field, i) {
            if(this.$store.state.resume[field].length != 1) {
                this.$store.commit('deleteResumeField', { field, i });
                changeState(`resume.${field}`, this.$store.state.resume[field]);
            }
            else {
                console.log('最后一个不可删');
            }
        },
        addResumeField(field) {
            this.$store.commit('addResumeField', field);
            changeState(`resume.${field}`, this.$store.state.resume[field]);
        }
    }
}