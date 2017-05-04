<template>
    <div id="topbar">
        <div class="wrapper">
            <span class="logo">Resumer</span>
            <div class="actions">
                <a href="#" class="button primary" 
                @click.prevent="signUpDialogVisible = true">注册</a>
                <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
                    我是slot内容
                </MyDialog>
                <a href="#" class="button">登录</a>
                <button class="button primary">保存</button>
                <button class="button">预览</button>
            </div>
        </div>
    </div>
</template>

<script>
    import MyDialog from './MyDialog.vue'
    export default {
        name: 'Topbar',
        data() {
            return {
                signUpDialogVisible: false
            }
        },
        components: {
            MyDialog
        }
    }
</script>

<style scoped lang="scss">
    #topbar {
        color: lightseagreen;
        background: #FFF;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
        height: 64px;
        .wrapper {
            min-width: 1024px;
            max-width: 1440px;
            margin: 0 auto;
            height: 64px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 16px;
        }
        .logo {
            font-size: 24px;
            color: #000;
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
            &:hover {
                box-shadow: 1px 1px 1px hsla(0, 0, 0, 0.50);
            }
            &.primary {
                background: #02af5f;
                color: #FFF;
            }
        }
    }
</style>