<template>    
    <!--<div id="rebuild" :style="{background: (skinColor === '#FFF' ? '#000': skinColor)}" 
    @mouseenter="showRebuildText=true" @mouseleave="showRebuildText=false" 
    @click="rebuild(message)">
        <transition name="rebuild" tag="div">
            <span class="rebuild" v-show="showRebuildText">Rebuild</span>
        </transition>
    </div>-->
    <Buttons id="rebuild" :style="{background: (skinColor === '#FFF' ? '#000': skinColor)}" 
    @mouseenter="showRebuildText=true" @mouseleave="showRebuildText=false" 
    @click="rebuild(message)">
        <transition name="rebuild" tag="div">
            <span class="rebuild" v-show="showRebuildText">Rebuild</span>
        </transition>
    </Buttons>
</template>

<script>
    import './rebuild.scss'
    import rebuild from './rebuild.js'
    export default rebuild
</script>