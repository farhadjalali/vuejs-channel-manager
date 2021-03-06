<template>
    <ul class="px-4 overflow-auto">
        <li class="flex items-center flex-row px-1 whitespace-nowrap  py-1" :key="channel.id" v-for="channel of channels">
            <!-- Left -->
            <div class="flex items-center flex-auto">
                <!-- Sort Indicator -->
                <Icon class="sort-indicator text-gray-300 cursor-move" icon="grip-vertical" size="sm"/>

                <!-- Icon -->
                <AvatarMd :icon="getIcon(channel)"/>

                <!-- Channel title -->
                <div class="order-2">{{channel.title}}</div>
            </div>

            <!-- Remove Button -->
            <InlineButton label="Remove" class="pl-5 font-medium" @click="removeChannel(channel)"/>
        </li>
    </ul>
</template>

<script lang="ts">
    import Vue from "vue"
    import {Component, Emit, Prop} from "vue-property-decorator"
    import {Channel} from "@/types"
    import Sortable, {SortableEvent} from "sortablejs"
    import {channelIcons} from "@/utility/fontAwesome"

    @Component({components: {}})
    export default class ChannelsList extends Vue {
        @Prop() channels!: Channel[]

        @Emit("reorder-channel")
        reorderChannel(channel: Channel, oldIndex: number, newIndex: number): { channel: Channel, oldIndex: number, newIndex: number } {
            return {channel, oldIndex, newIndex}
        }

        @Emit("remove-channel")
        removeChannel(channel: Channel): Channel {
            return channel
        }

        mounted(): void {
            Sortable.create(this.$el as HTMLElement, {
                handle: ".sort-indicator",
                chosenClass: "sortable-ghost",
                onEnd: (ev: SortableEvent) => {
                    if (ev.oldIndex != ev.newIndex && ev.oldIndex && ev.newIndex) {
                        const channel = this.channels[ev.oldIndex]
                        this.reorderChannel(channel, ev.oldIndex, ev.newIndex)
                    }
                }
            })
        }

        getIcon(channel: Channel): unknown {
            return channelIcons[channel.type]
        }
    }
</script>

<style lang="scss" scoped>
    .sortable-ghost {
        background-color: #f5f5f5;
        border-radius: 6px;
    }
</style>
