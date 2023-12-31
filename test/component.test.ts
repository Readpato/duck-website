import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import DuckCounter from '@/components/DuckCounter.vue'

describe('component testing', () => {
  it('tests interactivity', async () => {
    const component = mount(DuckCounter)
    expect(component.find('[data-test="counter-value"]').text()).toContain('0')
    await component.find('[data-test="increment-cta"]').trigger('click')
    expect(component.find('[data-test="counter-value"]').text()).toEqual('1')
    await component.find('[data-test="decrement-cta"]').trigger('click')
    expect(component.find('[data-test="counter-value"]').text()).toEqual('0')
  })
})
