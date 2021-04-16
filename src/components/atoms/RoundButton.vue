<template>
    <button @click="$emit('click', $event)" class="mx-1 py-1 px-4 border rounded-full">{{label}}</button>
</template>

<script lang="ts">
    import Vue from "vue"
    import {Component, Prop} from "vue-property-decorator"

    @Component({})
    export default class RoundButton extends Vue {
        @Prop()
        label!: string
    }
</script>
