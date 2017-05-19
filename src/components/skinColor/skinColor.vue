<template>
     <nav class="skin clearfix">
        <span class="text" @click="changeShowSkin(showSkin, !showSkin)" title="点击展示">皮肤</span>
        <transition name="skin-show">
           <!-- <ol class="clearfix" v-show="showSkin==true">
                <li v-for="(color, key) in skinColors" @click="changeSkinColor(skinColor, color)" :style="{background: color}"></li>
            </ol>-->
            <ol class="clearfix" v-show="showSkin==true">
                <li v-for="(color, key) in skinColors">
                     <Buttons class="color" @click="changeSkinColor(skinColor, color)" :style="{background: color}"></Buttons>
                </li>
            </ol>
           <!-- <Buttons v-show="showSkin==true" v-for="(color, key) in skinColors" 
            @click="changeSkinColor(skinColor, color)" :style="{background: color}"></Buttons>-->
        </transition>
    </nav>
</template>

<script>
    import './skinColor.scss'
    import skinColor from './skinColor.js'
    export default skinColor
</script>