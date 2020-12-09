<template>
  <div>
    <lista-acoes tipo="portifolio" :acoes="acoes" />
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
      return this.$store.getters.obterAcoesAdquiridas
    }
  }
}
</script>

<style>

</style>
