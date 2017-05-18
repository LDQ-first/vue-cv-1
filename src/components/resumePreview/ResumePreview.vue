<template>
    <div id="resumePreview" :style="{background:skinColor}">
        <SkinColor></SkinColor>
        <section :style="{borderColor: (skinColor.replace(/\sl[^\)]+\)/, '') === '#FFF' ? '' : skinColor.replace(/\sl[^\)]+\)/, ''))}" 
        data-name="profile" v-show="resume.profile">
            <div v-if="true" class="resumeAvatar">
                <img :src="resumeAvatarSrc" >
            </div>
            <h1>
                {{resume.profile.name}}
            </h1>
            <h2>
                {{resume.profile.title}}
            </h2>
            <h2 v-if="resume.profile.jobIntension">
                <span>求职意向: </span>
               {{resume.profile.jobIntension}}
            </h2>
            <h3 v-if="resume.profile.city">
                <span>所在地: </span>
                {{resume.profile.city}}
            </h3>
            <h3>
                {{resume.profile.birthday}}
            </h3>
            <a :href="resume.profile.userSite" target="new" style="margin: 10px 0; cursor: pointer"
            v-if="resume.profile.userSite">
                个人博客/网站
            </a>
        </section>

        <section :style="{borderColor: (skinColor.replace(/\sl[^\)]+\)/, '') === '#FFF' ? '' : skinColor.replace(/\sl[^\)]+\)/, ''))}" 
        data-name="workHistory" v-show="resume.workHistory">
            <h2 :style="{background:skinColor}">工作经历</h2>
            <ol>
                <li v-for="item in resume.workHistory" v-show="item.company">
                    <h3 v-html="item.company">{{item.company}}</h3>
                    <p v-show="item.content" v-html="item.content">{{item.content}}</p>
                </li>
            </ol>
        </section>

        <section :style="{borderColor: (skinColor.replace(/\sl[^\)]+\)/, '') === '#FFF' ? '' : skinColor.replace(/\sl[^\)]+\)/, ''))}" 
        data-name="education" v-show="resume.education">
            <h2 :style="{background:skinColor}">毕业院校</h2>
            <ol>
                <li v-for="item in resume.education" v-show="item.school">
                    <h3 v-html="item.school">{{item.school}}</h3>
                    <h3 v-show="item.content">-</h3>
                    <h3 v-show="item.content" v-html="item.content">{{item.content}}</h3>
                </li>
            </ol>
        </section>

        <section :style="{borderColor: (skinColor.replace(/\sl[^\)]+\)/, '') === '#FFF' ? '' : skinColor.replace(/\sl[^\)]+\)/, ''))}" 
        data-name="projects" v-show="resume.projects">
            <h2 :style="{background:skinColor}">项目情况</h2>
            <ol>
                <li v-for="item in resume.projects" v-show="item.name">
                    <h3 v-html="item.name">{{item.name}}</h3>
                    <p v-show="item.content" v-html="item.content"> {{item.content}} </p>
                </li>
            </ol>
        </section>

        <section :style="{borderColor: (skinColor.replace(/\sl[^\)]+\)/, '') === '#FFF' ? '' : skinColor.replace(/\sl[^\)]+\)/, ''))}" 
        data-name="awards" v-show="resume.awards">
            <h2 :style="{background:skinColor}">获奖情况</h2>
            <ol>
                <li v-for="item in resume.awards" v-show="item.name">
                    <h3 v-html="item.name">{{item.name}}</h3>
                    <p v-show="item.content" v-html="item.content"> {{item.content}} </p>
                </li>
            </ol>
        </section>

        <section :style="{borderColor: (skinColor.replace(/\sl[^\)]+\)/, '') === '#FFF' ? '' : skinColor.replace(/\sl[^\)]+\)/, ''))}" 
        data-name="contacts" v-show="resume.contacts">
            <h2 :style="{background:skinColor}">联系方式</h2>
            <table>
                <tr v-for="item in resume.contacts" v-show="item.contact">
                    <td v-html="item.contact">{{item.contact}}</td>
                    <td v-show="item.content" v-html="item.content"> {{item.content}} </td>
                </tr>
            </table>
        </section>
        <section :style="{borderColor: (skinColor.replace(/\sl[^\)]+\)/, '') === '#FFF' ? '' : skinColor.replace(/\sl[^\)]+\)/, ''))}" 
        data-name="others" v-show="resume.others">
            <h2 :style="{background:skinColor}">补充说明</h2>
            <p v-for="(item, key) in resume.others" v-html="item.replenish">{{item.replenish}}</p>
        </section>
    </div>
</template>

<script>
    import './resumePreview.scss'
    import resumePreview from './ResumePreview.js'
    export default resumePreview
</script>
