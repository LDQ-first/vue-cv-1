<template>
    <div id="addLink">
        <!--<button class="btn link" @click.prevent="LinkDialogVisible = true">添加链接</button>-->
        <Buttons class="link" @click="LinkDialogVisible = true" text="添加链接"></Buttons>
        <transition name="link" mode="in-out">
        <div id="LinkDialog" v-show="LinkDialogVisible" :style="{background: (skinColor === '#FFF' ? '#CCC': skinColor)}">
            <header>
                <h3>添加链接</h3>
                <Close @close="close"></Close>
            </header>
            <span class="text">
                <input type="text" class="link-url" :placeholder="addData.linkPlaceholder" v-model.trim="addData.link">
                <span class="textBottom"></span>
            </span>
            <span class="text">
                <input type="text" class="link-title" :placeholder="addData.titlePlaceholder" v-model.trim="addData.title">
                <span class="textBottom"></span>
            </span>

           <!-- <input type="text" class="link-url" :placeholder="addData.linkPlaceholder" v-model.trim="addData.link">
            <input type="text" class="link-title" :placeholder="addData.titlePlaceholder" v-model.trim="addData.title">-->
            <div class="controls">
               <!-- <button class="btn cancle" @click="LinkDialogVisible = false">取消</button>
                <button class="btn confirm" @click="confirm(n,i,ikey, field)">确认</button>-->
                <Buttons class="cancle" @click="LinkDialogVisible = false" text="取消"></Buttons>
                <Buttons class="confirm" @click="confirm(n,i,ikey, field)" text="确认"></Buttons>
            </div>
        </div>
        </transition>
        <div class="link-mark" v-show="LinkDialogVisible"></div>
    </div>
</template>

<script>
    import './addLink.scss'
    import addLink from './addLink.js'
    export default addLink
</script>