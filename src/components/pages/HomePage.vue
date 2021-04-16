<template>
    <Home :channels="$store.state.channels" @close="close"/>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import Home from "@/components/templates/Home.vue"
    import {Channel} from "@/types";
    import {SAVE_CHANNELS} from "@/store/mutation-types";

    @Component({
        components: {
            Home,
        },
    })
    export default class HomePage extends Vue {

        close(apply: boolean) {
            if (apply)
                this.$store.commit(SAVE_CHANNELS, [])
        }
    }
</script>
