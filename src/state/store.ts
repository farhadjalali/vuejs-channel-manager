import Vue from 'vue'
import Vuex from 'vuex'
import * as channels from "./modules/channels"

const modules = {
    channels
}

Vue.use(Vuex)

const store = new Vuex.Store({
    modules,
    strict: process.env.NODE_ENV !== 'production',
})

export default store
