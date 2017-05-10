
export default {
    name: 'addLink',
    props: ["ikey", "field", "n", "i"],
    data() {
        return {
            LinkDialogVisible: false,
            addData: {
                link: '',
                title: '',
                linkPlaceholder: 'http://example.com',
                titlePlaceholder: '可选链接标题'
            }
        }
    },
    computed: {
        resume(){
            return this.$store.state.resume;
        }
    },
    methods: {
        confirm(n, i, ikey, field){
            let { link, title, linkPlaceholder } = this.addData;
            const subitem = document.querySelectorAll(".panels li")[n]
                                    .querySelectorAll('.subitem')[i];
            const addArea = subitem.querySelector(`.${ikey}`);
            const linkUrl = subitem.querySelector('.link-url');
            console.log(addArea);
            if(link) {
                const linkReg = /^(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)$/g;
                /* const imgReg = /<img[^>]+>/g;
                    const aReg = /<a[^>]+>/g*/
                if(link.match(linkReg)) {
                    if(!title) {
                        this.addData.link = link.replace(linkReg, "<a href='$1$2' target='new'>$1$2</a>");
                    }
                    else {
                        this.addData.link = link.replace(linkReg, `<a href='$1$2' target='new'>${title}</a>`);
                    }    
                    addArea.value += '\n' + this.addData.link + '\n';
                    console.log(addArea.value);
                }
                this.LinkDialogVisible = false;
                this.addData.link = '';
                this.addData.title = '';
                this.addLink(`resume.${field}.${i}.${ikey}`, addArea.value);
            }
            else {
                if(title){
                   this.addData.linkPlaceholder = '请填写链接'
                }
            }
        },
        addLink(path, value){
            this.$store.state.user.id ?  (
            this.$store.state.id ? 
            this.$store.commit('updateResume', {
                path,
                value
            }):
            this.$store.commit('saveResume', {
                path,
                value
            })): 
            this.$store.commit('editResume', {
                path,
                value
            });
        }
    }
}