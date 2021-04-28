import Vue from 'vue'
import App from './App.vue'
import store from './state/store'
import './assets/tailwind.css'
import './utility/fontAwesome'
import './utility/registerComponents'
import './directives'

Vue.config.productionTip = false

const app = new Vue({
    store,
    render: (h) => h(App),
}).$mount('#app')

// If running e2e tests...
if (process.env.VUE_APP_TEST === 'e2e') {
    // Attach the app to the window, which can be useful
    // for manually setting state in Cypress commands
    // such as `cy.logIn()`.
    (window as any).__app__ = app
}
