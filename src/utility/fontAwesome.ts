import Vue from 'vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'

/* chose icons */
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import {faGripVertical, faUserSecret, faSearch, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {ChannelType} from "@/types/enums";

/* register icons */
library.add(faUserSecret, faGripVertical, faSearch, faPhone, faWhatsapp, faEnvelope)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

export const channelIcons = {
    [ChannelType.Gmail]: ["fas", "envelope"],
    [ChannelType.Whatsapp]: ['fab', "whatsapp"],
    [ChannelType.Phone]: ['fas', "phone"],
}
