<template>
    <div class="flex flex-col place-items-center p-10">
        <img class="mb-10" src="/logo.svg" alt="">

        <RoundButton v-if="!showChannelsPopup" label="Show channels" @click="showChannelsPopup=true"/>

        <ChannelManager v-else :channels="channels" @close="close" @apply="apply"/>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from 'vue-property-decorator'
    import ChannelManager from "@/components/organisms/ChannelManager.vue"
    import {Channel, ChannelAlter} from "@/types"

    @Component({
        components: {
            ChannelManager,
        },
    })
    export default class Home extends Vue {
        @Prop()
        channels!: Channel[]

        close(): void {
            this.showChannelsPopup = false
        }

        @Emit('apply')
        apply(alters: ChannelAlter[]): ChannelAlter[] {
            this.showChannelsPopup = false
            return alters
        }

        private showChannelsPopup = false
    }
</script>
