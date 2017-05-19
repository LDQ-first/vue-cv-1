<template>
   <button class="btns" @click="click" ref="btns">
       {{text}}
       <slot></slot>
       <canvas id="canvas" @click="press" ></canvas>
   </button>
</template>

<script>
    import './button.scss'
    import buttons from './button.js'
    export default buttons
</script>