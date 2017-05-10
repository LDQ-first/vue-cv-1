<template>
    <div id="addLink">
        <button class="btn link" @click.prevent="LinkDialogVisible = true">添加链接</button>
        <div id="LinkDialog" v-show="LinkDialogVisible">
            <h3>添加链接</h3>
            <input type="text" class="link-url" :placeholder="addData.linkPlaceholder" v-model.trim="addData.link">
            <input type="text" class="link-title" :placeholder="addData.titlePlaceholder" v-model.trim="addData.title">
            <div class="controls">
                <button class="btn cancle" @click="LinkDialogVisible = false">取消</button>
                <button class="btn confirm" @click="confirm(n,i,ikey, field)">确认</button>
            </div>
        </div>
        <div class="link-mark" v-show="LinkDialogVisible"></div>
    </div>
</template>

<script>
    import './addLink.scss'
    import addLink from './addLink.js'
    export default addLink
</script>