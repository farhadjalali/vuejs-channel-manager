import Vue from 'vue'
import Vuex from 'vuex'
import {State} from "./state"
import {ChannelType} from "@/types/enums"
import {Channel, ChannelAlter} from "@/types"
import {SAVE_CHANNELS} from "@/store/mutation-types"

Vue.use(Vuex)

const state = {
    channels: [
        {id: 1, order: 1, type: ChannelType.Phone, title: "Team@trengo.com"},
        {id: 2, order: 2, type: ChannelType.Phone, title: "Call center"},
        {id: 3, order: 3, type: ChannelType.Whatsapp, title: "Whatsapp business"},
        {id: 4, order: 4, type: ChannelType.Gmail, title: "(test) development California"},
        {id: 5, order: 5, type: ChannelType.Whatsapp, title: "Whatsapp Business Iceland"},
    ] as Channel[]
}

const mutations = {
    [SAVE_CHANNELS](state: State, alters: ChannelAlter[]) {
        for (const alter of alters) {
            if (alter.add)
                state.channels.push(alter.add)

            else if (alter.remove)
                state.channels = state.channels.filter(channel => channel != alter.remove)

            else if (alter.reorder) {
                alter.reorder.channel.order = alter.reorder.newOrder
            }
        }
    }
}

const actions = {}

const getters = {}

export const createStore = () => new Vuex.Store<State>({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,

    // Enable strict mode in development to get a warning
    // when mutating state outside of a mutation.
    strict: process.env.NODE_ENV !== 'production',
});
