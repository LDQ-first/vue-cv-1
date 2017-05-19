<template>
   <button class="btns" @click="click">
       {{text}}
       <slot></slot>
   </button>
</template>

<script>
    import './button.scss'
    import buttons from './button.js'
    export default buttons
</script>