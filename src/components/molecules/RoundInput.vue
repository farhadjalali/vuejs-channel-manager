<template>
    <div class="round-input flex items-center border rounded-full p-2">
        <Icon :icon="icon" class="mx-1 text-gray-400"/>
        <input :name="name" class="px-1 flex-grow outline-none bg-transparent" v-focus :placeholder="placeHolder" v-model="inputValue" @change="change" @input="input"/>
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
        name?: string

        @Prop()
        value?: string

        inputValue = ""

        @Emit("change")
        change(): string {
            const val = this.inputValue
            this.inputValue = ""
            return val
        }

        @Emit("input")
        input(): string {
            return this.inputValue
        }

        created(): void {
            this.inputValue = this.value || ""
        }
    }
</script>
