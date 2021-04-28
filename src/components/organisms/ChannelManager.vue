<template>
    <div class="channel-manager flex flex-col p-4 rounded-xl border popup-shadow">
        <!-- Search Box -->
        <RoundInput place-holder="Add channel" name="add-channel" icon="search" class="w-full" @change="addChannel" @input="filteringChannels"/>

        <!-- Channels List -->
        <ChannelsList v-if="filteredChannels.length" class="w-full my-2 flex-grow" :channels="filteredChannels"
                      @remove-channel="removeChannel" @reorder-channel="reorderChannel"/>

        <!-- Hint for new item -->
        <div class="p-2 text-gray-500 text-sm flex-grow" v-else-if="filterPhrase">
            <span>Press Enter to create an item:</span>
            <span class="text-black px-1">{{filterPhrase}}</span>
        </div>

        <!-- Cancel / Apply -->
        <div class="text-right py-2 w-full" v-if="dirty">
            <RoundButton label="Cancel" class="border" @click="close"/>
            <RoundButton label="Apply" class="bg-black text-white" @click="apply"/>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import {Component, Emit, Prop} from "vue-property-decorator"
    import {Channel} from "@/types"
    import ChannelsList from "@/components/organisms/ChannelsList.vue"

    const KEY_ESCAPE = "Escape"
    const CHANNEL_TYPES_COUNT = 3

    @Component({
        components: {ChannelsList}
    })
    export default class ChannelManager extends Vue {
        @Prop()
        channels!: Channel[]

        @Emit('close')
        close(): void {
            // Nothing to do
        }

        @Emit('apply')
        apply(): Channel[] {
            return this.temporaryChannels
        }

        // To keep list of channels while this popup is up
        temporaryChannels: Channel[] = []

        // Keeps if there is a change
        dirty = false

        filterPhrase = ""

        get filteredChannels(): Channel[] {
            let channels = this.filterPhrase ?
                this.temporaryChannels.filter(channel => channel.title.toLowerCase().indexOf(this.filterPhrase.toLowerCase()) > -1) :
                this.temporaryChannels

            return channels
        }

        created() {
            this.temporaryChannels = JSON.parse(JSON.stringify(this.channels))
        }

        mounted(): void {
            // To close the popup on Escape key press
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
            // Don't add a channel if a any channel is visible
            if (this.filteredChannels.length)
                return

            // Generate ID and a random type just for test
            const maxID = this.temporaryChannels.length ? Math.max(...this.temporaryChannels.map(channel => channel.id)) : 0
            const type = Math.floor(Math.random() * CHANNEL_TYPES_COUNT) + 1

            const channel: Channel = {id: maxID + 1, title: value, type}
            this.temporaryChannels.push(channel)
            this.dirty = true

            this.filterPhrase = ""
        }

        reorderChannel(ev: { channel: Channel, oldIndex: number, newIndex: number }): void {
            this.temporaryChannels.splice(ev.oldIndex, 1)
            this.temporaryChannels.splice(ev.newIndex, 0, ev.channel)
            this.dirty = true
        }

        removeChannel(channel: Channel): void {
            this.temporaryChannels.splice(this.temporaryChannels.indexOf(channel), 1)
            this.dirty = true
        }

        filteringChannels(phrase: string): void {
            this.filterPhrase = phrase
        }
    }

</script>

<style lang="scss">
    .channel-manager {
        width: 550px;
        min-height: 400px;
    }

    @media (max-width: 640px) {
        .channel-manager {
            width: 100%;
        }
    }
</style>
