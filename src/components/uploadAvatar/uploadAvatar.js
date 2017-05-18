import bus from '../../lib/bus.js'

export default {
    name: 'uploadAvatar',
    data() {
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
            editDisplay: 'none',
            imgUrl: '',
            draging: false,
            imgWidth: 0,
            imgHeight: 0,
            scale: 1.0,
            max: 3.0,
            change: false,
            getImg: '',
            canvas: '',
            img: '',
            url: '',
            selected: '',
            busEvent: ''
        }
    },
    computed: {
        editStyleObject() {
            return {
                display: this.editDisplay
            }
        },
        showEditStyleObject() {
            return {
                width: this.sWidth + 'px',
                height: this.sHeight + 'px',
                background: `#1C5FE6 url(${this.imgUrl}) -${this.sx}px -${this.sy}px no-repeat`,
                borderRadius: this.selected == 'user'? '50%': '',
            }
        },
        clipStyleObject() {
            return {
                width: this.sWidth + 'px',
                height: this.sHeight + 'px',

            }
        },
        showPicStyleObject() {
            return {
                width: this.sWidth + 'px',
                height: this.sHeight + 'px',
            }
        },
        RangeStyle() {
            return {
                background: `linear-gradient(to right, #038653 0%,
                 #038653 ${(this.scale/this.max*100).toFixed(2)}%,
                 #8dfbd0 ${(this.scale/this.max*100).toFixed(2)}%, #8dfbd0)`
            }
        }
    },
    props: ['visible', 'parent'],
    created() {
        console.log()
        bus.$on('readSelected', (selected, busEvent) => {
            this.busEvent = busEvent;
            this.selected = selected;
            this.initS(selected, busEvent);
        })
    },
    methods: {
        initS(selected) {
            console.log(selected);
            if (selected == 'profile') {
                this.sHeight = 200;
                this.sWidth = 133;
            }
            else if(selected == 'user') {
                 this.sHeight = 120;
                 this.sWidth = 120;
            }
        },
        close() {
            this.imgUrl = '';
            this.$emit('close');
        },
        uploadImg(input) {
            if (input.files.length > 0) {
                this.initS(this.selected);
                if (input.files[0].type === "image/jpg" ||
                    input.files[0].type === "image/png" ||
                    input.files[0].type === "image/jpeg" ||
                    input.files[0].type === "image/gif") {
                    const localFile = input.files[0];
                    const oFReader = new FileReader();
                    oFReader.readAsDataURL(localFile);
                    oFReader.onload = (e) => {
                        this.url = e.target.result;
                        this.paintImage();
                    }
                }
            }
        },
        paintImage() {
            this.getImg = document.querySelector('#getImg');
            this.canvas = this.getImg.getContext("2d");
            this.canvas.clearRect(0, 0, this.controlClientWidth, this.controlClientHeight);
            this.img = new Image();
            this.img.src = this.url;
            const control = document.querySelector('.control');
            this.controlClientHeight = control.clientHeight;
            this.controlClientWidth = control.clientWidth;
            this.sx = (this.controlClientWidth - this.sWidth) / 2;
            this.sy = (this.controlClientHeight - this.sHeight) / 2;

            this.img.onload = () => {
                this.drawImg(this.img, this.canvas, this.getImg, this.scale);
            }
        },
        changeScale(e) {
           if(this.change) {
               this.scale = e.target.value;
               this.drawImg(this.img, this.canvas, this.getImg, this.scale);
           }
        },
        drawImg(img,canvas,getImg,scale) {
            if(!img) return;
            this.imgWidth = img.width;
            this.imgHeight = img.height;
            if (this.imgWidth < this.controlClientWidth && this.imgHeight < this.controlClientHeight) {
                this.getImgWidth = this.imgWidth;
                this.getImgHeight = this.imgHeight;
            }
            else {
                const pWidth = this.imgWidth * this.controlClientHeight / this.imgHeight;
                const pHeight = this.imgHeight * this.controlClientWidth / this.imgWidth;

                this.getImgWidth = this.imgWidth > this.imgHeight ? this.controlClientWidth : pWidth;
                this.getImgHeight = this.imgHeight > this.imgWidth ? this.controlClientHeight : pHeight;
            }
            getImg.width = this.controlClientWidth;
            getImg.height = this.controlClientHeight;

            this.getImgWidth *= scale;
            this.getImgHeight *= scale;

            this.px = (this.controlClientWidth - this.getImgWidth) / 2;
            this.py = (this.controlClientHeight - this.getImgHeight) / 2;

            canvas.drawImage(img, this.px, this.py, this.getImgWidth, this.getImgHeight);
            this.imgUrl = getImg.toDataURL();
            this.cutImg();
        },
        cutImg() {
            this.editDisplay = 'block';
            const edit = document.querySelector('#edit');
            const editCanvas = edit.getContext('2d');
            edit.width = this.controlClientWidth;
            edit.height = this.controlClientHeight;
            editCanvas.clearRect(0, 0, this.getImgWidth, this.getImgHeight);
            editCanvas.fillStyle = 'rgba(158, 187, 244, 0.5)';
            editCanvas.fillRect(0, 0, this.controlClientWidth, this.controlClientHeight);
            editCanvas.clearRect(this.sx, this.sy, this.sWidth, this.sHeight);
        },
        dragDown(e) {
            const control = document.querySelector('.control');
            this.controlOffsetLeft = control.offsetLeft;
            this.controlOffsetTop = control.offsetTop;
            const ex = e.clientX;
            const ey = e.clientY;
            const objX = e.target.offsetLeft;
            const objY = e.target.offsetTop;
            const pageX = ex - (this.controlOffsetLeft + objX);
            const pageY = ey - (this.controlOffsetTop + objY);
            if (pageX > this.sx && pageX < this.sx + this.sWidth && pageY > this.sy && pageY < this.sy + this.sHeight) {
                this.draging = true;
                e.target.style.cursor = "move";
                const tsx = this.sx;
                const tsy = this.sy;
                e.target.onmousemove = (ev) => {
                    if (this.draging) {
                        const evx = ev.clientX;
                        const evy = ev.clientY;
                        const clipX = tsx + evx - ex;
                        const clipY = tsy + evy - ey;

                        if (clipX < 0) {
                            this.sx = 0;
                        }
                        else if (clipX + this.sWidth > this.controlClientWidth) {
                            this.sx = this.controlClientWidth - this.sWidth;
                        }
                        else {
                            this.sx = clipX;
                        }

                        if (clipY < 0) {
                            this.sy = 0;
                        }
                        else if (clipY + this.sHeight > this.controlClientHeight) {
                            this.sy = this.controlClientHeight - this.sHeight;
                        }
                        else {
                            this.sy = clipY;
                        }
                        this.cutImg();
                    }

                };
                document.onmouseup = () => {
                    this.draging = false;
                    e.target.style.cursor = "auto";
                }
            }
        },
        savaAvatar() {
            const clip = document.querySelector('#clip');
            const clipContext = clip.getContext('2d');
            const image = new Image();
            image.src = this.imgUrl;
           /* console.log(image);*/
            image.onload = () => {
                clip.width = this.sWidth;
                clip.height = this.sHeight;
                clipContext.drawImage(image, this.sx, this.sy, this.sWidth, this.sHeight,
                    0, 0, this.sWidth, this.sHeight);
               
                bus.$emit(`${this.busEvent}`, clip.toDataURL());
            }
        },
        changeRange(e) {
            this.scale = e.target.value;
        }
    }
}