import Vue from 'vue'

Vue.filter('paraReais', function (value) {
  return `R$ ${value.toLocaleString(undefined, { minimumFractionDigits: 2 })}`
})

export default Vue
