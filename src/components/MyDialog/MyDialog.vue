<template>
    <div class="dialogWrapper" v-show="visible">
        <div class="dialog">
            <header>
                {{title}}
                <span class="close" @click="close">X</span>
            </header>
            <main>
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script>
   import './MyDialog.scss'
   import MyDialog from './MyDialog.js'
   export default MyDialog
</script>

