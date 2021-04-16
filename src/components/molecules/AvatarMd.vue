<template>
    <div class="avatar-md w-10 h-10 rounded-lg flex items-center justify-center mx-3">
        <Icon :icon="icon"/>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import {Component, Prop} from "vue-property-decorator"

    @Component({})
    export default class AvatarMd extends Vue {
        @Prop()
        icon!: string
    }
</script>

<style lang="scss" scoped>
    .avatar-md {
        background: var(--color-avatar-bg);
    }
</style>
