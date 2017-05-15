import changeState from '../../lib/changeState.js'

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
        rebuild() {
            const resume = this.$store.state.resume;
            const resumeConfig = resume.config;
            this.traversalResume(resume, resumeConfig)
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
    }
}