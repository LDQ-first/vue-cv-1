<template>
    <div id="resumePreview" :style="{background:skinColor}">
        <nav class="skin clearfix">
            <span class="text" @click="changeShowSkin(showSkin, !showSkin)">皮肤</span>
            <ol class="clearfix" v-show="showSkin==true">
                <li v-for="(color, key) in skinColors" @click="changeSkinColor(skinColor, color)" :style="{background: color}"></li>
            </ol>
        </nav>
        <section :style="{borderColor: (skinColor.replace(/\sl[^\)]+\)/, '') === '#FFF' ? '' : skinColor.replace(/\sl[^\)]+\)/, ''))}" 
        data-name="profile" v-show="resume.profile">
            <h1>
                {{resume.profile.name}}
            </h1>
            <h2>
                {{resume.profile.title}}
            </h2>
            <p>
                <small>{{resume.profile.city}}</small>
                <small>{{resume.profile.birthday}}</small>
            </p>
        </section>

        <section :style="{borderColor: (skinColor.replace(/\sl[^\)]+\)/, '') === '#FFF' ? '' : skinColor.replace(/\sl[^\)]+\)/, ''))}" 
        data-name="workHistory" v-show="resume.workHistory">
            <h2 :style="{background:skinColor}">工作经历</h2>
            <ol>
                <li v-for="item in resume.workHistory" v-show="item.company">
                    <h3>{{item.company}}</h3>
                    <p v-show="item.content">{{item.content}}</p>
                </li>
            </ol>
        </section>

        <section :style="{borderColor: (skinColor.replace(/\sl[^\)]+\)/, '') === '#FFF' ? '' : skinColor.replace(/\sl[^\)]+\)/, ''))}" 
        data-name="education" v-show="resume.education">
            <h2 :style="{background:skinColor}">毕业院校</h2>
            <ol>
                <li v-for="item in resume.education" v-show="item.school">
                    <h3>
                        {{item.school}}
                        <span v-show="item.content"> - {{item.content}}</span>
                    </h3>
                </li>
            </ol>
        </section>

        <section :style="{borderColor: (skinColor.replace(/\sl[^\)]+\)/, '') === '#FFF' ? '' : skinColor.replace(/\sl[^\)]+\)/, ''))}" 
        data-name="projects" v-show="resume.projects">
            <h2 :style="{background:skinColor}">项目情况</h2>
            <ol>
                <li v-for="item in resume.projects" v-show="item.name">
                    <h3>{{item.name}}</h3>
                    <p v-show="item.content"> {{item.content}} </p>
                </li>
            </ol>
        </section>

        <section :style="{borderColor: (skinColor.replace(/\sl[^\)]+\)/, '') === '#FFF' ? '' : skinColor.replace(/\sl[^\)]+\)/, ''))}" 
        data-name="awards" v-show="resume.awards">
            <h2 :style="{background:skinColor}">获奖情况</h2>
            <ol>
                <li v-for="item in resume.awards" v-show="item.name">
                    <h3>{{item.name}}</h3>
                    <p v-show="item.content"> {{item.content}} </p>
                </li>
            </ol>
        </section>

        <section :style="{borderColor: (skinColor.replace(/\sl[^\)]+\)/, '') === '#FFF' ? '' : skinColor.replace(/\sl[^\)]+\)/, ''))}" 
        data-name="contacts" v-show="resume.contacts">
            <h2 :style="{background:skinColor}">联系方式</h2>
            <table>
                <tr v-for="item in resume.contacts" v-show="item.contact">
                    <td>{{item.contact}}</td>
                    <td v-show="item.content"> {{item.content}} </td>
                </tr>
            </table>
        </section>
        <section :style="{borderColor: (skinColor.replace(/\sl[^\)]+\)/, '') === '#FFF' ? '' : skinColor.replace(/\sl[^\)]+\)/, ''))}" 
        data-name="others" v-show="resume.others">
            <h2 :style="{background:skinColor}">补充说明</h2>
            <p v-for="(item, key) in resume.others">{{item.replenish}}</p>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'resumePreview',
        computed: {
            showSkin() {
                return this.$store.state.showSkin;
            },
            skinColor() {
                return this.$store.state.skinColor;
            },
            skinColors() {
                return this.$store.state.skinColors;
            },
            resume() {
              return this.$store.state.resume;  
            }
        },
        created() {
            console.log(this.resume);
        },
        methods: {
            changeShowSkin(showSkin, value) {
                this.$store.commit('showSkin');
                this.$store.state.user.id ?  (
                this.$store.state.id ? 
                this.$store.commit('updateResume', {
                    showSkin,
                    value
                }):
                this.$store.commit('saveResume', {
                    showSkin,
                    value
                })) : '';
            },
            changeSkinColor(skinColor, color){
                this.$store.commit('changeSkinColor', color);
                this.$store.state.user.id ?  (
                this.$store.state.id ? 
                this.$store.commit('updateResume', {
                    skinColor,
                    color
                }):
                this.$store.commit('saveResume', {
                    skinColor,
                    color
                })) : '';
            }
        }
    }
</script>

<style lang="scss">
    #resumePreview {
        color: dodgerblue;
        background: #FFF;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
        padding: 2em;
        color: #333;
        line-height: 1.2;
        overflow: auto;
        * {
            box-sizing: border-box;
            font-variant: normal;
            font-weight: normal;
        }
        .skin {
            margin: 10px 0;
            .text {
                float: left;
                margin-right: 20px;
                line-height: 30px;
                background: #FFF;
                background: linear-gradient(-45deg, transparent 10px, #FFF 0) bottom right no-repeat,
                            linear-gradient(-135deg, transparent 10px, #FFF 0) top right no-repeat;
                background-size: 100% 50%;
                padding: 0 30px 0 20px;
                cursor: pointer;
            }
            li {
                float: left;
                cursor: pointer;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                border: 2px solid #AFD3EB;
                margin: 0 10px;

            }
        }
        section + section {
            margin-top: 2em;
        }
        p {
            white-space: pre-line;
        }
        section {
            background: #EEE;
            border-left: 6px solid;
            box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.5);
            padding: 15px;
            &:hover {
                box-shadow: 0 2px 10px 0px rgba(0, 0, 0, 0.5);
            }
            h2:first-child {
                display: inline-block;
                padding: 0.2em;
                margin-bottom: 0.5em;
            }
        }
        section[data-name="profile"] {
            h1 {
                margin: 0.1em 0;
                font-size: 4em;
            }
        }
        section[data-name="workHistory"],
        section[data-name="projects"],
        section[data-name="awards"] {
            li + li {
                margin-top: 1em;
            }
            li {
                h3 {
                    border-bottom: 1px solid #999;
                    padding-bottom: .3em;
                    margin-bottom: .3em;
                }
            }
        }
        section[data-name="education"] {
            li {
                line-height: 1.5;
            }
        }
        section[data-name="contacts"] {
            td:first-child {
                padding-right: 1em;
            }
        }
    }
</style>