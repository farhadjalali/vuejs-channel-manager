<template>
    <ul class="px-4 overflow-auto">
        <li class="flex items-center px-1 align-far py-1" :key="channel.id" v-for="channel of channels">
            <!-- Left -->
            <div class="flex items-center flex-auto">
                <Icon class="sort-indicator text-gray-400 cursor-move" icon="grip-vertical" size="sm" />

                <AvatarMd :icon="getIcon(channel)"/>

                <div class="order-2">{{channel.title}}</div>
            </div>

            <!-- Right -->
            <InlineButton label="Remove" class="text-gray-400" @click="removeChannel(channel, $event)"/>
        </li>
    </ul>
</template>

<script lang="ts">
    import Vue from "vue"
    import {Component, Emit, Prop} from "vue-property-decorator"
    import {Channel, ChannelEventArg} from "@/types"
    import Sortable from "sortablejs"
    import {channelIcons} from "@/utility/fontAwesome"

    @Component({components: {}})
    export default class ChannelsList extends Vue {
        @Prop() channels?: Channel[]

        private drag = false

        getIcon(channel: Channel) {
            return channelIcons[channel.type]
        }

        mounted() {
            Sortable.create(this.$el as HTMLElement, {
                handle: ".sort-indicator",
                chosenClass: "sortable-ghost"
            })
        }

        @Emit("remove-channel")
        removeChannel(channel: Channel, ev: Event): ChannelEventArg {
            return {channel, originalEvent: ev}
        }
    }
</script>

<style lang="scss">
    .sortable-ghost {
        background-color: #f5f5f5;
    }
</style>
