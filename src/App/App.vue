<template>
<div>
  <div class="page">
    <header>
      <Topbar :defaultState="this.defaultState"/>
    </header>
    <main>
      <ResumeEditor/>
     <transition name="fade" mode="out-in">
        <router-view></router-view>
     </transition>
     
    </main>
      <Rebuild></Rebuild>
      <transition name="message">
         <Message v-show="isShowMessage" :type="type" :message="message" :event="event" @close="isShowMessage = false"></Message>
      </transition>
  </div>
</div>
</template>
<script>
  import 'normalize.css/normalize.css'
  import '../assets/reset.css'
  import './App.scss'

  import App from './App.js'
  export default App
</script>


