<template>
    <div id="resumeEditor">
        <nav :style="{background: skinColor}">
            <ol>
                <li v-for="(item, index) in resume.config" :class="{active: item.field === selected}" @click="selected = item.field" :style="{color: (skinColor === '#FFF' ? '#000': ''), borderColor: (skinColor.replace(/\sl[^\)]+\)/, '') === '#FFF' ? '' : skinColor.replace(/\sl[^\)]+\)/, ''))}">
                    <svg class="icon">
                        <use :xlink:href="`#icon-${item.icon}`"></use>
                    </svg>
                </li>
            </ol>
        </nav>
        <ol class="panels">
            <transition-group name="panels-show" tag="div">
                <li v-for="item in resume.config" :key="item" v-show="item.field === selected">
                    <div class="resumeFieldTitle-ct" :style="{background: skinColor}">
                        <div class="resumeFieldTitle" :style="{color: (skinColor === '#FFF' ? '#000': '')}">
                            {{item.field}}
                        </div>
                    </div>
                    <div v-if="resume[item.field] instanceof Array">
                        <div class="subitem" v-for="(subitem, i) in resume[item.field]" :style="{borderColor: (skinColor.replace(/\sl[^\)]+\)/, '') === '#FFF' ? '' : skinColor.replace(/\sl[^\)]+\)/, ''))}">
                            <div class="resumeField" v-for="(value, key) in subitem">
                                <label>{{key}}</label>
                                <textarea class="textarea" type="text" :value="value" v-if="selected=='workHistory'&&key=='content' || selected=='education'&&key=='content' || selected=='projects'&&key=='content' || selected=='awards'&&key=='content' || selected=='others'"
                                    @input="changeResumeField(`resume.${item.field}.${i}.${key}`,$event.target.value)" name="textarea">
                                </textarea>
                                <input type="text" :value="value" v-else @input="changeResumeField(`resume.${item.field}.${i}.${key}`,$event.target.value)">
                                <a href="javascript:;"  class="uploadImg" v-show="selected=='others'">上传图片
                                    <input id="photoFileUpload" type="file" accept="image/jpg, image/png, image/jpeg, image/gif" 
                                     @change="uploadImg($event.target)">
                                </a>
                            </div>
                            <button class="button delete" @click="deleteResumeField(`${item.field}`, `${i}`)">删除</button>
                        </div>
                        <button class="button add" @click="addResumeField(`${item.field}`)">增加</button>
                    </div>
                    <div v-else class="resumeField profile" v-for="(value, key) in resume[item.field]">
                        <label>{{key}}</label>
                        <!--<input type="text" v-model="resume[item.field][key]">-->
                        <input type="text" :value="value" @input="changeResumeField(`resume.${item.field}.${key}`, $event.target.value)">
                    </div>
                </li>
            </transition-group>
        </ol>
    </div>
</template>

<script>
    export default {
        name: 'resumeEditor',
        computed: {
            skinColor() { 
                return this.$store.state.skinColor;
            },
            selected: {
                get() {
                    return this.$store.state.selected;
                },
                set(value) {
                    this.changeResumeField('selected', value);
                    return this.$store.commit('switchTab', value);
                }
            },
            resume() {
                return this.$store.state.resume;
            },
        },
        methods: {
            uploadImg(input){
                if (input.files.length > 0) {
                    console.log(input);
                    console.log(input.files);
                    console.log(input.files[0].name);
                    this.$store.commit('uploadImg', input);
                }

            },
            changeResumeField(path, value) {
                const imgReg = /<img[^>]+>/g;
                if(!value.match(imgReg)) {
                    const linkReg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
                    value = value.replace(linkReg, "<a href='$1$2' target='new'>$1$2</a>");
                }
                
                /**/
              
                this.$store.state.user.id ?  (
                this.$store.state.id ? 
                this.$store.commit('updateResume', {
                    path,
                    value
                }):
                this.$store.commit('saveResume', {
                    path,
                    value
                })) : 
                this.$store.commit('editResume', {
                    path,
                    value
                });
            },
            deleteResumeField(field, i) {
                if(this.$store.state.resume[field].length != 1) {
                    this.$store.commit('deleteResumeField', { field, i });
                    console.log(`resume.${field}`, this.$store.state.resume[field]);
                    this.changeResumeField(`resume.${field}`, this.$store.state.resume[field]);
                }
                else {
                    console.log('最后一个不可删');
                }
            },
            addResumeField(field) {
                this.$store.commit('addResumeField', field);
                console.log(this.$store.state.resume[field]);
                this.changeResumeField(`resume.${field}`, this.$store.state.resume[field]);
            }
        }
    }
