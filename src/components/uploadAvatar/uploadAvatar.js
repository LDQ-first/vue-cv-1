

export default {
    name: 'uploadAvatar',
    data(){
        return {
            px: 0,
            py: 0,
            sx: 15,
            sy: 15,
            sHeight: 150,
            sWidth: 150,
            getImgWidth: 0,
            getImgHeight: 0,
           
            controlOffsetHeight: 0,
            controlOffsetWidth: 0,
            controlOffsetLeft: 0,
            controlOffsetTop: 0,
            
            /*editHeight: 0,
            editWidth: 0,*/
            editDisplay: 'none',
            
            /*showEditBackground: '',*/
            imgUrl: '',
            draging: false,
            startX: 0,
            startY: 0
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
            this.controlOffsetHeight = control.offsetHeight;
            this.controlOffsetWidth = control.offsetWidth;
            img.onload = () => {
                const imgWidth = img.width;
                const imgHeight = img.height;
                console.log(img.width);
                console.log(img.height);
                if(imgWidth < this.controlOffsetWidth && imgHeight < this.controlOffsetHeight) {
                    this.getImgWidth = imgWidth;
                    this.getImgHeight = imgHeight;
                }
                else {
                    const pWidth = imgWidth / (imgHeight / this.controlOffsetHeight);
                    const pHeight = imgHeight / (imgWidth / this.controlOffsetWidth);
                    this.getImgWidth = imgWidth > imgHeight ? this.controlOffsetWidth : pWidth;
                    this.getImgHeight = imgHeight > imgWidth ? this.controlOffsetHeight: pHeight;
                }
                console.log('this.getImgWidth: ', this.getImgWidth);
                this.px = (this.controlOffsetWidth - imgWidth) / 2 ;
                this.py = (this.controlOffsetHeight - imgHeight) / 2;
                console.log('this.px: ', this.px);
                canvas.drawImage(img, 0, 0, imgWidth, imgHeight);
                this.imgUrl = getImg.toDataURL();
                this.cutImg();
                this.drag();
            }
        },
        cutImg() {
            this.editDisplay = 'block';
            const edit = document.querySelector('#edit');
            const editCanvas = edit.getContext('2d');
            editCanvas.fillStyle='rgba(0, 0, 0, 0.5)';
            editCanvas.fillRect(0, 0, this.getImgWidth, this.getImgHeight);
            editCanvas.clearRect(this.sx, this.sy, this.sHeight, this.sWidth);


        },
        drag() {
            
        },
        dragMove(e) {
            console.log(e);
            const control = document.querySelector('.control');
            this.controlOffsetLeft = control.offsetLeft;
            this.controlOffsetTop = control.offsetTop;
          //  const pageX = e.pageX - (this.controlOffsetLeft + )
        },
        dragDown() {

        },


    }
}