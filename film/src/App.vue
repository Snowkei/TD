<template>
  <div id="app">
<<<<<<< HEAD
    <!-- <img src="./assets/logo.png"> -->
=======
>>>>>>> 787479d4d674b6249397c5139b6794c4c569b97e
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
