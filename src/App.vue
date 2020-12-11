<template>
  <v-app>
    <Navbar />
    <v-content>
      <div class="px-16 py-8">
        <transition
          mode="out-in"
          name="slide">

          <router-view/>

        </transition>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/template/Navbar.vue'

export default {
  components: {
    Navbar
  },
  mounted () {
    this.$store.dispatch('obterAcoesIniciais')
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
@keyframes slide-out {
  from {transform: translateY(20px);}
  to {transform: translateY(0);}
}
@keyframes slide-in {
  from {transform: translateY(0px);}
  to {transform: translateY(20px);}
}

.slide-enter-active {
  animation: slide-in 0.3s ease-in;
}
.slide-leave-active {
  animation: slide-out 0.3s ease-out;
}

.slide-enter, .slide-leave-to {
  opacity: 0;
}
</style>
