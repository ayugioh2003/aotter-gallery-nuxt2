import { mount } from '@vue/test-utils'
import { expect } from '@jest/globals'
import Button from '@/components/Button.vue'

describe('Button', () => {
  const slots = {
    default: 'hello world',
  }
  const wrapper = mount(Button, {
    slots,
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('has correct slot', () => {
    expect(wrapper.find('button').text()).toBe(slots.default)
  })
})
