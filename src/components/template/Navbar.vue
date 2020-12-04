<template>
  <div id="navbar">
    <v-toolbar>
      <v-toolbar-title class="title">
        <strong>STOCK</strong>TRADER
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn text to="/" exact> <strong> Início </strong></v-btn>
        <v-btn text to="/portifolio"> <strong> Portifólio </strong></v-btn>
        <v-btn text to="/acoes"> <strong> Ações </strong></v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text><strong>Finalizar dia</strong></v-btn>
        <v-btn text><strong>Salvar & carregar</strong></v-btn>
        <label style="padding-top: 24px"> Saldo: {{saldo | paraReais }}</label>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      saldo: 10000
    }
  }
}
</script>

<style>
.title {
  margin-right: 8px;
}
</style>
