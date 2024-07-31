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
])(`getCluster('$address') -> $expected`, ({ address, expected }) => {
  expect(getClusterName(address)).toBe(expected)
})