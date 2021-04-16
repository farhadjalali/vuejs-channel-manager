import Vue from 'vue'
import App from './App.vue'
import {store} from './store'
import './assets/tailwind.css'
import './utility/fontAwesome'
import './utility/registerComponents'
import './directives'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    components: {App},
    template: '<App/>'
})
