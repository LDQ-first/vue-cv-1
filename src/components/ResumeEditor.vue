<template>
    <div id="resumeEditor">
        <nav>
            <ol>
                <li v-for="(item, index) in resume.config" :class="{active: item.field === selected}" @click="selected = item.field">
                    <svg class="icon">
                        <use :xlink:href="`#icon-${item.icon}`"></use>
                    </svg>
                </li>
            </ol>
        </nav>
        <ol class="panels">
            <li v-for="item in resume.config" v-show="item.field === selected">
                <div v-if="resume[item.field] instanceof Array">
                    <div class="subitem" v-for="(subitem, i) in resume[item.field]">
                        <div class="resumeField" v-for="(value, key) in subitem">
                            <label>{{key}}</label>
                            <input type="text" :value="value" @input="changeResumeField(`resume.${item.field}.${i}.${key}`,$event.target.value)">
                        </div>
                        <hr>
                    </div>
                </div>
                <div v-else class="resumeField" v-for="(value, key) in resume[item.field]">
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
            }
        },
        methods: {
            changeResumeField(path, value) {
                console.log(this.$store.state.user.id);
                console.log(this.$store.state.id);
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
        overflow: auto;
        nav {
            width: 80px;
            background: black;
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
            li {
                padding: 24px;
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
            }
        }
    }
</style>