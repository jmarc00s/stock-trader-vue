<template>
  <div>
    <h1 class="py-3 ">Negocie e Consulte suas Ações</h1>
    <v-alert
        elevation="5"
        type="info"
       >
        Voce pode salvar e carregas os dados.
    </v-alert>
    <v-alert elevation="5" type="info" color="green"> Clique em finalizar dia para iniciar um novo dia!</v-alert>
    <hr>
    <h3>Seu saldo {{saldo | paraReais}}</h3>
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

</style>
