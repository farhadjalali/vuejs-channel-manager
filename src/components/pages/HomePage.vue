<template>
    <Home :channels="$store.state.channels" @apply="apply"/>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import Home from "@/components/templates/Home.vue"
    import {ChannelAlter} from "@/types"
    import {SAVE_CHANNELS} from "@/store/mutation-types"

    @Component({
        components: {
            Home,
        },
    })
    export default class HomePage extends Vue {

        apply(alters: ChannelAlter[]): void {
            this.$store.commit(SAVE_CHANNELS, alters)
        }
    }
</script>
