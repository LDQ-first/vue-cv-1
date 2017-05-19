import changeState from '../../lib/changeState.js'
import Message from '../message/message.vue'
import bus from '../../lib/bus.js'
import Buttons from '../button/button.vue'

export default {
    name: 'rebuild',
    data() {
        return {
            showRebuildText: false,
            message: '你确定要清空重建吗？'
        }
    },
    created() {
        bus.$on('rebuild', ()=> {
            const resume = this.state.resume;
            const resumeConfig = resume.config;
            this.traversalResume(resume, resumeConfig);
            this.state.resumeAvatarSrc = '';
            this.state.userAvatarSrc = '';
        })
    },
    computed: {
        skinColor() {
            return this.state.skinColor;
        },
        state() {
            return this.$store.state;
        }
        
    },
    methods: {
        rebuild(message) {
            bus.$emit('showMessage', {type: 'confirm', message, event: 'rebuild' });
        },
        traversalResume(resume, resumeConfig) {
            for(let i of resumeConfig) {
                const resumeField = resume[i.field];
                if(resumeField instanceof Array) {
                    let j = 0;
                    for(let k of resumeField) {
                        if(k instanceof Object) {
                            this.clearObj(k, i.field, j);
                            j++;
                        }
                    }
                }
                else {                
                     this.clearObj(resumeField, i.field);
                }
            }

        },
        clearObj(obj, field, i) {
            let path ;
            for(let key in obj) {
             if(isNaN(i)) {
                path = `resume.${field}.${key}`;
             }
             else {
                path = `resume.${field}.${i}.${key}`;
             }
                this.changeResumeField(path, '');
            }
        },
        changeResumeField(path, value) {
            changeState(path, value)
        },
    },
    components: {
        Message,
        Buttons
    }
}