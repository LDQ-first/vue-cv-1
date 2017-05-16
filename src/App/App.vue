<template>
<div>
  <div class="page">
    <header>
      <Topbar :defaultState="this.defaultState"/>
    </header>
    <main>
      <ResumeEditor/>
     <!-- <ResumePreview/>-->
     <router-view></router-view>
    </main>
      <Rebuild></Rebuild>
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


