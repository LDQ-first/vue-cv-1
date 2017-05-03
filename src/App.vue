<!--<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>-->
<template>
  <div>
    <p>{{ text }}</p>
    <Topbar/>
    <ResumeEditor/>
    <ResumePreview/>
  </div>
</template>
<script>
  import Topbar from './components/Topbar'
  import ResumeEditor from './components/ResumeEditor'
  import ResumePreview from './components/ResumePreview'

  export default {
    name: 'app',
    data: function() {
      return {
        text: '你好'
      }
    },
    components: {Topbar, ResumeEditor, ResumePreview}
  }
</script>
<style>
  p {
    color: red;
  }
</style>

