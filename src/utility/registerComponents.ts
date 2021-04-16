/* To register popular components globally */
import Vue from "vue"
import Icon from "@/components/atoms/Icon.vue";
import InlineButton from "@/components/atoms/InlineButton.vue";
import RoundButton from "@/components/atoms/RoundButton.vue";
import RoundInput from "@/components/molecules/RoundInput.vue";
import AvatarMd from "@/components/molecules/AvatarMd.vue";

/* Add 'Atom' components */
Vue.component('Icon', Icon)
Vue.component('InlineButton', InlineButton)
Vue.component('RoundButton', RoundButton)

/* Add 'Molecule' components */
Vue.component('AvatarMd', AvatarMd)
Vue.component('RoundInput', RoundInput)
