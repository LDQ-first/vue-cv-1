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
        rebuild(){
          /*  console.log(this.$store.state);*/
            const resume = this.$store.state.resume;
            const resumeConfig = resume.config;
            this.traversalResume(resume, resumeConfig)
        },
        traversalResume(resume, resumeConfig) {
            for(let i = 0; i < resumeConfig.length; i++) {
                const resumeField = resume[resumeConfig[i].field];
                if(resumeField instanceof Array) {
                    /*console.log(resumeConfig[i].field);*/
                    let j = 0;
                    for(let k of resumeField) {
                        if(k instanceof Object) {
                            console.log(j);
                            this.clearObj(k, resumeConfig[i].field, j);
                            j++;
                            
                        }
                    }
                }
                else {                
                     this.clearObj(resumeField, resumeConfig[i].field);
                }
            }
        },
        clearObj(obj, field, i) {
            console.log(obj,field);
            /*let copyObj = JSON.parse(JSON.stringify(obj))
            console.log(copyObj);*/
            let path ;
            for(let key in obj) {
             //   console.log(key);
             if(isNaN(i)) {
                console.log(`resume.${field}.${key}`);
                path = `resume.${field}.${key}`;
             }
             else {
                console.log(`resume.${field}.${i}.${key}`);
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