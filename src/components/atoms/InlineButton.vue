<template>
    <button @click="$emit('click', $event)">{{label}}</button>
</template>

<script lang="ts">
    import Vue from "vue"
    import {Component, Prop} from "vue-property-decorator"

    @Component({})
    export default class InlineButton extends Vue {
        @Prop()
        label!: string
    }
</script>
