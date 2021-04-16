import {ChannelType} from "@/types/enums";

export interface Channel {
    id: number
    order: number
    type: ChannelType
    title: string
}

export interface ChannelEventArg {
    originalEvent: Event
    channel: Channel
}

export interface ChannelAlter {
    add?: Channel
    remove?: Channel
    reorder?: {
        id: number
        newOrder: number
    }
}
