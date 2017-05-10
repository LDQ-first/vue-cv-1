

export default {
    name: 'uploadImg',
    props: ["selected", "ikey", "field", "n", "i"],
    computed:{
        resume(){
            return this.$store.state.resume;
        }
    },
    methods: {
        reset(n, i){
            const subitem = document.querySelectorAll(".panels li")[n]
                                .querySelectorAll('.subitem')[i];
            const loader =  subitem.querySelector('.loader');
                loader.style.display = 'none';
            const loading = subitem.querySelector('.loading');
            const loadingValue = subitem.querySelector('.loading-value');
            loading.style.width = 0;
            loadingValue.innerText = 0;
        },
        uploadImg(input, path, n, i){
            if (input.files.length > 0) {
                if(input.files[0].type === "image/jpg" ||
                input.files[0].type === "image/png" ||
                input.files[0].type === "image/jpeg" ||
                input.files[0].type === "image/gif") {
                    console.log(input.files);
                    console.log(input.files[0].name);
                    this.$store.dispatch('uploadImg', {input, path, n, i});
                }
            }
        }
    }
}