<template>
   <button class="btns" @click.prevent="click">
       {{text}}
   </button>
</template>

<script>
    import './button.scss'
    import buttons from './button.js'
    export default buttons
</script>