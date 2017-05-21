import Buttons from '../button/button.vue'

export default {
    name: 'uploadImg',
    props: ["ikey", "field", "i", "text"],
    computed:{
        resume(){
            return this.$store.state.resume;
        }
    },
    components: {
        Buttons
    },
    methods: {
        reset(i, field, ikey){
            const loader =  document.querySelector(`.loader-${field}-${i}-${ikey}`);
                loader.style.display = 'none';
            const loading = loader.querySelector('.loading');
            const loadingValue = loader.querySelector('.loading-value');
            loading.style.width = 0;
            loadingValue.innerText = 0;
        },
        uploadImg(input, path, field, i, ikey){
            if (input.files.length > 0) {
                if(input.files[0].type === "image/jpg" ||
                input.files[0].type === "image/png" ||
                input.files[0].type === "image/jpeg" ||
                input.files[0].type === "image/gif") {
                    console.log(input.files);
                    console.log(input.files[0].size);
                    if(input.files[0].size <= 20000000) {
                        this.$store.dispatch('uploadImg', {input, path, field, i, ikey});
                    }
                    else {
                        console.log('图片太大了');
                    }
                    
                }
            }
        }
    }
}