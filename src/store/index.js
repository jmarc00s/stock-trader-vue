import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    saldo: 10000,
    acoes: [],
    acoesAdquiridas: []
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
    obterAcoes: state => state.acoes,
    obterSaldo: state => state.saldo,
    obterAcoesAdquiridas: state => state.acoesAdquiridas
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
  },
  modules: {
  }
})
