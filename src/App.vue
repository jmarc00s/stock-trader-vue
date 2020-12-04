<template>
  <div id="app">
    <Navbar />
    <v-main>
      <router-view/>
    </v-main>
  </div>
</template>

<script>
import Navbar from './components/template/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main{
  padding: 12px;
}

</style>
