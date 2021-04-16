import {ChannelType} from "@/types/enums";

export interface Channel {
    id: number
    order: number // To make the channels sortable
    type: ChannelType // For now just be used for choosing the icon
    title: string
}

// To save the status of channel changes (creating / removing / altering)
// Todo: not best solution, just as quick prototype
export interface ChannelAlter {
    add?: Channel
    remove?: Channel
    reorder?: {
        channel: Channel
        newOrder: number
    }
}
