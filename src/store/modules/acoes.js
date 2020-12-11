
export default {
  state: {
    acoes: []
  },
  mutations: {
    setarAcoes (state, payload) {
      if (payload && payload.length) {
        payload.forEach(data => state.acoes.push(data))
      }
    },
    alterarValorAcoesAleatoriamente (state) {
      state.acoes.map(acao => { acao.valor = Math.round(acao.valor * (1 + Math.random() - 0.42)) })
    }
  },
  getters: {
    obterAcoes: state => state.acoes
  },
  actions: {
    finalizarDia ({ commit }) {
      commit('alterarValorAcoesAleatoriamente')
    }
  }
}
