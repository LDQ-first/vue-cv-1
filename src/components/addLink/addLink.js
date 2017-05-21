import bus from '../../lib/bus.js'
import Close from '../close/close.vue'
import Buttons from '../button/button.vue'

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
        },
        skinColor() { 
            return this.$store.state.skinColor;
        },
    },
    components: {
        Close,
        Buttons
    },
    methods: {
        confirm(n, i, ikey, field){
            let { link, title, linkPlaceholder } = this.addData;
            if(link) {
                const linkReg = /^(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)$/g;
                if(link.match(linkReg)) {
                    if(!title) {
                        this.addData.link = link.replace(linkReg, "<a href='$1$2' target='new'>$1$2</a>");
                    }
                    else {
                        this.addData.link = link.replace(linkReg, `<a href='$1$2' target='new'>${title}</a>`);
                    }    
                    const data = '\n' + this.addData.link + '\n';
                   
                    bus.$emit(`addLink`, data, ikey, field, i);
                }
                this.LinkDialogVisible = false;
                this.addData.link = '';
                this.addData.title = '';
            }
            else {
                if(title){
                   this.addData.linkPlaceholder = '请填写链接'
                }
                else {
                    this.LinkDialogVisible = false;
                }
            }
            
        },
        close() {
            this.LinkDialogVisible = false;
        }
    }
}