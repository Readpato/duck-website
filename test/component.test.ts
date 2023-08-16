import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import DuckCounter from '@/components/DuckCounter.vue'

describe('Component testing', () => {
  test('Tests interactivity', async () => {
    const component = mount(DuckCounter)
    expect(component.find('[data-test="counter-value"]').text()).toContain('0')
    await component.find('[data-test="increment-cta"]').trigger('click')
    expect(component.find('[data-test="counter-value"]').text()).toEqual('1')
    await component.find('[data-test="decrement-cta"]').trigger('click')
    expect(component.find('[data-test="counter-value"]').text()).toEqual('0')
  })
})
