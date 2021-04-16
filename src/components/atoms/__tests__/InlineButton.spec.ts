import InlineButton from "@/components/atoms/InlineButton.vue"
import {mount} from '@vue/test-utils'

test('InlineButton', () => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(InlineButton, {
        propsData: {
            label: 'Remove'
        }
    })

    // Assert the rendered text of the component
    expect(wrapper.text()).toBe('Remove')
})
