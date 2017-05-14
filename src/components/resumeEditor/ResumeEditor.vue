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
            <transition-group name="panels-show" class="panels-show" tag="div">
                <li v-for="(item, n) in resume.config" :key="item" v-show="item.field === selected">
                    <div class="resumeFieldTitle-ct" :style="{background: skinColor}">
                        <div class="resumeFieldTitle" :style="{color: (skinColor === '#FFF' ? '#000': '')}">
                            {{item.field}}
                        </div>
                    </div>
                    <div v-if="resume[item.field] instanceof Array">
                        <div class="subitem" v-for="(subitem, i) in resume[item.field]" :style="{borderColor: (skinColor.replace(/\sl[^\)]+\)/, '') === '#FFF' ? '' : skinColor.replace(/\sl[^\)]+\)/, ''))}">
                            <div class="resumeField" v-for="(value, key) in subitem">
                                <label>{{key}}</label>
                                <AddLink :ikey="key" :field="item.field" :i="i"></AddLink>
                                <textarea :class="`text-${item.field}-${i}-${key}`" type="text" :value="value" v-if="check(selected, key)"
                                    @input="changeResumeField(`resume.${item.field}.${i}.${key}`,$event.target.value)">
                                </textarea>
                                <input type="text" :class="`text-${item.field}-${i}-${key}`" :name="`text-${item.field}-${i}-${key}`" :value="value" v-else @input="changeResumeField(`resume.${item.field}.${i}.${key}`,$event.target.value)">
                                <UploadImg :ikey="key" :field="item.field" :i="i" v-if="check(selected, key)" text="上传图片"></UploadImg>
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
                    <button class="uploadAvatar" v-show="selected === 'profile'" @click="uploadAvatar">上传头像</button>
                    <UploadAvatar :visible="uploadAvatarvisible" @close="closeAvatar" :parent="selected"></UploadAvatar>
                </li>
            </transition-group>
        </ol>
    </div>
</template>

<script>
    import './resumeEditor.scss'
    import resumeEditor from './resumeEditor.js'
    export default resumeEditor
</script>

