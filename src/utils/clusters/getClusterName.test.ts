import { expect, test } from 'vitest'
import { getClusterName } from './getClusterName.js'

test.each([
  {
    address: '0x00000000000e1a99dddd5610111884278bdbda1d',
    expected: 'clusters/protocol',
  },
  {
    address: '0x5755d1dcea21caa687339c305d143e6e78f96adf',
    expected: 'clusters/main',
  },
  {
    address: '0x0000000000000000000000000000000000000000',
    expected: null,
  },
])(`getClusterName('$address') -> $expected`, async ({ address, expected }) => {
  const result = await getClusterName(address)
  expect(result).toEqual(expected)
})
