<template>
    <div class="dialogWrapper" v-show="visible">
        <div class="dialog">
            <div id="leftSide"></div>
            <div id="rightSide">
                 <header>
                    {{title}}
                    <span class="close" @click="close"></span>
                </header>
                <main>
                    <slot></slot>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
   import './MyDialog.scss'
   import MyDialog from './MyDialog.js'
   export default MyDialog
</script>

