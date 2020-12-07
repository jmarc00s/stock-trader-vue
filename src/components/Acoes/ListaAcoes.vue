<template>
  <div class="d-flex flex-row">
    <v-row no-gutters>
      <v-col cols="12" sm="4" v-for="acao in acoes" :key="acao.nomeAcao">
        <CardAcao class="px-4 pb-2" :acao="acao" :tipo="tipo" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CardAcao from './CardAcao'
export default {
  props: {
    tipo: {
      required: true,
      type: String
    }
  },
  components: {
    CardAcao
  },
  data () {
    return {
      acoes: [
        { nomeAcao: 'Google', valor: 150, quantidadeDisponivel: 100 },
        { nomeAcao: 'BMW', valor: 150, quantidadeDisponivel: 45 },
        { nomeAcao: 'Magazine Luiza', valor: 200, quantidadeDisponivel: 23 },
        { nomeAcao: 'Twitter', valor: 400, quantidadeDisponivel: 23 }
      ]
    }
  }
}
</script>

<style>

</style>
