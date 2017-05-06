<template>
    <div id="resumePreview" :style="{background:skinColor}">
        <nav class="skin">
            <span class="text">背景</span>
            <ol class="clearfix">
                <li v-for="(color, key) in skinColors" @click="changeSkinColor(skinColor,color)" 
                :style="{background: color}"></li>
            </ol>
        </nav>
        <section data-name="profile" v-show="resume.profile">
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

        <section data-name="workHistory" v-show="resume.workHistory">
            <h2>工作经历</h2>
            <ol>
                <li v-for="item in resume.workHistory" v-show="item.company">
                    <h3>{{item.company}}</h3>
                    <p v-show="item.content">{{item.content}}</p>
                </li>
            </ol>
        </section>

        <section data-name="education" v-show="resume.education">
            <h2>毕业院校</h2>
            <ol>
                <li v-for="item in resume.education" v-show="item.school">
                    <h3>
                        {{item.school}}
                        <span v-show="item.content"> - {{item.content}}</span>
                    </h3>
                </li>
            </ol>
        </section>

        <section data-name="projects" v-show="resume.projects">
        <h2>项目情况</h2>
        <ol>
            <li v-for="item in resume.projects" v-show="item.name">
                <h3>{{item.name}}</h3>
                <p v-show="item.content"> {{item.content}} </p>
            </li>
        </ol>
        </section>

        <section data-name="awards" v-show="resume.awards" >
        <h2>获奖情况</h2>
        <ol>
            <li v-for="item in resume.awards" v-show="item.name">
                <h3>{{item.name}}</h3>
                <p v-show="item.content"> {{item.content}} </p>
            </li>
        </ol>
        </section>

        <section data-name="contacts" v-show="resume.contacts">
            <h2>联系方式</h2>
            <table>
                <tr v-for="item in resume.contacts" v-show="item.contact">
                    <td>{{item.contact}}</td>
                    <td v-show="item.content"> {{item.content}} </td>
                </tr>
            </table>
        </section>
    </div>
</template>

<script>
    /*import '../theme/theme_00.css'*/
    
    export default {
        name: 'resumePreview',
        computed: {
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
            changeSkinColor(skinColor, color){
                console.log(color);
                console.log(this.skinColor);
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
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
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
            }
            li {
                float:left;
                cursor: pointer;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                border: 2px solid #000;
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
            h2:first-child {
                background: #DDD;
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