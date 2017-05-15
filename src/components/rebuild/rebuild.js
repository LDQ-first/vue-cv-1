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
            for(let i = 0; i < resumeConfig.length; i++) {
                const resumeField = resume[resumeConfig[i].field];
                if(resumeField instanceof Array) {
                    //console.log(resumeConfig[i].field);
                    for(let k of resumeField) {
                        console.log(k);
                        /*if(k instanceof Array) {

                        }*/
                      /*  this.clearObj(k, resumeConfig[i].field);*/
                    }
                 //   this.clearObj(resumeField, resumeConfig[i].field);
                }
                else {                
                     this.clearObj(resumeField, resumeConfig[i].field);
                }
            }
        },
        clearObj(obj, field) {
            console.log(obj,field);
            /*let copyObj = JSON.parse(JSON.stringify(obj))
            console.log(copyObj);*/
            for(let key in obj) {
                console.log(key);
                console.log(`resume.${field}.${key}`);
              //  this.changeResumeField(`resume.${field}.${key}`, '');
            }
        },
        changeResumeField(path, value) {
            changeState(path, value)
        },
    }
}