import ChannelManager from "@/components/organisms/ChannelManager.vue"
import {mount} from '@vue/test-utils'
import {ChannelType} from "@/types/enums"
import '@/utility/registerComponents'
import '@/directives'

test('ChannelManager', () => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(ChannelManager, {
        propsData: {
            channels: [
                {id: 1, order: 1, type: ChannelType.Phone, title: "Team@trengo.com"},
                {id: 2, order: 2, type: ChannelType.Phone, title: "Call center"},
            ]
        }
    })

    // As a sample we expect to have two 'li' based on our channels data
    let el = wrapper.vm.$el.querySelector("ul")
    expect(el).not.toBeNull()

    expect((<Element>el).children.length)
        .toEqual(2)
})
