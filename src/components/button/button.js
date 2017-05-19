


export default {
    name: 'button',
    props: ['text'],
    data() {
        return {
            ex: 0,
            ey: 0,
            radius: 0,
            backgroundColor: '#FFF',
            context: '',
            width: 0,
            height: 0,
        }
    },
    methods: {
        click() {
            setTimeout(()=>{
                this.$emit('click');
            },2000);
            
        },
        init() {   
            window.requestAnimFrame = (function(){
            return  window.requestAnimationFrame       ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame    ||
                    window.oRequestAnimationFrame      || 
                    window.msRequestAnimationFrame     || 
                    function( callback ){
                        window.setTimeout(callback, 1000 / 60);
                    };
            })();
        },
        press(e) {
            this.init();
            console.log(e);
            const btns = this.$refs.btns;
            const canvas = e.target;
            const context = canvas.getContext('2d');
            this.width = canvas.width = btns.offsetWidth;
            this.height = canvas.height = btns.offsetHeight;
            this.context = context;
            
            console.log(window.getComputedStyle(btns).backgroundColor);
            this.backgroundColor = window.getComputedStyle(btns).backgroundColor;
            
            this.ex = e.offsetX;
            this.ey = e.offsetY;
            console.log('ex: ' + this.ex, 'ey: ' + this.ey);
            context.clearRect(0, 0, this.width, this.height);
            
            this.draw();
        },
        draw() {
            this.context.beginPath();
            this.context.arc(this.ex, this.ey, this.radius, 0, 2*Math.PI, false);
            this.context.fillStyle = this.backgroundColor;
            this.context.fill();
            this.radius += 2;
            if(this.radius < this.width) {
               requestAnimFrame(this.draw);
            }
        }
    }
}