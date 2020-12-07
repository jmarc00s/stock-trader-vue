<template>
  <div class="d-flex flex-row">
    <CardAcao class="px-4" v-for="acao in acoes" :key="acao.nomeAcao" :acao="acao" />
  </div>
</template>

<script>
import CardAcao from './CardAcao'
export default {
  components: {
    CardAcao
  },
  data () {
    return {
      acoes: [
        { nomeAcao: 'Google', valor: 150, quantidadeDisponivel: 100 },
        { nomeAcao: 'BMW', valor: 150, quantidadeDisponivel: 45 },
        { nomeAcao: 'Magazine Luiza', valor: 200, quantidadeDisponivel: 23 }
      ]
    }
  }
}
</script>

<style>

</style>
