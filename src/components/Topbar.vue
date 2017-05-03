<template>
    <div id="topbar">
        I am topbar
        <div class="wrapper">
            <span class="logo">Resumer</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'topbar'
    }
</script>

<style lang="scss">
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
    }
</style>