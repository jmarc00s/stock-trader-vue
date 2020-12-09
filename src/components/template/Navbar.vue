<template>
  <div id="navbar">
    <v-toolbar>
      <v-toolbar-title class="title">
        <strong>STOCK</strong>TRADER
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn text to="/" exact>  Início </v-btn>
        <v-btn text to="/portifolio"> Portifólio </v-btn>
        <v-btn text to="/acoes"> Ações </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text @click="finalizarDia"><strong>Finalizar dia</strong></v-btn>
        <v-menu bottom offset-y transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-on="on" v-bind="attrs"><strong>Salvar & carregar</strong></v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>Salvar dados</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="carregarDados">Carregar dados</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <label style="padding-top: 24px"> Saldo: {{saldo | paraReais }}</label>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  computed: {
    saldo () {
      return this.$store.getters.obterSaldo
    }
  },
  methods: {
    finalizarDia () {
      this.$store.dispatch('finalizarDia')
    },
    carregarDados () {
      this.$store.dispatch('obterAcoesIniciais')
    }
  }
}
</script>

<style>
.title {
  margin-right: 8px;
}
</style>
