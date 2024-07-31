import { expect, test } from 'vitest'
import { getClusterAddress } from './getClusterAddress.js'

test.each([
  {
    name: 'clusters/protocol',
    expected: '0x00000000000e1a99dddd5610111884278bdbda1d',
  },
  {
    name: 'clusters/main',
    expected: '0x5755d1dcea21caa687339c305d143e6e78f96adf',
  },
  {
    name: 'clusters/',
    expected: '0x5755d1dcea21caa687339c305d143e6e78f96adf',
  },
  {
    name: 'clusters',
    expected: '0x5755d1dcea21caa687339c305d143e6e78f96adf',
  },
])(`getCluster('$name') -> $expected`, ({ name, expected }) => {
  expect(getClusterAddress(name)).toBe(expected)
})