</script>

<style lang="scss" scoped>
    #resumeEditor {
        background: #EFE8DE;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: row;
        nav {
            width: 80px;
            color: white;
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
            ol {
                li {
                    height: 48px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 16px;
                    margin-bottom: 16px;
                    cursor: pointer;
                    &.coloWhite {
                        color: black;
                    }
                    &.active {
                        background: rgba(255, 255, 255, 0.4);
                        color: black;
                        border-right: 6px solid;
                    }
                    svg.icon {
                        width: 24px;
                        height: 24px;
                    }
                }
            }
        }
        .panels {
            flex-grow: 1;
            overflow: auto;
            .panels-show-enter-active {
                transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0) 0.6s;
                transform: translateY(0);
                opacity: 1;
            }
            .panels-show-leave-active {
                transition: all 0.6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
                transform: translateY(-100%);
                opacity: 0;
            }
            .panels-show-enter {
                transform: translateY(100%);
            }
            .panels-show-leave {
               transform: translateY(0);
            }
            li {
                .resumeFieldTitle-ct {
                    padding-top: 16px;
                    margin-bottom: 15px;
                    height: 64px;
                    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
                    .resumeFieldTitle {
                        line-height: 64px;
                        margin-top: -16px;
                        padding: 0 24px;
                        color: #FFF;
                    }
                }
                .subitem {
                    padding: 10px;
                    margin: 10px 14px;
                    border-left: 6px solid;
                    box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.5);
                    background: #EEE;
                    &:hover {
                        box-shadow: 0 2px 10px 0px rgba(0, 0, 0, 0.5);
                    }
                }
                .profile {
                    margin: 0px 24px;
                }
                .uploadImg {
                    z-index: -1;
                    margin: 10px 0;
                    cursor: pointer;
                    padding: 4px 10px;
                    display: inline-block;
                    /*height: 20px;
                    line-height: 20px;*/
                    background: #D0EEFF;
                    border: 1px solid #99D3F5;
                    border-radius: 4px;
                    position: relative;
                    &:hover {
                        text-decoration: none;
                    }
                    input[type=file] {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 120px;
                        height: 28px;
                        opacity: 0;
                        font-size: 0;
                        cursor: pointer;
                    }
                }
                .resumeField {
                    label {
                        display: block;
                    }
                    textarea {
                        resize: vertical;
                        height: 150px;
                        width: 100%;
                        margin: 16px 0;
                        padding: 8px;
                    }
                    input[type=text] {
                        margin: 16px 0;
                        border: 1px solid #DDD;
                        box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.25);
                        width: 100%;
                        height: 40px;
                        padding: 0 8px;
                    }
                }
                .button {
                    width: 72px;
                    height: 32px;
                    border: none;
                    cursor: pointer;
                    font-size: 18px;
                    background: #6DCBA0;
                    color: #222;
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    vertical-align: center;
                    box-shadow: 1px 1px 2px hsla(0, 0, 0, 0.50);
                    &.add {
                        background: #1390E6;
                        margin: 10px 24px;
                        &:hover {
                            box-shadow: 1px 1px 10px hsla(0, 0, 0, 0.50);
                        }
                    }
                    &.delete {
                        &:hover {
                            box-shadow: 1px 1px 10px hsla(0, 0, 0, 0.50);
                        }
                    }
                }
            }
        }
    }
</style>