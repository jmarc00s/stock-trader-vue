<template>
  <div>
    <ListaAcoes tipo="acao" :acoes="acoes" />
  </div>
</template>

<script>
import ListaAcoes from '../components/Acoes/ListaAcoes'
export default {
  components: {
    ListaAcoes
  },
  computed: {
    acoes () {
      return this.$store.getters.obterAcoes
    }
  }
}
</script>

<style>

</style>
