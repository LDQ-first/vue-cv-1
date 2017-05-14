

export default {
    name: 'uploadAvatar',
    data(){
        return {
            px: 0,
            py: 0,
            sx: 15,
            sy: 15,
            sHeight: 100,
            sWidth: 100,
            getImgWidth: 0,
            getImgHeight: 0,
           
            controlClientHeight: 0,
            controlClientWidth: 0,
            controlOffsetLeft: 0,
            controlOffsetTop: 0,
            
            /*editHeight: 0,
            editWidth: 0,*/
            editDisplay: 'none',
            
            /*showEditBackground: '',*/
            imgUrl: '',
            draging: false,
            startX: 0,
            startY: 0,
            imgWidth: 0,
            imgHeight: 0,
        }
    },
    computed:{
         getImgStyleObject(){
             return {
                width: this.getImgWidth + 'px',
                height: this.getImgHeight + 'px',
                left: this.px + 'px',
                top: this.py + 'px'
             }
        },
        editStyleObject(){
            return {
                width: this.getImgWidth + 'px',
                height: this.getImgHeight + 'px',
                display: this.editDisplay,
                left: this.px + 'px',
                top: this.py + 'px'
            }    
        },
        showEditStyleObject(){
            return {
                width: this.sWidth + 'px',
                height: this.sHeight + 'px',
                background: `url(${this.imgUrl}) -${this.sx}px -${this.sy}px no-repeat`
            }        
       },

    },
    props: ['visible'],
    methods:{
        close(){
            this.$emit('close');
        },
        uploadImg(input){
            if (input.files.length > 0) {
                if(input.files[0].type === "image/jpg" ||
                input.files[0].type === "image/png" ||
                input.files[0].type === "image/jpeg" ||
                input.files[0].type === "image/gif") {
                    console.log(input.files);
                    console.log(input.files[0].name);
                    const localFile = input.files[0];
                    const oFReader = new FileReader();
                    oFReader.readAsDataURL(localFile);
                    oFReader.onload = (e) => {
                        console.log(e);
                        this.paintImage(e.target.result);
                    }
                }
            }
        },
        paintImage(url) {
            const getImg = document.querySelector('#getImg');
            const canvas = getImg.getContext("2d");
            const img = new Image();
            img.src = url;
            
            const control = document.querySelector('.control');
            this.controlClientHeight = control.clientHeight;
            this.controlClientWidth = control.clientWidth;
            
            img.onload = () => {
                this.imgWidth = img.width;
                this.imgHeight = img.height;
                console.log(img.width);
                console.log(img.height);
                if(this.imgWidth < this.controlClientWidth && this.imgHeight < this.controlClientHeight) {
                    this.getImgWidth = this.mgWidth;
                    this.getImgHeight = this.imgHeight;
                }
                else {
                    const pWidth = this.imgWidth / (this.imgHeight / this.controlClientHeight);
                    const pHeight = this.imgHeight / (this.imgWidth / this.controlClientWidth);
                    this.getImgWidth = this.imgWidth > this.imgHeight ? this.controlClientWidth : pWidth;
                    this.getImgHeight = this.imgHeight > this.imgWidth ? this.controlClientHeight: pHeight;
                }
                console.log('this.getImgWidth: ', this.getImgWidth);
                console.log('this.getImgHeight: ', this.getImgHeight);
                this.px = (this.controlClientWidth - this.getImgWidth) / 2 ;
                this.py = (this.controlClientHeight - this.getImgHeight) / 2;
                console.log('this.px: ', this.px);
                console.log('this.py: ', this.py);
                canvas.drawImage(img, 0, 0, this.getImgWidth, this.getImgHeight);
                this.imgUrl = getImg.toDataURL();
                this.cutImg();
                this.drag();
            }
        },
        cutImg() {
            this.editDisplay = 'block';
            let edit = document.querySelector('#edit');
            let editCanvas = edit.getContext('2d');
            editCanvas.clearRect(0, 0, this.getImgWidth, this.getImgHeight);
            editCanvas.fillStyle='rgba(0, 0, 0, 0.5)';
            editCanvas.fillRect(0, 0, this.getImgWidth, this.getImgHeight);
            editCanvas.clearRect(this.sx, this.sy, this.sWidth, this.sHeight);
            console.log(editCanvas);
        },
        drag() {
            
        },
        dragDown(e) {
                console.log(e);
                console.log(e.target);
            const control = document.querySelector('.control');
            this.controlOffsetLeft = control.offsetLeft;
            this.controlOffsetTop = control.offsetTop;
            const ex = e.clientX;
            const ey = e.clientY;
            const objX = e.target.offsetLeft;
            const objY = e.target.offsetTop;
            const pageX = ex - (this.controlOffsetLeft + objX);
            const pageY = ey - (this.controlOffsetTop + objY);
                console.log(pageX); 
                console.log(pageY); 
            
            if(pageX > this.sx && pageX < this.sx + this.sWidth && pageY > this.sy && pageY < this.sy + this.sHeight) {
                this.draging = true;
                e.target.style.cursor = "move";
                const tsx = this.sx;
                const tsy = this.sy;
                e.target.addEventListener('mousemove', (ev)=> {
                    if(this.draging) {
                        const evx = ev.clientX;
                        const evy = ev.clientY;
                        const clipX = tsx + evx - ex;
                        const clipY = tsy + evy - ey;
                    
                        if(clipX < 0) {
                             this.sx = 0; 
                        }
                        else if(clipX + this.sWidth >  this.getImgWidth) {
                            this.sx = this.getImgWidth - this.sWidth;
                        }
                        else {
                            this.sx = clipX;
                        }
                        
                        if(clipY < 0) {
                             this.sy = 0; 
                        }
                        else if(clipY + this.sHeight > this.getImgHeight) {
                            this.sy = this.getImgHeight - this.sHeight;
                        }
                        else {
                            this.sy = clipY;
                        }
                    

                        this.cutImg();
                    }

                }) ;

                document.onmouseup = () => {
                     this.draging = false;
                     e.target.style.cursor = "auto";
                }
            }

        },


    }
}