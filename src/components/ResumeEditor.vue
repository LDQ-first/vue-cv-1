<template>
    <div id="resumeEditor">
        <nav :style="{background: skinColor}">
            <ol>
                <li v-for="(item, index) in resume.config" :class="{active: item.field === selected}" 
                @click="selected = item.field" :style="{color: (skinColor === '#FFF' ? '#000': '')}">
                    <svg class="icon">
                        <use :xlink:href="`#icon-${item.icon}`"></use>
                    </svg>
                </li>
            </ol>
        </nav>
        <ol class="panels">
            <li v-for="item in resume.config" v-show="item.field === selected">
                <div class="resumeFieldTitle-ct" :style="{background: skinColor}">
                    <div class="resumeFieldTitle" :style="{color: (skinColor === '#FFF' ? '#000': '')}">   
                            {{item.field}}
                    </div>
                </div>
                <div v-if="resume[item.field] instanceof Array">
                    <div class="subitem" v-for="(subitem, i) in resume[item.field]">
                        <div class="resumeField" v-for="(value, key) in subitem">
                            <label>{{key}}</label>
                            <input type="text" :value="value" @input="changeResumeField(`resume.${item.field}.${i}.${key}`,$event.target.value)">
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
            changeResumeField(path, value) {
               /* console.log(this.$store.state.user.id);
                console.log(this.$store.state.id);*/

                this.$store.state.user.id ?  (
                this.$store.state.id ? 
                this.$store.commit('updateResume', {
                    path,
                    value
                }):
                this.$store.commit('saveResume', {
                    path,
                    value
                })) : '';
            },
            deleteResumeField(field, i) {
                console.log(field);
                console.log(i);
                this.$store.commit('deleteResumeField', { field, i });
                console.log(`resume.${field}`, this.$store.state.resume[field]);
                this.changeResumeField(`resume.${field}`, this.$store.state.resume[field]);
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
        background: #FFF;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: row;
        nav {
            width: 80px;
            /*background: black;*/
            color: white;
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
                        background: #FFF;
                        color: black;
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
            li {
               .resumeFieldTitle-ct {     
                    padding-top: 16px;  
                    margin-bottom: 15px;
                    height: 64px;
                   /* background: #42b983;*/
                   .resumeFieldTitle {
                        line-height: 64px;
                        margin-top: -16px;
                        padding: 0 24px;
                        color: #FFF;
                    }     
               }
                .subitem {
                    padding: 10px 0;
                    margin: 10px 0;
                    border-bottom: 2px solid #000;
                    margin: 0px 24px;
                    &:first-child {
                        padding-top: 0;
                    }
                }
                .profile {
                    margin: 0px 24px;
                }
                .resumeField {
                    label {
                        display: block;
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
                    background: #DDD;
                    color: #222;
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    vertical-align: center;
                    &.add {
                        background: #1390E6;
                        margin: 10px 24px;
                    }
                }
            }
        }
    }
</style>