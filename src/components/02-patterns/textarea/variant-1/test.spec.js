import { shallowMount } from "@vue/test-utils";
import Textarea from './component.vue'

describe('Textarea', () => {
	test('character count decreases when typing', () => {
		const wrapper = shallowMount(Textarea, {
			propsData: {
				id: 'xyz',
				name: 'xyz',
				label: 'Comment',
				maxLength: "140"
			}
		})
		let tm = wrapper.find('.textarea_message')
		expect(tm.text()).toContain('140 of 140 characters remaining.')
		wrapper.find('.textarea_input').trigger('keydown')
		wrapper.find('.textarea_input').setValue('abc')
		expect(tm.text()).toContain('137 of 140 characters remaining.')
	})
	test('character count cannot exceede maxlength attribute', () => {
		const wrapper = shallowMount(Textarea, {
			propsData: {
				id: 'xyz',
				name: 'xyz',
				label: 'Comment',
				maxLength: "140"
			}
		})
		let tm = wrapper.find('.textarea_message')
		expect(tm.text()).toContain('140 of 140 characters remaining.')
		wrapper.find('.textarea_input').trigger('keydown')
		wrapper.find('.textarea_input').setValue('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789')
		expect(tm.text()).toContain('0 of 140 characters remaining.')
	})
})
