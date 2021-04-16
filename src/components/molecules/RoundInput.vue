<template>
    <div class="round-input flex items-center border rounded-full p-2">
        <Icon :icon="icon" class="mx-1"/>
        <input class="px-1 flex-grow outline-none" v-focus :placeholder="placeHolder" v-model="inputValue" @change="change" @input="input"/>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import {Component, Emit, Prop} from "vue-property-decorator"

    @Component({})
    export default class RoundInput extends Vue {
        @Prop()
        placeHolder?: string

        @Prop()
        icon?: string

        @Prop()
        value?: string

        inputValue = ""

        @Emit("change")
        change() {
            const val = this.inputValue
            this.inputValue = ""
            return val
        }

        @Emit("input")
        input() {
            return this.inputValue
        }

        created() {
            this.inputValue = this.value || ""
        }
    }
</script>
