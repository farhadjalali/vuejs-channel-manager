<template>
    <FontAwesomeIcon :size="size" :icon="icon"/>
</template>

<script lang="ts">
    import Vue from "vue"
    import {Component, Prop} from "vue-property-decorator"

    @Component({})
    export default class Icon extends Vue {
        @Prop()
        icon!: string

        @Prop()
        size!: string
    }
</script>
