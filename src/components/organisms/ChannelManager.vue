<template>
    <div class="channel-manager flex flex-col p-4 rounded-xl border popup-shadow">
        <RoundInput place-holder="Add channel" icon="search" class="w-full" @change="addChannel" @input="filteringChannels"/>

        <ChannelsList v-if="filteredChannels.length" class="w-full my-2 flex-grow" :channels="filteredChannels"
                      @remove-channel="removeChannel" @reorder-channel="reorderChannel"/>

        <div class="p-2 text-gray-500 text-sm" v-else-if="filterPhrase">
            <span>Press Enter to create an item:</span>
            <span class="text-black px-1">{{filterPhrase}}</span>
        </div>

        <div class="text-right py-2 w-full" v-if="alters.length">
            <RoundButton label="Cancel" class="border" @click="close"/>
            <RoundButton label="Apply" class="bg-black text-white" @click="apply"/>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import {Component, Emit, Prop} from "vue-property-decorator"
    import {Channel, ChannelAlter} from "@/types"

    const KEY_ESCAPE = "Escape"

    @Component({
        components: {}
    })
    export default class ChannelManager extends Vue {
        @Prop()
        channels!: Channel[]

        @Emit('close')
        close(): void {
            // Nothing to do
        }

        @Emit('apply')
        apply(): ChannelAlter[] {
            return this.alters
        }

        temporaryChannels: Channel[] = []

        alters: ChannelAlter[] = []

        filterPhrase = ""

        get filteredChannels(): Channel[] {
            let channels = this.filterPhrase ?
                this.temporaryChannels.filter(channel => channel.title.toLowerCase().indexOf(this.filterPhrase.toLowerCase()) > -1) :
                this.temporaryChannels


            channels.sort((a, b) => a.order > b.order ? 1 : -1)

            return channels
        }

        created() {
            this.temporaryChannels = [...this.channels]
        }

        mounted(): void {
            window.addEventListener("keydown", this.handleWindowKeydownEvent)
        }

        destroyed(): void {
            window.removeEventListener("keydown", this.handleWindowKeydownEvent)
        }

        handleWindowKeydownEvent(ev: KeyboardEvent): void {
            if (ev.key == KEY_ESCAPE)
                this.close()
        }

        addChannel(value: string): void {
            // Generate ID and type just for test
            const maxID = this.temporaryChannels.length ? Math.max(...this.temporaryChannels.map(channel => channel.id)) : 0
            const type = Math.floor(Math.random() * 3) + 1

            const channel: Channel = {id: maxID + 1, order: maxID + 1, title: value, type}
            this.alters.push({add: channel})
            this.temporaryChannels.push(channel)

            this.filterPhrase = ""
        }

        reorderChannel(ev: { channel: Channel, newOrder: number }): void {
            this.alters.push({reorder: ev})
        }

        removeChannel(channel: Channel): void {
            this.alters.push({remove: channel})
            this.temporaryChannels = this.temporaryChannels.filter(ch => ch != channel)
        }

        filteringChannels(phrase: string): void {
            this.filterPhrase = phrase
        }
    }

</script>

<style lang="scss">
    .channel-manager {
        width: 536px;
        height: 398px;
    }
</style>
