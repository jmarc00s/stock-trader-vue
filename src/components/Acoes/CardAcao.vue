<template>
  <div class="card">
    <v-card elevation="3">
      <v-card-title class="card-title">
        <strong>{{ titulo }}</strong>
      </v-card-title>
      <v-card-text class="pa-6">
        <v-row justify="space-between" >
          <v-form ref="form" class="d-flex flex-row align-center">
            <v-text-field
              type="number"
              class="pr-2"
              v-model="quantidade"
              label="Quantidade">
            </v-text-field>
            <v-btn>Comprar</v-btn>
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
    }
  },
  computed: {
    titulo () {
      return `${this.acao.nomeAcao.toUpperCase()} (Preço: R$ ${this.acao.valor})`
    }
  },
  data () {
    return {
      quantidade: 0
    }
  }

}
</script>

<style scoped>
  .card {
    max-width: 400px;
  }
  .card-title{
    background: rgb(46,125,50);
    color: white;
  }
  .card-form {
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
</style>
