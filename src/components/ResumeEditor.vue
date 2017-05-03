<template>
    <div id="resumeEditor">
        <nav>
            <ol>
                <li v-for="(item, index) in resume.visibleItems"
                 :class="{active: item === selected}"
                 @click="selected = item">
                </li>
            </ol>
            <ol class="panels">
                <li v-for="item in resume.visibleItems" v-show="item === selected">
                    {{ resume[item] }}
                </li>
            </ol>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'resumeEditor',
        data(){
            return {
                selected: 'bio',
                resume: {
                    visibleItems: ['bio', 'work history', 'education',
                                    'projects', 'awards', 'contacts', 'others'],
                    bio: {
                        name: '',
                        city: '',
                        title: ''
                    },
                    'work history': [],
                    education: [],
                    projects: [],
                    awards: [],
                    contacts: [],
                    others: []
                }
            }
        }
    }
</script>

<style lang="scss">
    #resumeEditor {
        color: red;
        background: #FFF;
        box-shadow: 0 1px 3px rgba(0,0,0,0.25);
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
                    &.active {
                        background: #FFF;
                        color: black;
                    }
                }
            }
        }
    }
</style>