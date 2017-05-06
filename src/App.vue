<template>
<div>
  <div class="page">
    <header>
      <Topbar :defaultState="this.defaultState"/>
    </header>
    <main>
      <ResumeEditor/>
      <ResumePreview/>
    </main>
  </div>
</div>
</template>
<script>
  import 'normalize.css/normalize.css'
  import './assets/reset.css'

  import Topbar from './components/Topbar'
  import ResumeEditor from './components/ResumeEditor'
  import ResumePreview from './components/ResumePreview'
  import icons from './assets/icons'

  import store from './store/index'
  import AV from './lib/leancloud'
  import getAVUser from './lib/getAVUser'

  export default {
    name: 'app',
    data() {
      return {
        defaultState: {},
      }
    },
    store,
    components: {Topbar, ResumeEditor, ResumePreview},
    created(){
      document.body.insertAdjacentHTML('afterbegin', icons);
      Object.assign(this.defaultState , this.$store.state);
      let user = localStorage.getItem('user');
      if(user) {
        user = JSON.parse(user);
        this.$store.commit('setUser', user);
        this.$store.commit('fetchResume');
      }
    }
  }
</script>
<style lang="scss">
  .page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #BED7E4;
    >main {
      flex-grow: 1;
      min-width: 1024px;
      max-width: 1440px;
      margin-top: 16px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
      width: 100%;
      align-self: center;
    }
  }
  #resumeEditor {
      min-width: 35%;
      background: #444;
    }
  #resumePreview {
    width: 61.66667%;
    background: #777;
    flex-grow: 1;
    margin-left: 16px;
  }
  svg.icon {
    height: 1em;
    width: 1em;
    fill: currentColor;
    vertical-align: -0.1em;
    font-size: 16px;
  }
</style>

