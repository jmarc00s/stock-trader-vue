import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    saldo: 10000,
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
    },
    diminuirSaldo (state) {
      state.saldo -= 1000
    }
  },
  getters: {
    obterAcoes: state => state.acoes,
    obterSaldo: state => state.saldo
  },
  actions: {
    obterAcoesIniciais ({ commit }) {
      const p = Vue.prototype.$http('acoes.json')
      p.then((res) => {
        const data = Object.keys(res.data).map(key => res.data[key])
        if (data) {
          commit('setarAcoes', data)
        }
      })
    },
    finalizarDia ({ commit }) {
      commit('alterarValorAcoesAleatoriamente')
    },
    carregarDados ({ commit }) {

    },
    diminuirSaldo ({ commit }) {
      commit('diminuirSaldo')
    }
  },
  modules: {
  }
})
