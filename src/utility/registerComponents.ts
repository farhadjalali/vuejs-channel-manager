/* Add 'Atom' components */
import Vue from "vue"
import Icon from "@/components/atoms/Icon.vue";
import InlineButton from "@/components/atoms/InlineButton.vue";
import RoundButton from "@/components/atoms/RoundButton.vue";
import RoundInput from "@/components/molecules/RoundInput.vue";
import AvatarMd from "@/components/molecules/AvatarMd.vue";
import ChannelsList from "@/components/organisms/ChannelsList.vue";

/* Add 'Atom' components */
Vue.component('Icon', Icon)
Vue.component('InlineButton', InlineButton)
Vue.component('RoundButton', RoundButton)

/* Add 'Molecule' components */
Vue.component('RoundInput', RoundInput)
Vue.component('AvatarMd', AvatarMd)

/* Add 'Organisms' components */
Vue.component('ChannelsList', ChannelsList)
