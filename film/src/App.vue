<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import TabBar from './components/TabBar/TabBar'
import 'mint-ui/lib/style.css'
export default {
  name: 'App',
  components:{TabBar}
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>
