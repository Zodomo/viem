import { expect, test } from 'vitest'
import { getCluster } from './getCluster.js'

test.each([
  {
    cluster: 'clusters',
    expected: [
      '0x00000000000e1a99dddd5610111884278bdbda1d',
      '0x5755d1dcea21caa687339c305d143e6e78f96adf',
    ],
  },
  {
    cluster: 'clusters/',
    expected: [
      '0x00000000000e1a99dddd5610111884278bdbda1d',
      '0x5755d1dcea21caa687339c305d143e6e78f96adf',
    ],
  },
  {
    cluster: `${'z'.repeat(33)}`,
    expected: null,
  },
])(`getCluster('$cluster') -> $expected`, async ({ cluster, expected }) => {
  const result = await getCluster(cluster)
  expect(result).toEqual(expected)
})
