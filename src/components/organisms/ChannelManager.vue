<template>
    <div class="channel-manager flex flex-col p-4 rounded-xl border popup-shadow">
        <RoundInput place-holder="Add channel" icon="search" class="w-full" @change="addChannel" @input="filteringChannels"/>

        <ChannelsList v-if="filteredChannels.length" class="w-full my-2" :channels="filteredChannels" @remove-channel="removeChannel"/>

        <div class="p-2 text-gray-500 text-sm" v-else-if="filterPhrase">
            <span>Press Enter to create an item:</span>
            <span class="text-black px-1">{{filterPhrase}}</span>
        </div>

        <div class="text-right py-2 w-full" v-if="alters.length">
            <RoundButton label="Cancel" @click="close"/>
            <RoundButton label="Apply" class="bg-black text-white" @click="apply"/>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import {Component, Emit, Prop} from "vue-property-decorator"
    import {Channel, ChannelEventArg, ChannelAlter} from "@/types"
    import {SAVE_CHANNELS} from "@/store/mutation-types"

    const KEY_ESCAPE = "Escape"

    @Component({
        components: {}
    })
    export default class ChannelManager extends Vue {
        @Prop()
        channels!: Channel[]

        temporaryChannels: Channel[] = []

        filterPhrase = ""

        handleWindowKeydownEvent(ev: KeyboardEvent) {
            if (ev.key == KEY_ESCAPE)
                this.close()
        }

        mounted() {
            window.addEventListener("keydown", this.handleWindowKeydownEvent)
            this.temporaryChannels = [...this.channels]
        }

        destroyed() {
            window.removeEventListener("keydown", this.handleWindowKeydownEvent)
        }

        get filteredChannels(): Channel[] {
            let channels = this.filterPhrase ?
                this.temporaryChannels.filter(channel => channel.title.toLowerCase().indexOf(this.filterPhrase.toLowerCase()) > -1) :
                this.temporaryChannels

            return channels
        }

        alters: ChannelAlter[] = []

        addChannel(value: string) {
            // Generate ID, type just for test
            const maxID = this.temporaryChannels.length ? Math.max(...this.temporaryChannels.map(channel => channel.id)) : 0
            const type = Math.floor(Math.random() * 3) + 1

            const channel: Channel = {id: maxID + 1, order: maxID + 1, title: value, type}
            this.alters.push({add: channel})
            this.temporaryChannels.push(channel)

            this.filterPhrase = ""
        }

        removeChannel(ev: ChannelEventArg) {
            this.alters.push({remove: ev.channel})
            this.temporaryChannels = this.temporaryChannels.filter(channel => channel != ev.channel)
        }

        filteringChannels(phrase: string) {
            this.filterPhrase = phrase
        }

        @Emit('close')
        close() {
            return null
        }

        @Emit('apply')
        apply() {
            return this.alters
        }
    }

</script>

<style lang="scss">
    .channel-manager {
        width: 536px;
        height: 398px;
    }
</style>
