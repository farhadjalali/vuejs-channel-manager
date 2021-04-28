import {ChannelType} from "@/types/enums"
import {Channel} from "@/types"
import {SAVE_CHANNELS} from "@/state/mutation-types"

interface State {
    list: Channel[]
}

export const state: State = {
    list: [
        {id: 1, type: ChannelType.Phone, title: "Team@trengo.com"},
        {id: 2, type: ChannelType.Phone, title: "Call center"},
        {id: 3, type: ChannelType.Whatsapp, title: "Whatsapp business"},
        {id: 4, type: ChannelType.Gmail, title: "(test) development California"},
        {id: 5, type: ChannelType.Whatsapp, title: "Whatsapp Business Iceland"},
    ] as Channel[]
}

export const getters = {}

export const mutations = {
    [SAVE_CHANNELS](state: State, channels: Channel[]) {
        state.list = channels
    }
}

export const actions = {}
