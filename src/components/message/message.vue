<template>
    <div id="messageWrapper" :style="messageWrapperStyle">
        <div class="message" :style="messageStyle" :class="messageClass">
            <header>
                <h3>{{title}}</h3>
                <Close @close="close"></Close>
            </header>
            <p>{{message}}</p>
            <div class="messageControl" v-show="type==='confirm'">
               <Buttons class="cancle" @click="close" text="取消"></Buttons>
               <Buttons class="confirm" @click="confirm(event)" text="确认"></Buttons>
                
            </div>
        </div>
    </div>
</template>

<script>
    import './message.scss'
    import message from './message.js'
    export default message
</script>