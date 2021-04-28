<template>
    <Home :channels="$store.state.channels.list" @apply="apply"/>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import Home from "@/components/templates/Home.vue"
    import {Channel} from "@/types"
    import {SAVE_CHANNELS} from "@/state/mutation-types"

    @Component({
        components: {
            Home,
        },
    })
    export default class HomePage extends Vue {
        apply(channels: Channel[]): void {
            this.$store.commit(SAVE_CHANNELS, channels)
        }
    }
</script>
