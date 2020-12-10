import Vue from 'vue'
import Vuex from 'vuex'
import Acoes from './modules/acoes'
import Portifolio from './modules/portifolio'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    obterAcoesIniciais ({ commit }) {
      const p = Vue.prototype.$http('acoes.json')
      p.then((res) => {
        const data = Object.keys(res.data).map(key => res.data[key])
        if (data) {
          commit('setarAcoes', data)
        }
      })
    }
  },
  modules: {
    Acoes,
    Portifolio
  }
})
