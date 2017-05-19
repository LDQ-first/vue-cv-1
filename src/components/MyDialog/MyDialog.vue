<template>
    <div class="dialogWrapper" v-show="visible">
        <div class="dialog">
            <div id="leftSide"></div>
            <div id="rightSide">
                 <header>
                    {{title}}
                    <Close @close="close"></Close>
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

