import {ChannelType} from "@/types/enums";

export interface Channel {
    id: number
    type: ChannelType // For now just be used for choosing the icon
    title: string
}
