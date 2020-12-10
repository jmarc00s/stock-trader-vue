const Portifolio = {
  state: {
    saldo: 10000,
    acoesAdquiridas: []
  },
  mutations: {
    diminuirSaldo (state, payload) {
      state.saldo -= payload
    },
    aumentarSaldo (state, payload) {
      state.saldo += payload
    },
    adicionarAcaoAdquirida (state, payload) {
      state.acoesAdquiridas.push(payload)
    },
    removerQuantidadeAcao (state, payload) {
      const acaoARemover = state.acoesAdquiridas.filter(acao => acao.acao.id === payload.acao.id)[0]

      const index = state.acoesAdquiridas.indexOf(acaoARemover)

      const acao = state.acoesAdquiridas[index]

      acao.quantidade -= payload.quantidade

      if (acao.quantidade <= 0) {
        state.acoesAdquiridas.splice(index, 1)
      }
    }
  },
  getters: {
    obterSaldo: state => state.saldo,
    obterAcoesAdquiridas: state => state.acoesAdquiridas
  },
  actions: {
    comprarAcao ({ commit }, payload) {
      const valorADeduzir = payload.acao.valor * payload.quantidade
      commit('adicionarAcaoAdquirida', payload)
      commit('diminuirSaldo', valorADeduzir)
    },
    venderAcao ({ commit }, payload) {
      const valorASomar = payload.acao.valor * payload.quantidade
      commit('removerQuantidadeAcao', payload)
      commit('aumentarSaldo', valorASomar)
    }
  }

}

export default Portifolio
