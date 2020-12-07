<template>
  <div class="card">
    <v-card elevation="3">
      <v-card-title class="card-title" :class="classeTitulo">
        <strong>{{ titulo }}</strong>
      </v-card-title>
      <v-card-text class="pa-6">
        <v-row justify="space-between">
          <v-form ref="form" class="d-flex flex-row align-center flex-grow-1">
            <v-text-field
              type="number"
              class="pr-2 flex-grow-1"
              v-model="quantidade"
              label="Quantidade">
            </v-text-field>
            <v-btn v-if="exibirBotaoVender">Vender</v-btn>
            <v-btn v-else>Comprar</v-btn>
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
      return `${this.acao.nomeAcao.toUpperCase()} (Preço: R$ ${this.acao.valor})`
    },
    exibirBotaoVender () {
      return this.tipo === 'portifolio'
    }
  },
  created () {
    this.classeTitulo = this.definirClasseTitulo()
  },
  data () {
    return {
      quantidade: 0,
      classeTitulo: ''
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
