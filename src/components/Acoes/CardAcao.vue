<template>
  <div class="card">
    <v-card elevation="3">
      <v-card-title class="card-title" :class="classeTitulo">
        <strong>{{ titulo }}</strong>
      </v-card-title>
      <v-card-text class="pa-6">
        <v-row justify="space-between">
          <v-form v-model="valid" ref="form" class="d-flex flex-row align-center flex-grow-1">
            <v-text-field
              :rules="quantidadeRules"
              type="number"
              class="pr-2 flex-grow-1"
              v-model.number="quantidade"
              label="Quantidade">
            </v-text-field>
            <v-btn v-if="exibirBotaoVender" :disabled="desabilitarBotoes" @click="vender(acao.acao, quantidade)">Vender</v-btn>
            <v-btn v-else @click="comprar(acao, quantidade)" :disabled="desabilitarBotoes">Comprar</v-btn>
          </v-form>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    acao: {
      required: true
    },
    tipo: {
      required: true
    }
  },
  computed: {
    titulo () {
      if (this.tipo === 'acao') {
        return `${this.acao.nomeAcao.toUpperCase()} (Preço: R$ ${this.acao.valor})`
      }
      return `${this.acao.acao.nomeAcao.toUpperCase()} (Preço: R$ ${this.acao.acao.valor})`
    },
    exibirBotaoVender () {
      return this.tipo === 'portifolio'
    },
    desabilitarBotoes () {
      return this.quantidade <= 0 || !this.valid
    },
    quantidadeRules () {
      if (this.tipo === 'acao') return [v => (this.tipo === 'acao' && v <= this.acao.quantidadeDisponivel) || 'Quantidade indisponível']

      return [v => (this.tipo === 'portifolio' && v <= this.acao.quantidade) || 'Quantidade indisponível']
    }
  },
  created () {
    this.classeTitulo = this.definirClasseTitulo()
  },
  data () {
    return {
      valid: true,
      classeTitulo: '',
      quantidade: this.acao.quantidade ?? 0
    }
  },
  methods: {
    definirClasseTitulo () {
      switch (this.tipo) {
        case 'acao':
          return 'card-title-acao'
        case 'portifolio':
          return 'card-title-portifolio'
        default:
          return ''
      }
    },
    comprar (acao, quantidade) {
      this.$store.dispatch('comprarAcao', { acao, quantidade })
      this.quantidade = 0
    },
    vender (acao, quantidade) {
      this.$store.dispatch('venderAcao', { acao, quantidade })
    }
  }

}
</script>

<style scoped>
  .card {
    min-width: 500px;
  }
  .card-title {
    color: white;
  }
  .card-title-acao{
    background: rgb(46,125,50);
  }
  .card-title-portifolio{
    background: rgb(21,101,192);
  }
  .card-form {
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
</style>
