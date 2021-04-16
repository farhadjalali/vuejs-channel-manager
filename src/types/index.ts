import {ChannelType} from "@/types/enums";

export interface Channel {
    id: number
    order: number
    type: ChannelType
    title: string
}

export interface ChannelAlter {
    add?: Channel
    remove?: Channel
    reorder?: {
        channel: Channel
        newOrder: number
    }
}
