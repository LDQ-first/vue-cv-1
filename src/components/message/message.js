
import bus from '../../lib/bus.js'
import Close from '../close/close.vue'
import Buttons from '../button/button.vue'



export default {
    name: 'message',
    props: ['type', 'message', 'event'],
    data() {
        return {

        }
    },
    created() {
     
    },
    computed:{
        messageWrapperStyle() {
            console.log(this.type);
            switch(this.type) {
                    case 'confirm' :
                        return {
                            background: 'hsla(0, 0%, 0%, 0.4)',
                            zIndex: 20,
                        };
                }
        },
        title() {
            switch(this.type) {
                case 'confirm' : return '确认';
                case 'error' : return '错误';
                case 'success' : return '成功';
            }
        },
        messageStyle() {
            switch(this.type) {
                case 'confirm' :
                    return {
                        background: '#20A0FF'
                    };
                case 'error' : 
                        return {
                        background: '#FF4F20',
                    };
                case 'success' : 
                    return {
                        background: '#00A6A8'
                    };
            }
        },
        messageClass() {
            switch(this.type) {
                case 'confirm' :
                    return 'confirm';
                default: 
                    return 'noConfirm';
            }
        }

        
    },
    methods: {
        close() {
          this.$emit('close');
        },
        confirm(event) {
            bus.$emit(`${event}`);
            this.close();
        }

    },
    components: {
        Close,
        Buttons
    },

}