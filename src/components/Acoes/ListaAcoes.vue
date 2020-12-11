<template>
  <div class="d-flex flex-row">
    <v-row no-gutters>
      <v-col cols="12" sm="4" v-for="acao in acoes" :key="acao.id">
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
    },
    acoes: {
      required: true,
      type: Array
    }
  },
  components: {
    CardAcao
  }
}
</script>

<style>

</style>
