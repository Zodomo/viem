import { expect, test } from 'vitest'

import * as clusters from './index.js'

test('exports clusters', () => {
  expect(clusters).toMatchInlineSnapshot(`
    {
      "getCluster": [Function],
      "getClusterAddress": [Function],
      "getClusterName": [Function],
    }
  `)
})
