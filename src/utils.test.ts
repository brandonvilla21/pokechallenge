import { getTypes } from './utils'

describe('Utils', () => {
  const types = [
    {
      type: { name: 'Water' }
    },
    {
      type: { name: 'Fire' }
    },
    {
      type: { name: 'Poison' }
    },
  ]

  it('should return the correct string', () => {
    const result = getTypes(types)
    expect(result).toEqual('Water, Fire, Poison')
  })
})
