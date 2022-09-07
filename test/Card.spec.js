import { mount } from '@vue/test-utils'
import { expect } from '@jest/globals'
import Card from '@/components/Card.vue'

describe('Card', () => {
  const props = {
    id: 1,
    title: 'hello world',
    url: 'https://www.google.com',
    thumbnailUrl: 'https://www.google.com/thumbnailUrl',
    isCurrentId: false,
  }
  const wrapper = mount(Card, {
    propsData: props,
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('has correct title', () => {
    expect(wrapper.find('.card-body').text()).toBe(props.title)
  })

  test('has correct thumbnailUrl', () => {
    expect(wrapper.find('img').attributes().src).toBe(props.thumbnailUrl)
  })
})
